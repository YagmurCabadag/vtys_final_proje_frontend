import DataGridComponent from "@/components/Datagrid";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userProjectColumn } from "./models/user-project.model";
import { getProjectById } from "@/libs/redux/features/Project/asyncActions";

const transformProjects = (project) => {
  if (!project) return null;
  return { ...project, id: project._id };
};

const UserProjects = ({ projects }) => {
  const dispatch = useDispatch();
  const [userProjects, setUserProjects] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const transformedProjects = await Promise.all(
        projects.map(async (projectId) => {
          const response = await dispatch(getProjectById({ id: projectId }));
          return transformProjects(response?.payload?.data);
        })
      );

      setUserProjects(transformedProjects.filter(Boolean));
    };

    if (Array.isArray(projects) && projects.length > 0) {
      setLoading(true);
      fetchProjects().finally(() => setLoading(false));
    } else {
      setUserProjects([]);
    }
  }, [dispatch, projects]);

  useEffect(() => {
    let newColumns = [...userProjectColumn];
    setColumns(newColumns);
  }, [projects]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <DataGridComponent
      rows={userProjects}
      columns={columns}
      pageSize={20}
      paginationMode="server"
      onPageChange={handlePageChange}
      rowCount={totalPages}
      loading={loading}
    />
  );
};

export default UserProjects;
