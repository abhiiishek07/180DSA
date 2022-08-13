// stores which question we have bookmarked

import { createSlice } from "@reduxjs/toolkit";
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: localStorage.getItem("getBookmarkedQuestions")
    ? JSON.parse(localStorage.getItem("getBookmarkedQuestions"))
    : [],
  reducers: {
    addBookmark(state, action) {
      localStorage.setItem(
        "getBookmarkedQuestions",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    },
    deleteBookmark(state, action) {
      localStorage.setItem(
        "getBookmarkedQuestions",
        JSON.stringify(
          (state = state.filter((item) => item.Q_id !== action.payload))
        )
      );
      return (state = state.filter((item) => item.Q_id !== action.payload));
    },
    emptyBookmark(state, action) {
      localStorage.removeItem("getBookmarkedQuestions");
      return (state = action.payload);
    },
  },
});
export const { addBookmark, deleteBookmark, emptyBookmark } =
  bookmarkSlice.actions;
export default bookmarkSlice.reducer;
