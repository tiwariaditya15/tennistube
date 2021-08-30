import Video from "./Video";
import { useSelector } from "react-redux";
import { selectAllVideos } from "./videoSlice";
import styles from "./Video.module.css";

export function Videos() {
  const videos = useSelector(selectAllVideos);
  const error = useSelector((state) => state.videos.error);
  return (
    <>
      {videos.map((video) => (
        <Video video={video} key={video._id} />
      ))}
      {error && (
        <p className={styles.network__error}>
          <span>Couldn't connect to Server!</span>
        </p>
      )}
    </>
  );
}
