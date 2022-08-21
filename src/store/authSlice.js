import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: localStorage.getItem("getAuth")
    ? JSON.parse(localStorage.getItem("getAuth"))
    : [],
  reducers: {
    addUser(state, action) {
      localStorage.setItem("getAuth", JSON.stringify([action.payload]));
      state.push(action.payload);
    },
    removeUser(state, action) {
      localStorage.removeItem("getAuth");
      return (state = action.payload);
    },
  },
});
export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
