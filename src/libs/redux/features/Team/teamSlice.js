import { createSlice } from "@reduxjs/toolkit";
import {
  addMemberTeamAction,
  createTeamAction,
  getTeamLeaderAction,
  getTeamMemberAction,
  getTeamMembersAction,
  getUserTeamAction,
  removeTeamMemberAction,
} from "./asyncActions";
import { authState } from "../Auth/authSlice";
import { toastSuccessNotify } from "@/libs/helper/toastHelper";

export const teamState = {
  team: {
    _id: "",
    name: "",
    description: "",
    teamLeader: "",
    members: [],
    projects: [],
    quests: [],
    createdAt: "",
    updatedAt: "",
  },
  teams: [],
  teamLeader: authState.user,
  teamMembers: [],
  teamMember: authState.user,
};

const teamSlice = createSlice({
  name: "team",
  initialState: teamState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTeamAction.fulfilled, (state, action) => {
        state.teams = [...state.teams, action.payload.data];
      })
      .addCase(createTeamAction.rejected, (state, action) => {
        state.teams = [];
      })
      .addCase(createTeamAction.pending, (state, action) => {
        state.teams = [];
      });

    builder
      .addCase(getUserTeamAction.fulfilled, (state, action) => {
        state.team = action.payload.data;
      })
      .addCase(getUserTeamAction.rejected, (state, action) => {
        state.team = {
          _id: "",
          name: "",
          description: "",
          teamLeader: "",
          members: [],
          projects: [],
          quests: [],
          createdAt: "",
          updatedAt: "",
        };
      })
      .addCase(getUserTeamAction.pending, (state, action) => {
        state.team = {
          _id: "",
          name: "",
          description: "",
          teamLeader: "",
          members: [],
          projects: [],
          quests: [],
          createdAt: "",
          updatedAt: "",
        };
      });

    builder
      .addCase(getTeamLeaderAction.fulfilled, (state, action) => {
        state.teamLeader = action.payload.data;
      })
      .addCase(getTeamLeaderAction.rejected, (state, action) => {
        state.teamLeader = {
          id: "",
          role: "",
          email: "",
          password: "",
        };
      })
      .addCase(getTeamLeaderAction.pending, (state, action) => {
        state.teamLeader = {
          id: "",
          role: "",
          email: "",
          password: "",
        };
      });

    builder
      .addCase(getTeamMembersAction.fulfilled, (state, action) => {
        state.teamMembers = action.payload.data;
      })
      .addCase(getTeamMembersAction.rejected, (state, action) => {
        state.teamMembers = [];
      })
      .addCase(getTeamMembersAction.pending, (state, action) => {
        state.teamMembers = [];
      });

    builder
      .addCase(removeTeamMemberAction.fulfilled, (state, action) => {
        state.teamMembers = state.teamMembers.filter(
          (member) => member._id !== action.payload.data._id
        );
        toastSuccessNotify(action.payload.message);
      })
      .addCase(removeTeamMemberAction.rejected, (state, action) => {
        state.teamMembers = [];
      })
      .addCase(removeTeamMemberAction.pending, (state, action) => {
        state.teamMembers = [];
      });

    builder
      .addCase(addMemberTeamAction.fulfilled, (state, action) => {
        state.teamMembers = [...state.teamMembers, action.payload.data];
        toastSuccessNotify(action.payload.message);
      })
      .addCase(addMemberTeamAction.rejected, (state, action) => {
        state.teamMembers = [];
      })
      .addCase(addMemberTeamAction.pending, (state, action) => {
        state.teamMembers = [];
      });

    builder
      .addCase(getTeamMemberAction.fulfilled, (state, action) => {
        state.teamMember = action.payload.data;
      })
      .addCase(getTeamMemberAction.rejected, (state, action) => {
        state.teamMember = authState.user;
      })
      .addCase(getTeamMemberAction.pending, (state, action) => {
        state.teamMember = authState.user;
      });
  },
});

export const {} = teamSlice.actions;

export default teamSlice.reducer;
