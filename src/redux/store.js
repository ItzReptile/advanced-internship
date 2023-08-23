import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './LoginSlice.js'
import authReducer from "./authSlice.js"
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth:authReducer
  },
});
export default store;