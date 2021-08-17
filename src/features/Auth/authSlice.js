import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../app/api/auth";

export const login = createAsyncThunk("accounts/login", async (credentials) => {
  try {
    const response = await api.login(credentials);
    localStorage.setItem("AUTH_TOKEN", response.data.token);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
});

const initialState = {
  fullname: null,
  logged_in: localStorage.getItem("AUTH_TOKEN") ? true : false,
  AUTH_TOKEN: localStorage.getItem("AUTH_TOKEN"),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.logged_in = true;
      state.AUTH_TOKEN = action.payload.token;
      state.error = null;
    },
    logout(state, action) {
      state.fullname = null;
      state.logged_in = false;
      state.AUTH_TOKEN = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.fullname = action.payload.fullname;
      state.logged_in = true;
      state.AUTH_TOKEN = action.payload.token;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { setToken, logout } = authSlice.actions;
export const selectLoggedIn = (state) => state.auth.logged_in;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthToken = (state) => state.auth.AUTH_TOKEN;
export default authSlice.reducer;