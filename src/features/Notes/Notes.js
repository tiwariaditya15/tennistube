import { useToggle, useNotes, useAddNote } from "../../app/hooks";
import Note from "./Note";
import { MdiSend } from "../../app/molecules/icones";
import styles from "./notes.module.css";

export function Notes({ videoId }) {
  const { toggle, toggler } = useToggle();
  const { text, handleChange, handleSend } = useAddNote(videoId);
  const { notes } = useNotes(videoId);
  return (
    <section className={styles.notes}>
      <section className={styles.notesBox}>
        {notes.some(({ video }) => video === videoId) ? (
          notes
            .reduce((acc, curNote) => {
              return curNote["video"] === videoId ? curNote["note"] : [...acc];
            }, [])
            .map((text, idx) => <Note text={text} key={idx} />)
        ) : (
          <Note text={"You didn't add notes yet."} />
        )}
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
