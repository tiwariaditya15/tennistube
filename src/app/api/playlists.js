import axios from "axios";
import { baseURL } from "./baseURL";
const playlistsURL = `${baseURL}/playlists`;
const addToHistoryURL = `${baseURL}/playlists/history`;
const togglePlaylistsURL = `${baseURL}/playlists/toggle`;
const createPlaylistURL = `${baseURL}/playlists/create`;

export const fetchPlaylists = () => axios.get(playlistsURL);
export const addToHistory = (videoId) =>
  axios.post(addToHistoryURL, {
    videoId,
  });
export const togglePlaylists = (videoId, playlist) =>
  axios.post(togglePlaylistsURL, {
    videoId,
    playlist,
  });

export const createPlaylist = (playlist) =>
  axios.post(createPlaylistURL, { playlist });
