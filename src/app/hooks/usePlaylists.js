import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPlaylists } from "../../features/Playlists/playlistsSlice";
export function usePlaylists(AUTH_TOKEN) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlaylists());
  }, [AUTH_TOKEN]);
}
