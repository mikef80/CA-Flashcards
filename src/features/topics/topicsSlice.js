import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []
      };
    }
  }
});

export const { addTopic } = topicsSlice.actions;
export const topicsSelector = (state) => state.topics.topics;
export default topicsSlice.reducer;
