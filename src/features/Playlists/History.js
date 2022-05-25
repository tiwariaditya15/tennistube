import { useSelector } from "react-redux";
import { selectAllVideos } from "../Videos/videoSlice";
import { VideoTile } from "../Videos/VideoTile";
import { selectHistory } from "./playlistsSlice";
import styles from "./playlists.module.css";
import { EosIconsLoading } from "../../app/molecules/icones";

export function History() {
  const history = useSelector(selectHistory);
  const videos = useSelector(selectAllVideos);
  if (!videos.length) {
    return (
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "6rem",
        }}
      >
        <EosIconsLoading width="3rem" height="3rem" className="loader" />
      </section>
    );
  }
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
