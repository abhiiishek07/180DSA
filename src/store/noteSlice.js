//stores notes for each question

import { createSlice } from "@reduxjs/toolkit";
const noteSlice = createSlice({
  name: "note",
  initialState: localStorage.getItem("getNotes")
    ? JSON.parse(localStorage.getItem("getNotes"))
    : [],
  reducers: {
    addNote(state, action) {
      localStorage.setItem(
        "getNotes",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    },
    deleteNote(state, action) {
      localStorage.setItem(
        "getNotes",
        JSON.stringify(
          (state = state.filter((item) => item.id !== action.payload))
        )
      );
      return (state = state.filter((item) => item.id !== action.payload));
    },
    emptyNote(state, action) {
      localStorage.removeItem("getNotes");
      return (state = action.payload);
    },
  },
});
export const { addNote, deleteNote, emptyNote } = noteSlice.actions;
export default noteSlice.reducer;
