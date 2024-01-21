import { createSlice } from "@reduxjs/toolkit";
import {
  createQuestAction,
  getQuestByIdAction,
  getTeamQuestsAction,
  removeQuestAction,
  updateQuestAction,
} from "./asyncActions";

export const questState = {
  quests: [],
  quest: {},
  questDetail: {},
};

const questSlice = createSlice({
  name: "quest",
  initialState: questState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeamQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
      })
      .addCase(getTeamQuestsAction.rejected, (state, action) => {
        state.quests = [];
      })
      .addCase(getTeamQuestsAction.pending, (state, action) => {
        state.quests = [];
      });

    builder
      .addCase(createQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
      })
      .addCase(createQuestAction.rejected, (state, action) => {
        state.quest = {};
      })
      .addCase(createQuestAction.pending, (state, action) => {
        state.quest = {};
      });

    builder
      .addCase(getQuestByIdAction.fulfilled, (state, action) => {
        state.questDetail = action.payload;
      })
      .addCase(getQuestByIdAction.rejected, (state, action) => {
        state.questDetail = {};
      })
      .addCase(getQuestByIdAction.pending, (state, action) => {
        state.questDetail = {};
      });

    builder
      .addCase(removeQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
      })
      .addCase(removeQuestAction.rejected, (state, action) => {
        state.quest = {};
      })
      .addCase(removeQuestAction.pending, (state, action) => {
        state.quest = {};
      });

    builder
      .addCase(updateQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
      })
      .addCase(updateQuestAction.rejected, (state, action) => {
        state.quest = {};
      })
      .addCase(updateQuestAction.pending, (state, action) => {
        state.quest = {};
      });
  },
});

export const {} = questSlice.actions;

export default questSlice.reducer;
