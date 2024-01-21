import axiosBase from "@/config/AxiosBase";
import { projectTypes, teamTypes } from "@/types/apiTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTeamProjects = createAsyncThunk(
  "getTeamProjects/project",
  async () => {
    const res = await axiosBase.get(`${teamTypes.GET_TEAM_PROJECTS}`);
    return res.data;
  }
);

export const deleteTeamProject = createAsyncThunk(
  "deleteTeamProject/project",
  async ({ id }) => {
    const res = await axiosBase.delete(
      `${projectTypes.DELETE_TEAM_PROJECT}/${id}`
    );
    return res.data;
  }
);

export const createTeamProject = createAsyncThunk(
  "createTeamProject/project",
  async ({ data }) => {
    const res = await axiosBase.post(
      `${projectTypes.CREATE_TEAM_PROJECT}`,
      data
    );
    return res.data;
  }
);

export const getProjectById = createAsyncThunk(
  "getProjectById/project",
  async ({ id }) => {
    const res = await axiosBase.get(`${projectTypes.GET_PROJECT_BY_ID}/${id}`);
    return res.data;
  }
);
