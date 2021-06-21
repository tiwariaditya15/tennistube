import axios from "axios";
import { baseURL } from "./baseURL";
const URL = `${baseURL}/playlists`;

export const fetchPlaylists = () => axios.get(URL);
