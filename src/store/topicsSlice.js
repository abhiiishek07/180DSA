// It helps in maintaining which topics we have started solving.

import { createSlice } from "@reduxjs/toolkit";
const topicsSlice = createSlice({
  name: "topics",
  initialState: [],
  reducers: {
    setInitialTopic(state, action) {
      return (state = action.payload);
    },
    addTopic(state, action) {
      return [...state, action.payload];
    },
    deleteTopic(state, action) {
      return (state = state.filter((item) => item.topicId !== action.payload));
    },
  },
});
export const { setInitialTopic, addTopic, deleteTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
