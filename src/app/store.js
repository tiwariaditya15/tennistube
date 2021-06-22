import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../features/Videos/videoSlice";
import playlistsSlice from "../features/Playlists/playlistsSlice";
export default configureStore({
  reducer: {
    videos: videoSlice,
    playlists: playlistsSlice,
  },
});
