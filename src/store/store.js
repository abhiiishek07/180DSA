import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import themeReducer from "./themeSlice";
import noteReducer from "./noteSlice";
import topicReducer from "./topicsSlice";
import bookmarkReducer from "./bookmarkSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    note: noteReducer,
    topics: topicReducer,
    bookmark: bookmarkReducer,
  },
});
export default store;
