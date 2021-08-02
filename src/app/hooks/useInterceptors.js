import { useEffect } from "react";

export function useInterceptors(axios) {
  const onRequest = (config) => {
    config.headers.Authorization = localStorage.getItem("AUTH_TOKEN") || null;
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
