import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthToken } from "../../features/Auth/authSlice";
import { fetchVideos } from "../../features/Videos/videoSlice";

export function useVideos() {
  const dispatch = useDispatch();
  const AUTH_TOKEN = useSelector(selectAuthToken);
  useEffect(() => {
    dispatch(fetchVideos());
  }, [AUTH_TOKEN]);
}
