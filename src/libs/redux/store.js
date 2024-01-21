import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/Auth/authSlice";
import teamSlice from "./features/Team/teamSlice";
import projectSlice from "./features/Project/projectSlice";
import questSlice from "./features/Quest/questSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    team: teamSlice,
    project: projectSlice,
    quest: questSlice,
  },
});
