import { useSelector } from "react-redux";
import { Videos } from "../../../features/Videos";
import { selectAllVideos } from "../../../features/Videos/videoSlice";
import { EosIconsLoading } from "../../molecules/icones";
import styles from "./Home.module.css";

export function Home() {
  const videos = useSelector(selectAllVideos);
  return (
    <>
      <section className={styles.videos}>
        {videos.length ? (
          <Videos />
        ) : (
          <section className={styles.loader}>
            <EosIconsLoading width="4rem" height="4rem" />
          </section>
        )}
      </section>
    </>
  );
}
