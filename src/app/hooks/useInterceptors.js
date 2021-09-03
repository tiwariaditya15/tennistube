import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken } from "../../features/Auth/authSlice";
import { logout } from "../../features/Auth/authSlice";

export function useInterceptors(axios) {
  const dispatch = useDispatch();
  const AUTH_TOKEN = useSelector(selectAuthToken);
  const onRequest = (config) => {
    if (AUTH_TOKEN) {
      console.log("setting token", AUTH_TOKEN);
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
      console.log("removing token");
      localStorage.removeItem("AUTH_TOKEN");
      dispatch(logout());
    }
    return Promise.reject(error);
  };

  useEffect(() => {
    axios.interceptors.request.use(onRequest, onRequestError);
    axios.interceptors.response.use(onResponse, onResponseError);
  }, [AUTH_TOKEN]);

  // const setupInterceptors = (axios) => {
  //    axios.interceptors.request.use(onRequest, onRequestError);
  //    axios.interceptors.response.use(onResponse, onResponseError);
  //   return axios;
  // };

  // return [setupInterceptors];
}
