import { createSlice } from "@reduxjs/toolkit";

const interactionsSlice = createSlice({
  name: "interactions",
  initialState: {
    modal: false,
    sideNavigation: true,
    videoId: null,
  },
  reducers: {
    setModal(state) {
      state.modal = !state.modal;
    },
    setVideoId(state, action) {
      state.videoId = action.payload;
    },
    setSideNavigation(state) {
      state.sideNavigation = !state.sideNavigation;
    },
    clearVideoId(state) {
      state.videoId = null;
    },
  },
});

export const { setSideNavigation, setModal, setVideoId, clearVideoId } =
  interactionsSlice.actions;
export const selectModalInteraction = (state) => state.interactions.modal;
export const selectVideoId = (state) => state.interactions.videoId;
export const selectSideNavigation = (state) =>
  state.interactions.sideNavigation;
export default interactionsSlice.reducer;
