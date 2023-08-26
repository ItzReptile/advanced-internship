import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './LoginSlice.js'
import authReducer from "./authSlice.js"
import isFreeReducer from './freeSlice.js'
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth:authReducer,
    free:isFreeReducer
  },
});
export default store;