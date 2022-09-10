// Helps in toggle theme

import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: localStorage.getItem("getTheme")
    ? localStorage.getItem("getTheme")
    : "dark",
  reducers: {
    updateTheme(state, action) {
      localStorage.setItem("getTheme", action.payload);
      return (state = action.payload);
    },
  },
});
export const { updateTheme, updateLocalStorageTheme } = themeSlice.actions;
export default themeSlice.reducer;
