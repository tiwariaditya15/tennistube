import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectVideoById } from "../../../features/Videos/videoSlice";
import { VideoPlayer } from "../../molecules/VideoPlayer";
import { Suggestions } from "./Suggestions";
import styles from "./watch.module.css";

export function Watch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { videoId } = useParams();
  const video = useSelector((state) => selectVideoById(state, videoId));
  console.log({ video });
  return (
    <section className={styles.root}>
      <section className="videoPlayer">
        <VideoPlayer url={video.url} />
      </section>
      <Suggestions />
    </section>
  );
}
