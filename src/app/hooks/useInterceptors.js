import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/Auth/authSlice";

export function useInterceptors(axios) {
  const dispatch = useDispatch();
  const onRequest = (config) => {
    const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
    if (AUTH_TOKEN) {
      config.headers.Authorization = AUTH_TOKEN;
    }
    return config;
  };

  const onRequestError = (error) => {
    return Promise.reject(error);
  };

  const onResponse = (response) => {
    return response;
  };

  const onResponseError = (error) => {
    const UNAUTHORIZED = 401;
    if (error.response.status === UNAUTHORIZED) {
      localStorage.removeItem("AUTH_TOKEN");
      dispatch(logout());
    }
    return Promise.reject(error);
  };

  useEffect(() => {
    axios.interceptors.request.use(onRequest, onRequestError);
    axios.interceptors.response.use(onResponse, onResponseError);
  }, []);

  // const setupInterceptors = (axios) => {
  //    axios.interceptors.request.use(onRequest, onRequestError);
  //    axios.interceptors.response.use(onResponse, onResponseError);
  //   return axios;
  // };

  // return [setupInterceptors];
}
