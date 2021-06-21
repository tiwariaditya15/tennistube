import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../features/Videos/videoSlice";

export default configureStore({
  reducer: {
    videos: videoSlice,
  },
});
