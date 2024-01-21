import { createSlice } from "@reduxjs/toolkit";
import {
  loginAction,
  getProfileAction,
  logoutAction,
  registerAction,
  getAllUsersAction,
} from "./asyncActions";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "@/libs/helper/toastHelper";

export const authState = {
  token: "",
  user: {
    _id: "",
    role: "",
    email: "",
    password: "",
    name: "",
    username: "",
    phone: "",
    status: "",
    team: "",
  },
  isLogined: false,
  users: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLogined = true;
        console.log(action.payload.message, "message");
        toastSuccessNotify(action.payload.message);
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.token = "";
        state.user = {
          id: "",
          role: "",
          email: "",
          password: "",
        };
        state.isLogined = false;
        toastErrorNotify("Giriş Başarısız");
      })
      .addCase(loginAction.pending, (state, action) => {
        state.token = "";
        state.user = {
          id: "",
          role: "",
          email: "",
          password: "",
        };
        state.isLogined = false;
      });

    builder
      .addCase(getProfileAction.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isLogined = true;
      })
      .addCase(getProfileAction.rejected, (state, action) => {
        state.token = "";
        state.user = {
          id: "",
          role: "",
          email: "",
          password: "",
        };
        state.isLogined = false;
      })
      .addCase(getProfileAction.pending, (state, action) => {
        state.token = "";
        state.user = {
          id: "",
          role: "",
          email: "",
          password: "",
        };
        state.isLogined = false;
      });

    builder
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.token = "";
        state.user = {
          id: "",
          role: "",
          email: "",
          password: "",
        };
        state.isLogined = false;
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.token = "";
        state.user = {
          id: "",
          role: "",
          email: "",
          password: "",
        };
        state.isLogined = false;
      })
      .addCase(logoutAction.pending, (state, action) => {
        state.token = "";
        state.user = {
          id: "",
          role: "",
          email: "",
          password: "",
        };
        state.isLogined = false;
      });

    builder
      .addCase(registerAction.fulfilled, (state, action) => {})
      .addCase(registerAction.rejected, (state, action) => {})
      .addCase(registerAction.pending, (state, action) => {});

    builder
      .addCase(getAllUsersAction.fulfilled, (state, action) => {
        state.users = action.payload.data;
      })
      .addCase(getAllUsersAction.rejected, (state, action) => {
        state.users = [];
      })
      .addCase(getAllUsersAction.pending, (state, action) => {
        state.users = [];
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
