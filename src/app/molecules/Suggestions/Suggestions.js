import { VideoTile } from "../../../features/Videos";
import { EosIconsLoading } from "../icones";
import styles from "./suggestions.module.css";

export function Suggestions({ videos }) {
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
    <section className={styles.root}>
      {videos.map((video, idx) => (
        <VideoTile video={video} key={idx} />
      ))}
    </section>
  );
}
