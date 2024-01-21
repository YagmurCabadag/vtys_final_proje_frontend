import { createSlice } from "@reduxjs/toolkit";
import {
  createTeamProject,
  deleteTeamProject,
  getProjectById,
  getTeamProjects,
} from "./asyncActions";

export const projectState = {
  projects: [],
  project: {},
  isLoading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState: projectState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeamProjects.fulfilled, (state, action) => {
        state.projects = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getTeamProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeamProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(deleteTeamProject.fulfilled, (state, action) => {
        state.projects = state.projects.filter(
          (project) => project._id !== action.payload.data._id
        );
        state.isLoading = false;
      })
      .addCase(deleteTeamProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTeamProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(createTeamProject.fulfilled, (state, action) => {
        state.projects.push(action.payload.data);
        state.isLoading = false;
      })
      .addCase(createTeamProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTeamProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.project = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getProjectById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {} = projectSlice.actions;

export default projectSlice.reducer;
