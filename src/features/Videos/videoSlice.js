import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import * as api from "../../app/api/videos";

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  try {
    const response = await api.fetchVideos();
    return response.data.videos;
  } catch (error) {
    let err = error;
    if (!error.status) {
      throw err;
    }
  }
});

export const addLike = createAsyncThunk(
  "playlists/addLike",
  async (videoId) => {
    try {
      const { data } = await api.addLike(videoId);
      return data.videoId;
    } catch (error) {
      throw error;
    }
  }
);

export const removeLike = createAsyncThunk(
  "playlists/removeLike",
  async (videoId) => {
    try {
      const { data } = await api.removeLike(videoId);
      return data.videoId;
    } catch (error) {
      throw error;
    }
  }
);

export const addDislike = createAsyncThunk(
  "playlists/addDislike",
  async (videoId) => {
    try {
      const { data } = await api.addDislike(videoId);
      return data.videoId;
    } catch (error) {
      throw error;
    }
  }
);

export const removeDislike = createAsyncThunk(
  "playlists/removeDislike",
  async (videoId) => {
    try {
      const { data } = await api.removeDislike(videoId);
      return data.videoId;
    } catch (error) {
      throw error;
    }
  }
);

const videosAdapter = createEntityAdapter({
  selectId: (video) => video._id,
});

const initialState = videosAdapter.getInitialState({ error: null });

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.fulfilled, videosAdapter.upsertMany);
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(addLike.fulfilled, (state, action) => {});
    builder.addCase(addLike.rejected, (state, action) => {});

    builder.addCase(removeLike.fulfilled, (state, action) => {});
    builder.addCase(removeLike.rejected, (state, action) => {});
  },
});

export default videoSlice.reducer;

export const { selectAll: selectAllVideos, selectById: selectVideoById } =
  videosAdapter.getSelectors((state) => state.videos);
