import { createSlice } from "@reduxjs/toolkit";

const exchageSlice = createSlice({
  name: "exchage",
  initialState: {
    list: [],
  },
  reducers: {
    setExchange: (state, action) => {
      state.list = action.payload;
    },
  },
});

export default exchageSlice;
