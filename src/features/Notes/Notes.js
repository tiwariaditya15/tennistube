import { useToggle, useNotes } from "../../app/hooks";
import Note from "./Note";
import { MdiSend } from "../../app/molecules/icones";
import styles from "./notes.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../Notes/notesSlice";

export function Notes({ videoId }) {
  const { toggle, toggler } = useToggle();
  const [text, setText] = useState("");
  const { notes } = useNotes(videoId);
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);
  const handleSend = (e) => {
    if (text.length) {
      dispatch(addNote({ videoId, note: text }));
      setText("");
    }
  };
  return (
    <section className={styles.notes}>
      <section className={styles.notesBox}>
        {notes &&
          notes["note"].map((text, idx) => <Note text={text} key={idx} />)}
      </section>
      <section className={styles.flex}>
        <input
          className={styles.inputBox}
          type="text"
          placeholder="Add note here..."
          value={text}
          onChange={handleChange}
        />
        <button className={styles.send} onClick={handleSend}>
          <MdiSend />
        </button>
      </section>
    </section>
  );
}
