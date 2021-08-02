import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/Videos/videoSlice";
import playlistsReducer from "../features/Playlists/playlistsSlice";
import authReducer from "../features/Auth/authSlice";
import interactionsReducer from "../features/Interactions/interactionsSlice";

export default configureStore({
  reducer: {
    videos: videoReducer,
    playlists: playlistsReducer,
    auth: authReducer,
    interactions: interactionsReducer,
  },
});
