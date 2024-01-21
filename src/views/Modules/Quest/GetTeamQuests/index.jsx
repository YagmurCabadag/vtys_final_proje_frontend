/* eslint-disable react-hooks/exhaustive-deps */
import CardComponent from "@/components/Card";
import DataGridComponent from "@/components/Datagrid";
import swalHelper, { toastSuccessNotify } from "@/libs/helper/toastHelper";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { questsColumn } from "./models/team-quest.model";
import {
  getTeamQuestsAction,
  removeQuestAction,
} from "@/libs/redux/features/Quest/asyncActions";
import axiosBase from "@/config/AxiosBase";
import { projectTypes, teamTypes } from "@/types/apiTypes";
import { Icon } from "@iconify/react";

const transformMembersData = async (members) => {
  if (!members) return [];

  const transformedMembers = await Promise.all(
    members.map(async (member) => {
      try {
        const userResponse = await axiosBase.get(
          `${teamTypes.GET_TEAM_MEMBER}/${member.assignedTo}`
        );

        const projectResponse = await axiosBase.get(
          `${projectTypes.GET_TEAM_PROJECT}/${member.project}`
        );

        const updatedMember = {
          ...member,
          assignedTo: userResponse.data.data.username,
          project: projectResponse.data.data.name,
        };

        return updatedMember;
      } catch (error) {
        console.error(
          `Error fetching data for member with assignedTo ${member.assignedTo}:`,
          error
        );
        return member;
      }
    })
  );

  return transformedMembers.map((member) => ({
    ...member,
    id: member._id,
  }));
};

const GetTeamQuestsView = () => {
  const dispatch = useDispatch();
  const [quests, setQuests] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([]);
  const { yesNoSwal } = swalHelper();

  useEffect(() => {
    setLoading(true);
    dispatch(getTeamQuestsAction()).then(async (response) => {
      const transformedQuests = await transformMembersData(
        response?.payload?.data
      );
      setQuests(transformedQuests);
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    let newColumns = [
      ...questsColumn,
      {
        field: "actions",
        headerName: "İşlemler",
        width: 200,
        renderCell: (params) => (
          <Box>
            <Link href={`/tasks/${params.row.id}`}>
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
              onClick={() => removeQuest(params.row)}
            >
              Sil
            </Button>
          </Box>
        ),
      },
    ];
    setColumns(newColumns);
  }, [quests]);

  const removeQuest = (quest) => {
    yesNoSwal({
      title: "Emin misiniz?",
      text: `${quest.title} isimli proje silinecektir.`,
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeQuestAction(quest.id))
          .then((res) => {
            if (res.payload.status === 200) {
              toastSuccessNotify("Görev başarıyla silindi");
              dispatch(getTeamQuestsAction()).then((response) => {
                const transformedQuests = transformMembersData(
                  response?.payload?.data
                );
                setQuests(transformedQuests);
              });
            } else {
              toastSuccessNotify("Görev silinirken bir hata oluştu");
            }
          })
          .catch(() => {
            console.error("Error while deleting quest");
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
        rows={quests}
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

export default GetTeamQuestsView;
