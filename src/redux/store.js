import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './LoginSlice.js'
export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
export default store;