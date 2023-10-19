import { createSlice } from "@reduxjs/toolkit";

const resourceSlice = createSlice({
  name: "resource",
  initialState: {
    list: [],
  },
  reducers: {
    setResource: (state, action) => {
      state.list = action.payload;
    },
  },
});

export default resourceSlice;
