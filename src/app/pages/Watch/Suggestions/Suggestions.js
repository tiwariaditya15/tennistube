import { useSelector } from "react-redux";
import { selectAllVideos } from "../../../../features/Videos/videoSlice";
import { VideoTile } from "../../../../features/Videos";
import styles from "./suggestions.module.css";

export function Suggestions() {
  const videos = useSelector(selectAllVideos);
  return (
    <section className={styles.root}>
      {videos.map((video) => (
        <VideoTile video={video} />
      ))}
    </section>
  );
}
