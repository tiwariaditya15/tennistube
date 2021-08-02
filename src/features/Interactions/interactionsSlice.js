import { createSlice } from "@reduxjs/toolkit";

const interactionsSlice = createSlice({
  name: "interactions",
  initialState: {
    modal: false,
    videoId: null,
  },
  reducers: {
    setModal(state) {
      state.modal = !state.modal;
    },
    setVideoId(state, action) {
      state.videoId = action.payload;
    },
    clearVideoId(state) {
      state.videoId = null;
    },
  },
});

export const { setModal, setVideoId, clearVideoId } = interactionsSlice.actions;
export const selectModalInteraction = (state) => state.interactions.modal;
export const selectVideoId = (state) => state.interactions.videoId;
export default interactionsSlice.reducer;
