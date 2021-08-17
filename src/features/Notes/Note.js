import styles from "./notes.module.css";

export default function Note({ text }) {
  return <section className={styles.noteRow}>{text}</section>;
}
