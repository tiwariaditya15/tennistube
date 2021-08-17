import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../../features/Notes/notesSlice";

export function useNotes(videoId) {
  const [notes] = useSelector((state, videoId) =>
    state.notes.notes.filter((note) => note.videoId === videoId)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotes(videoId));
  }, []);
  return {
    notes,
  };
}
