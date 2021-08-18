import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../features/Notes/notesSlice";

export function useAddNote(videoId) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleSend = (e) => {
    if (text.length) {
      dispatch(addNote({ videoId, note: text }));
      setText("");
    }
  };

  return {
    text,
    handleChange,
    handleSend,
  };
}
