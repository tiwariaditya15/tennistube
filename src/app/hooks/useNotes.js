import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../../features/Notes/notesSlice";

export function useNotes(videoId) {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotes(videoId));
  }, [videoId]);
  return {
    notes,
  };
}
