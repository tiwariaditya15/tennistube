import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../../features/Videos/videoSlice";
export function useVideos(AUTH_TOKEN) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos());
  }, [AUTH_TOKEN]);
}
