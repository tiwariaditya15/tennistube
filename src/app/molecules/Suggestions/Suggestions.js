import { VideoTile } from "../../../features/Videos";
import styles from "./suggestions.module.css";

export function Suggestions({ videos }) {
  return (
    <section className={styles.root}>
      {videos.map((video, idx) => (
        <VideoTile video={video} key={idx} />
      ))}
    </section>
  );
}
