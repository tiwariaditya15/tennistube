import axios from "axios";
import { baseURL } from "../api/baseURL";

const URL = `${baseURL}/videos`;
const addLikeURL = `${baseURL}/statistics/like/add`;
const removeLikeURL = `${baseURL}/statistics/like/remove`;
const addDislikeURL = `${baseURL}/statistics/dislike/add`;
const removeDislikeURL = `${baseURL}/statistics/dislike/remove`;

export const fetchVideos = () => axios.get(URL);

export const addLike = (videoId) => axios.post(addLikeURL, { videoId });
export const removeLike = (videoId) => axios.post(removeLikeURL, { videoId });
export const addDislike = (videoId) => axios.post(addDislikeURL, { videoId });
export const removeDislike = (videoId) =>
  axios.post(removeDislikeURL, { videoId });
