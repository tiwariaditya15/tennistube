import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api/playlists";

export const fetchPlaylists = createAsyncThunk('playlists/fetchPlaylists', async () => {
    try {
        
    } catch (error) {
        
    }
})

const playlistsSlice = createSlice({
  name: "playlists",
  initialState: {
    playlists: {},
  },
  reducers: {},
  extraReducers: {}
});

export default playlistsSlice.reducer;
