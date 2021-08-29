import axios from "axios";
import { baseURL } from "./baseURL";

const URL = `${baseURL}/accounts`;

export const login = ({ email, password }) =>
  axios.post(`${URL}/login`, { email, password });

export const signUp = (userDetails) =>
  axios.post(`${URL}/signup`, { ...userDetails });
