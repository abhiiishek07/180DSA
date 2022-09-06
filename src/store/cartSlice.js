// stores which question we have solved

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setInitialCart(state, action) {
      return (state = action.payload);
    },
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return (state = state.filter((item) => item !== action.payload));
    },
  },
});
export const { setInitialCart, add, remove } = cartSlice.actions;
export default cartSlice.reducer;
