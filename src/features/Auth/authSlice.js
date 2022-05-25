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

export const signup = createAsyncThunk(
  "accounts/signup",
  async (userDetails) => {
    try {
      const response = await api.signUp(userDetails);
      localStorage.setItem("AUTH_TOKEN", response.data.token);
      return response.data;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);

const initialState = {
  fullname: null,
  logged_in: localStorage.getItem("AUTH_TOKEN") ? true : false,
  AUTH_TOKEN: localStorage.getItem("AUTH_TOKEN"),
  error: null,
  loading: false,
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
      localStorage.removeItem("AUTH_TOKEN");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.fullname = action.payload.fullname;
        state.logged_in = true;
        state.AUTH_TOKEN = action.payload.token;
        state.error = null;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });

    builder
      .addCase(signup.fulfilled, (state, action) => {
        console.log("signup.fullfilled", { action });
        state.logged_in = true;
        state.AUTH_TOKEN = action.payload.token;
        state.fullname = action.payload.fullname;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.error.message;
        state.AUTH_TOKEN = null;
        state.fullname = null;
        state.logged_in = false;
      });
  },
});

export const { setToken, logout } = authSlice.actions;
export const selectLoggedIn = (state) => state.auth.logged_in;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthToken = (state) => state.auth.AUTH_TOKEN;
export const selectLoadingState = (state) => state.auth.loading;
export default authSlice.reducer;
