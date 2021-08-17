import { Videos } from "../../../features/Videos";
import styles from "./Home.module.css";
export function Home() {
  return (
    <>
      <section className={styles.flex}>
        <Videos />
      </section>
    </>
  );
}
