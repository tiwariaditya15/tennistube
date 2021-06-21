import { useEffect } from "react";
import Video from "./Video";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos, selectAllVideos } from "./videoSlice";

export function Videos() {
  const dispatch = useDispatch();
  const videos = useSelector(selectAllVideos);
  useEffect(() => {
    dispatch(fetchVideos());
  }, []);
  console.log({ videos });
  return (
    <>
      {videos.map((video) => (
        <Video video={video} key={video._id} />
      ))}
    </>
  );
}
