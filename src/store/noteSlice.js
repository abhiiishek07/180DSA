//stores notes for each question

import { createSlice } from "@reduxjs/toolkit";
const noteSlice = createSlice({
  name: "note",
  initialState: [],
  reducers: {
    setInitialNote(state, action) {
      return (state = action.payload);
    },
    addNote(state, action) {
      return [...state, action.payload];
    },
    deleteNote(state, action) {
      return (state = state.filter((item) => item.id !== action.payload));
    },
  },
});
export const { setInitialNote, addNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
