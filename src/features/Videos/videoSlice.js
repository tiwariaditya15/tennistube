import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import * as api from "../../api/videos";

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  try {
    const response = await api.fetchVideos();
    return response.data.videos;
  } catch (error) {
    console.log({ error });
    if (!error.status) {
      console.log("Netwrok Error");
    }
  }
});

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
      console.log(action.payload);
    });
  },
});

export default videoSlice.reducer;

export const { selectAll: selectAllVideos, selectById: selectVideoById } =
  videosAdapter.getSelectors((state) => state.videos);
