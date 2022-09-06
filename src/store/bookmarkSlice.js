// stores which question we have bookmarked

import { createSlice } from "@reduxjs/toolkit";
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: [],
  reducers: {
    setInitialBookmark(state, action) {
      return (state = action.payload);
    },
    addBookmark(state, action) {
      return [...state, action.payload];
    },
    deleteBookmark(state, action) {
      return (state = state.filter((item) => item.Q_id !== action.payload));
    },
  },
});
export const { setInitialBookmark, addBookmark, deleteBookmark } =
  bookmarkSlice.actions;
export default bookmarkSlice.reducer;
