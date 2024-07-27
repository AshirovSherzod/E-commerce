import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("x-auth-token") || null,
  login: {
    username: "john32",
    password: "87654321"
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload.username === state.login.username && action.payload.password === state.login.password) {
        state.token = "qwertyASDsdfQSXbhjiWDCFghjk1223qwsdc2";
        localStorage.setItem("x-auth-token", state.token);
      }
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("x-auth-token");
    },
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
