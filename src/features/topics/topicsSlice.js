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
    },
    addQuizIdForTopic: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId); //Uncaught TypeError: Cannot read properties of undefined (reading 'quizIds')
    }
  }
});

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export const topicsSelector = (state) => state.topics.topics;
export default topicsSlice.reducer;
