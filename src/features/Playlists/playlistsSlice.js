import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api/playlists";

export const fetchPlaylists = createAsyncThunk(
  "playlists/fetchPlaylists",
  async () => {
    try {
      const response = await api.fetchPlaylists();
      return response.data;
    } catch (error) {
      console.log({ error });
      let err = error;
      if (!error.status) {
        throw err;
      }
    }
  }
);

const playlistsSlice = createSlice({
  name: "playlists",
  initialState: {
    playlists: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlaylists.fulfilled, (state, action) => {
      state.playlists = action.payload;
    });
    builder.addCase(fetchPlaylists.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default playlistsSlice.reducer;
