import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../app/api/playlists";

export const fetchPlaylists = createAsyncThunk(
  "playlists/fetchPlaylists",
  async () => {
    try {
      const response = await api.fetchPlaylists();
      return response.data.playlists;
    } catch (error) {
      let err = error;
      if (!error.status) {
        throw err;
      }
    }
  }
);

export const addToHistory = createAsyncThunk(
  "playlists/addToHistory",
  async (videoId) => {
    try {
      await api.addToHistory(videoId);
      return videoId;
    } catch (error) {
      throw error;
    }
  }
);

export const togglePlaylists = createAsyncThunk(
  "playlists/togglePlaylists",
  async (reqBody) => {
    try {
      await api.togglePlaylists(reqBody.videoId, reqBody.playlist);
      return reqBody;
    } catch (error) {
      throw error;
    }
  }
);

export const createPlaylist = createAsyncThunk(
  "playlists/createPlaylists",
  async ({ playlist, videoId }) => {
    try {
      const response = await api.createPlaylist(playlist);
      await api.togglePlaylists(videoId, playlist);
      return { playlist: response.data.playlist, videoId };
    } catch (error) {
      throw error;
    }
  }
);

export const removePlaylist = createAsyncThunk(
  "playlists/removePlaylists",
  async (playlist) => {
    try {
      const response = await api.removePlaylist(playlist);
      return response.data.playlist;
    } catch (error) {
      throw error;
    }
  }
);

const playlistsSlice = createSlice({
  name: "playlists",
  initialState: {
    library: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylists.fulfilled, (state, action) => {
        state.library = action.payload;
        state.error = null;
      })
      .addCase(fetchPlaylists.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(addToHistory.fulfilled, (state, action) => {
        !state.library.history.some((video) => video === action.payload)
          ? state.library.history.push(action.payload)
          : (state.library.history = state.library.history
              .filter((video) => video !== action.payload)
              .concat(action.payload));
      })
      .addCase(addToHistory.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(togglePlaylists.fulfilled, (state, { payload }) => {
        state.library[payload.playlist].some(
          (video) => video === payload.videoId
        )
          ? (state.library[payload.playlist] = state.library[
              payload.playlist
            ].filter((video) => video !== payload.videoId))
          : (state.library[payload.playlist] = state.library[
              payload.playlist
            ].concat(payload.videoId));
        state.error = null;
      })
      .addCase(togglePlaylists.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(createPlaylist.fulfilled, (state, { payload }) => {
        state.library = { ...state.library, [payload.playlist]: [] };
        state.library[payload.playlist].some(
          (video) => video === payload.videoId
        )
          ? (state.library[payload.playlist] = state.library[
              payload.playlist
            ].filter((video) => video !== payload.videoId))
          : (state.library[payload.playlist] = state.library[
              payload.playlist
            ].concat(payload.videoId));
        state.error = null;
        state.error = null;
      })
      .addCase(createPlaylist.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(removePlaylist.fulfilled, (state, action) => {
        state.error = null;
        delete state.library[action.payload];
      })
      .addCase(removePlaylist.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const selectLibrary = (state) => state.playlists.library;
export const selectHistory = (state) => state.playlists.library.history;
export const selectPlaylistsFetchError = (state) => state.playlists.error;
export default playlistsSlice.reducer;
