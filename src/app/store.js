import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/Videos/videoSlice";
import playlistsReducer from "../features/Playlists/playlistsSlice";
import authReducer from "../features/Auth/authSlice";
import interactionsReducer from "../features/Interactions/interactionsSlice";
import notesReducer from "../features/Notes/notesSlice";

export default configureStore({
  reducer: {
    videos: videoReducer,
    playlists: playlistsReducer,
    notes: notesReducer,
    auth: authReducer,
    interactions: interactionsReducer,
  },
});
