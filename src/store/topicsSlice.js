// It helps in maintaining which topics we have started solving.

import { createSlice } from "@reduxjs/toolkit";
const topicsSlice = createSlice({
  name: "note",
  initialState: localStorage.getItem("getTopics")
    ? JSON.parse(localStorage.getItem("getTopics"))
    : [],
  reducers: {
    addTopic(state, action) {
      localStorage.setItem(
        "getTopics",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    },
    deleteTopic(state, action) {
      localStorage.setItem(
        "getTopics",
        JSON.stringify(
          (state = state.filter((item) => item.topicId !== action.payload))
        )
      );
      return (state = state.filter((item) => item.topicId !== action.payload));
    },
    emptyTopicList(state, action) {
      localStorage.removeItem("getTopics");
      return (state = action.payload);
    },
  },
});
export const { addTopic, deleteTopic, emptyTopicList } = topicsSlice.actions;
export default topicsSlice.reducer;
