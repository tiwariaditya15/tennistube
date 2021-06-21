import { MdiClose } from "../../molecules/icones";
import styles from "./playlists.module.css";
export function Playlists() {
  return (
    <section className={""}>
      <section
        className={styles.flex + " " + styles.spacebetween + " px-1 py-1"}
        style={{
          borderBottom: "1px solid var(--colors-secondary)",
        }}
      >
        <span>Save to</span>
        <span>
          <MdiClose />
        </span>
      </section>
      <section
        className={styles.flex + " " + styles.spacebetween + " px-1 py-1"}
      ></section>
      <section
        className={styles.flex + " " + styles.spacebetween + " px-1 py-1"}
      ></section>
    </section>
  );
}
