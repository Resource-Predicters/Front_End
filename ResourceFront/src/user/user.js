import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    is_login: false,
  },
  reducers: {
    LOG_IN: (state, action) => {
      state.user = action.payload;
      state.is_login = true;
    },
    LOG_OUT: (state, action) => {
      state.user = null;
      state.is_login = false;
    },
  },
});

export const loginDB = (id, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/user/login`,
      {
        name: id,
        password: password,
      }
    );
    sessionStorage.setItem("accessToken", response.data.token);
  } catch (err) {
    throw new Error(err);
  }
};

export const profile = () => async (dispatch) => {
  try {
    const token = sessionStorage.getItem("accessToken");
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
  } catch (err) {
    throw new Error(err);
  }
};

export const signupDB = (id, nickname, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/user/join`,
      {
        //   email: id,
        password: password,
        name: nickname,
      }
    );
    console.log(response);
  } catch (err) {
    throw new Error(err);
  }
};

export const { LOG_IN, LOG_OUT } = userSlice.actions;
export default userSlice;
