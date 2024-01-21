/* eslint-disable react-hooks/exhaustive-deps */
import CardComponent from "@/components/Card";
import {
  deleteTeamProject,
  getTeamProjects,
} from "@/libs/redux/features/Project/asyncActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectColumn } from "./models/project.model";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import DataGridComponent from "@/components/Datagrid";
import { Icon } from "@iconify/react";
import swalHelper, { toastSuccessNotify } from "@/libs/helper/toastHelper";

const transformMembersData = (members) => {
  if (!members) return [];
  return members.map((member) => ({
    ...member,
    id: member._id,
  }));
};

const GetUserProjectView = () => {
  const dispatch = useDispatch();
  const [team_projects, setTeamProjects] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([]);
  const { yesNoSwal } = swalHelper();

  useEffect(() => {
    dispatch(getTeamProjects()).then((response) => {
      const transformedMembers = transformMembersData(response?.payload?.data);
      setTeamProjects(transformedMembers);
    });
  }, [dispatch]);

  useEffect(() => {
    let newColumns = [
      ...projectColumn,
      {
        field: "actions",
        headerName: "İşlemler",
        width: 200,
        renderCell: (params) => (
          <Box>
            <Link href={`/projects/${params.row.id}`}>
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
              onClick={() => removeProject(params.row)}
            >
              Sil
            </Button>
          </Box>
        ),
      },
    ];
    setColumns(newColumns);
  }, [team_projects]);

  const removeProject = (project) => {
    yesNoSwal({
      title: "Emin misiniz?",
      text: `${project.name} isimli proje silinecektir.`,
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          deleteTeamProject({
            id: project.id,
          })
        ).then((response) => {
          if (response?.payload?.success) {
            toastSuccessNotify(response?.payload?.message);
            dispatch(getTeamProjects()).then((response) => {
              const transformedMembers = transformMembersData(
                response?.payload?.data
              );
              setTeamProjects(transformedMembers);
            });
          }
        });
      }
    });
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
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
        rows={team_projects}
        columns={columns}
        pageSize={20}
        paginationMode="server"
        onPageChange={handlePageChange}
        rowCount={totalPages}
        loading={loading}
      />
    </CardComponent>
  );
};

export default GetUserProjectView;
