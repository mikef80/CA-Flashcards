import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id,
        name,
        topicId,
        cardIds
      };
    }
  }
});

export const addQuizForTopicId = (quiz) => {
  const { id, topicId } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizIdForTopic({ quizId: id, topicId }));
  };
};

export const { addQuiz } = quizzesSlice.actions;
export const quizzesSelector = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
