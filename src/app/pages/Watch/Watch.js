import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useScrollToTop } from "../../hooks/";
import {
  selectVideoById,
  selectAllVideos,
} from "../../../features/Videos/videoSlice";
import { selectLoggedIn } from "../../../features/Auth/authSlice";
import { VideoPlayer } from "../../molecules/VideoPlayer";
import { Suggestions } from "../../molecules/Suggestions";
import { Notes } from "../../../features/Notes";
import { Description } from "./Description";
import styles from "./watch.module.css";

export function Watch() {
  const logged_in = useSelector(selectLoggedIn);
  const { videoId } = useParams();
  useScrollToTop(videoId);
  const videos = useSelector(selectAllVideos);
  const video = useSelector((state) => selectVideoById(state, videoId));
  return (
    <section className={styles.root}>
      <section className="videoPlayer">
        <VideoPlayer url={video.url} />
        <Description video={video} />
        {logged_in && <Notes videoId={videoId} />}
      </section>
      <Suggestions videos={videos} />
    </section>
  );
}
