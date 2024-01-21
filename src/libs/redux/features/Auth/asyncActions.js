import axiosBase from "@/config/AxiosBase";
import { authTypes } from "@/types/apiTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginAction = createAsyncThunk(
  "loginAction/auth",
  async (data, { rejectWithValue }) => {
    const res = await axiosBase.post(`${authTypes.LOGIN}`, {
      ...data,
    });

    return res.data;
  }
);

export const registerAction = createAsyncThunk(
  "registerAction/auth",
  async (data, { rejectWithValue }) => {
    const res = await axiosBase.post(`${authTypes.REGISTER}`, {
      ...data,
    });

    return res.data;
  }
);

export const getProfileAction = createAsyncThunk(
  "profileAction/auth",
  async (data, { rejectWithValue }) => {
    const res = await axiosBase.get(`${authTypes.GET_PROFILE}`);

    return res.data;
  }
);

export const logoutAction = createAsyncThunk("logoutAction/auth", async () => {
  const res = await axiosBase.post(`${authTypes.LOGOUT}`);

  return res.data;
});

export const getAllUsersAction = createAsyncThunk(
  "getAllUsersAction/auth",
  async () => {
    const res = await axiosBase.get(`${authTypes.GET_ALL_USERS}`);

    return res.data;
  }
);
