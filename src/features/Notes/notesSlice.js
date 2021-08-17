import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../app/api/notes";

export const fetchNotes = createAsyncThunk(
  "/notes/fetchNotes",
  async (videoId) => {
    try {
      const response = await api.fetchNotes(videoId);
      return response.data.note;
    } catch (error) {
      throw error;
    }
  }
);
export const addNote = createAsyncThunk("notes/addNote", async (reqBody) => {
  try {
    const response = await api.addNote(reqBody);
    return response.data.updatedNote;
  } catch (error) {
    throw error;
  }
});

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.fulfilled, (state, { payload: { video, note } }) => {
        state.notes.some((notesItem) => notesItem.video === video)
          ? (state.notes = state.notes
              .filter((notesItem) => notesItem.video !== video)
              .concat({ video, note }))
          : state.notes.push({ video, note });
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(addNote.fulfilled, (state, { payload: { video, note } }) => {
        state.notes.some((notesItem) => notesItem.video === video)
          ? (state.notes = state.notes
              .filter((notesItem) => notesItem.video !== video)
              .concat({ video, note }))
          : state.notes.push({ video, note });
        state.error = null;
      })
      .addCase(addNote.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default notesSlice.reducer;
