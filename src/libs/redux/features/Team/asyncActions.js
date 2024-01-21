import axiosBase from "@/config/AxiosBase";
import { teamTypes } from "@/types/apiTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createTeamAction = createAsyncThunk(
  "createTeamAction/team",
  async ({ name, description }) => {
    const res = await axiosBase.post(`${teamTypes.CREATE_TEAM}`, {
      name,
      description,
    });

    return res.data;
  }
);

export const getUserTeamAction = createAsyncThunk(
  "getUserTeamAction/team",
  async () => {
    const res = await axiosBase.get(`${teamTypes.GET_TEAM}`);

    return res.data;
  }
);

export const getTeamLeaderAction = createAsyncThunk(
  "getTeamLeaderAction/team",
  async ({ teamLeader }) => {
    const res = await axiosBase.get(
      `${teamTypes.GET_TEAM_LEADER}/${teamLeader}`
    );
    return res.data;
  }
);

export const getTeamMembersAction = createAsyncThunk(
  "getTeamMembersAction/team",
  async () => {
    const res = await axiosBase.get(`${teamTypes.GET_TEAM_MEMBERS}`);
    return res.data;
  }
);

export const removeTeamMemberAction = createAsyncThunk(
  "removeTeamMemberAction/team",
  async ({ id }) => {
    const res = await axiosBase.put(`${teamTypes.REMOVE_TEAM_MEMBER}/${id}`);
    return res.data;
  }
);

export const addMemberTeamAction = createAsyncThunk(
  "addMemberTeamAction/team",
  async ({ id }) => {
    const res = await axiosBase.put(`${teamTypes.ADD_MEMBER}/${id}`);
    return res.data;
  }
);

export const getTeamMemberAction = createAsyncThunk(
  "getTeamMemberAction/team",
  async ({ id }) => {
    const res = await axiosBase.get(`${teamTypes.GET_TEAM_MEMBER}/${id}`);
    return res.data;
  }
);
