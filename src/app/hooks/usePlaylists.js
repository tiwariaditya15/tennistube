import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken } from "../../features/Auth/authSlice";
import { fetchPlaylists } from "../../features/Playlists/playlistsSlice";

export function usePlaylists() {
  const dispatch = useDispatch();
  const AUTH_TOKEN = useSelector(selectAuthToken);
  useEffect(() => {
    dispatch(fetchPlaylists());
  }, [AUTH_TOKEN]);
}
