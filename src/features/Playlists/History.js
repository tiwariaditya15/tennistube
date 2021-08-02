import { useSelector } from "react-redux";
import { selectAllVideos } from "../Videos/videoSlice";
import { VideoTile } from "../Videos/VideoTile";
import { selectHistory } from "./playlistsSlice";
import styles from "./playlists.module.css";

export function History() {
  const history = useSelector(selectHistory);
  const videos = useSelector(selectAllVideos);
  return (
    <>
      <section className={styles.history__root}>
        {history &&
          history
            .map((vid) => {
              const historyVideo = videos.find((video) => video._id === vid);
              return <VideoTile video={historyVideo} key={historyVideo._id} />;
            })
            .reverse()}
      </section>
    </>
  );
}
