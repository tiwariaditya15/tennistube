import axios from "axios";
import { baseURL } from "../api/baseURL";
const URL = `${baseURL}/videos`;

export const fetchVideos = () => axios.get(URL);
