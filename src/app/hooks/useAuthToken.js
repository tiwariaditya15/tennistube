import localforage from "localforage";
import { useState } from "react";
export function useAuthToken(dispatch, setToken) {
  const [success, setSuccess] = useState(false);
  localforage
    .getItem("AUTH_TOKEN")
    .then((token) => {
      if (token) {
        console.log("useAuthToken");
        setSuccess(true);
        // dispatch(setToken`({ token }));
      }
    })
    .catch((error) => {
      console.log({ error });
    });
  return [success];
}
