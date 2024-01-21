/* eslint-disable react-hooks/exhaustive-deps */
import DataGridComponent from "@/components/Datagrid";
import swalHelper, { toastInfoNotify } from "@/libs/helper/toastHelper";
import { getAllUsersAction } from "@/libs/redux/features/Auth/asyncActions";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMembersColumn } from "./models/add-member.model";
import { addMemberTeamAction } from "@/libs/redux/features/Team/asyncActions";
import { Icon } from "@iconify/react";
import CardComponent from "@/components/Card";

const transformMembersData = (members) => {
  if (!members) return [];
  return members.map((member) => ({
    ...member,
    id: member._id,
  }));
};

const AddMemberView = () => {
  const dispatch = useDispatch();
  const [members, setMembers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([]);
  const { yesNoSwal } = swalHelper();
  const { user } = useSelector((state) => state.auth);
  const { team } = useSelector((state) => state.team);

  useEffect(() => {
    setLoading(true);
    dispatch(getAllUsersAction()).then((response) => {
      const transformedMembers = transformMembersData(response?.payload?.data);
      const filteredMembers = transformedMembers.filter(
        (member) => member._id !== user._id
      );
      setMembers(filteredMembers);
      setLoading(false);
    });
  }, [dispatch]);

  const addMember = (member) => {
    yesNoSwal({
      title: `${member.username} adlı kullanıcıyı eklemek istediğinize emin misiniz?`,
    }).then((result) => {
      if (result.isConfirmed) {
        // toastInfoNotify(`${member.username} adlı kullanıcı eklenmiştir.`);
        dispatch(addMemberTeamAction({ id: member.id })).then((response) => {
          dispatch(getAllUsersAction()).then((response) => {
            const transformedMembers = transformMembersData(
              response?.payload?.data
            );
            setMembers(transformedMembers);
            setLoading(false);
          });
        });
      }
    });
  };

  useEffect(() => {
    let newColumns = [
      ...addMembersColumn,
      {
        field: "actions",
        headerName: "İşlemler",
        width: 200,
        renderCell: (params) => (
          <Box>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Icon icon="mdi:account-plus" />}
              onClick={() => addMember(params.row)}
            >
              Takıma Ekle
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
    <>
      {team ? (
        <Grid container>
          {team && team.teamLeader === user._id ? (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CardComponent
                  className="
            w-full
            mx-auto
            p-10
            shadow-lg
            rounded-md
            text-gray-800
      "
                >
                  <DataGridComponent
                    rows={members}
                    columns={columns}
                    pageSize={20}
                    paginationMode="server"
                    onPageChange={handlePageChange}
                    rowCount={totalPages}
                    loading={loading}
                  />
                </CardComponent>
              </Grid>
            </Grid>
          ) : (
            <CardComponent
              className="
            w-full
            mx-auto
            p-10
            shadow-lg
            rounded-md
            text-gray-800
            flex
            justify-center
            items-center
            
            "
            >
              <Alert
                severity="warning"
                sx={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Bu sayfaya erişim yetkiniz bulunmamaktadır. Lütfen takım lideri
                ile iletişime geçiniz.
              </Alert>
            </CardComponent>
          )}
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CardComponent
              className="
            w-full
            mx-auto
            p-10
            shadow-lg
            rounded-md
            text-gray-800
      "
            >
              <Alert
                severity="warning"
                sx={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Takımınız bulunmamaktadır. Lütfen takım oluşturunuz.
              </Alert>
            </CardComponent>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default AddMemberView;
