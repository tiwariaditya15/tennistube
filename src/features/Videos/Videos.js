import { useEffect } from "react";
import Video from "./Video";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos, selectAllVideos } from "./videoSlice";
import styles from "./Video.module.css";

export function Videos() {
  const dispatch = useDispatch();
  const videos = useSelector(selectAllVideos);
  const error = useSelector((state) => state.videos.error);
  useEffect(() => {
    dispatch(fetchVideos());
  }, []);
  console.log({ videos });
  return (
    <>
      {videos.map((video) => (
        <Video video={video} key={video._id} />
      ))}
      {error && (
        <p className={styles.network__error}>
          <span>You're offline!</span>
        </p>
      )}
    </>
  );
}
