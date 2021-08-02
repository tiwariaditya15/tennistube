import { Appbar } from "../../../features/Appbar";
import { Videos } from "../../../features/Videos";
import styles from "./Home.module.css";
export function Home() {
  return (
    <>
      <Appbar />
      <section className={styles.flex}>
        <Videos />
      </section>
    </>
  );
}
