/* eslint-disable react-hooks/exhaustive-deps */
import DataGridComponent from "@/components/Datagrid";
import {
  getTeamMembersAction,
  removeTeamMemberAction,
} from "@/libs/redux/features/Team/asyncActions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { membersColumn } from "../models/team.model";
import { Box, Button } from "@mui/material";
import swalHelper from "@/libs/helper/toastHelper";
import { Icon } from "@iconify/react";
import Link from "next/link";

const transformMembersData = (members) => {
  if (!members) return [];
  return members.map((member) => ({
    ...member,
    id: member._id,
  }));
};

const TeamMembers = () => {
  const dispatch = useDispatch();
  const [members, setMembers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([]);
  const { yesNoSwal } = swalHelper();

  useEffect(() => {
    setLoading(true);
    dispatch(getTeamMembersAction()).then((response) => {
      const transformedMembers = transformMembersData(response?.payload?.data);
      setMembers(transformedMembers);
      setLoading(false);
    });
  }, [dispatch]);

  const removeMember = (row) => {
    yesNoSwal({
      title: `${row.username} isimli üyeyi silmek istediğinizden emin misiniz?`,
      text: "Bu işlem geri alınamaz!",
    }).then((response) => {
      if (!response.isConfirmed) return;
      dispatch(
        removeTeamMemberAction({
          id: row.id,
        })
      ).then((response) => {
        if (response?.payload?.success) {
          setLoading(true);
          dispatch(getTeamMembersAction()).then((response) => {
            const transformedMembers = transformMembersData(
              response?.payload?.data
            );
            setMembers(transformedMembers);
            setLoading(false);
          });
        }
      });
    });
  };

  useEffect(() => {
    let newColumns = [
      ...membersColumn,
      {
        field: "actions",
        headerName: "İşlemler",
        width: 200,
        renderCell: (params) => (
          <Box>
            <Link href={`/user/${params.row.id}`} passHref>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<Icon icon="mdi:account-edit" />}
                style={{ marginRight: 16 }}
              >
                Düzenle
              </Button>
            </Link>
            <Button
              variant="contained"
              color="error"
              size="small"
              startIcon={<Icon icon="mdi:account-remove" />}
              onClick={() => removeMember(params.row)}
            >
              Sil
            </Button>
          </Box>
        ),
      },
    ];
    setColumns(newColumns);
  }, [members]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <DataGridComponent
      rows={members}
      columns={columns}
      pageSize={20}
      paginationMode="server"
      onPageChange={handlePageChange}
      rowCount={totalPages}
      loading={loading}
    />
  );
};

export default TeamMembers;
