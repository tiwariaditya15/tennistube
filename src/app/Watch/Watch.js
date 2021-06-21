import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectVideoById } from "../../features/Videos/videoSlice";
import { VideoPlayer } from "../../molecules/VideoPlayer";
import { Suggestions } from "../Suggestions";
import styles from "./Watch.module.css";
import { useEffect } from "react";

export function Watch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { videoId } = useParams();
  const video = useSelector((state) => selectVideoById(state, videoId));
  console.log({ video });
  return (
    <section
      className={styles.root}
      style={{ maxWidth: "90%", marginLeft: "auto", marginRight: "auto" }}
    >
      <section className="videoPlayer">
        <VideoPlayer url={video.url} />
      </section>
      <Suggestions />
    </section>
  );
}
