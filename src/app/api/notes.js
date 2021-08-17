import axios from "axios";
import { baseURL } from "./baseURL";

const addNoteURL = `${baseURL}/notes`;
const fetchNotesURL = `${baseURL}/notes`;

export const fetchNotes = (videoId) => axios.get(`${fetchNotesURL}/${videoId}`);
export const addNote = ({ videoId, note }) =>
  axios.post(addNoteURL, {
    videoId,
    note,
  });
