import axiosBase from "@/config/AxiosBase";
import { questTypes } from "@/types/apiTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTeamQuestsAction = createAsyncThunk(
  "getTeamQuestsAction/quest",
  async (_, { rejectWithValue }) => {
    const res = await axiosBase.get(`${questTypes.GET_TEAM_QUESTS}`);
    return res.data;
  }
);

export const createQuestAction = createAsyncThunk(
  "createQuestAction/quest",
  async (quest, { rejectWithValue }) => {
    const res = await axiosBase.post(`${questTypes.CREATE_QUEST}`, quest);
    return res.data;
  }
);

export const getQuestByIdAction = createAsyncThunk(
  "getQuestByIdAction/quest",
  async (id, { rejectWithValue }) => {
    const res = await axiosBase.get(`${questTypes.GET_QUEST_BY_ID}/${id}`);
    return res.data;
  }
);

export const removeQuestAction = createAsyncThunk(
  "removeQuestAction/quest",
  async (id, { rejectWithValue }) => {
    const res = await axiosBase.delete(`${questTypes.REMOVE_QUEST}/${id}`);
    return res.data;
  }
);

export const updateQuestAction = createAsyncThunk(
  "updateQuestAction/quest",
  async ({ quest, id }, { rejectWithValue }) => {
    console.log(quest, id);
    const res = await axiosBase.put(`${questTypes.UPDATE_QUEST}/${id}`, quest);
    return res.data;
  }
);
