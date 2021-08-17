import { useSelector } from "react-redux";
import { selectAuthToken } from "../../features/Auth/authSlice";
export function useAuthToken() {
  const AUTH_TOKEN = useSelector(selectAuthToken);
  return {
    AUTH_TOKEN,
  };
}
