import DataGridComponent from "@/components/Datagrid";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userQuestColumn } from "./models/user-quest.model";
import { getQuestByIdAction } from "@/libs/redux/features/Quest/asyncActions";

const transformProjects = (project) => {
  if (!project) return null;
  return { ...project, id: project._id };
};

const UserQuests = ({ quests }) => {
  const dispatch = useDispatch();
  const [userQuests, setUserQuests] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const transformedProjects = await Promise.all(
        quests.map(async (questId) => {
          const response = await dispatch(getQuestByIdAction(questId));
          return transformProjects(response?.payload?.data);
        })
      );

      setUserQuests(transformedProjects.filter(Boolean));
    };

    if (Array.isArray(quests) && quests.length > 0) {
      setLoading(true);
      fetchProjects().finally(() => setLoading(false));
    } else {
      setUserQuests([]);
    }
  }, [dispatch, quests]);

  useEffect(() => {
    let newColumns = [...userQuestColumn];
    setColumns(newColumns);
  }, [quests]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <DataGridComponent
      rows={userQuests}
      columns={columns}
      pageSize={20}
      paginationMode="server"
      onPageChange={handlePageChange}
      rowCount={totalPages}
      loading={loading}
    />
  );
};

export default UserQuests;
