import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  setIsFree: false,
};

const isFree = createSlice({
  name: "free",
  initialState, 
  reducers: {
    FreeSub: (state) => {
      state.Free = true;
    },
    notFreeSub: (state) => {
      state.Free = false;
    },
  },
});

export const { FreeSub, notFreeSub } = isFree.actions;
export default isFree.reducer;
