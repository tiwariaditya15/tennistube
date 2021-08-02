import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "./authSlice";
export function PrivateRoute({ path, ...props }) {
  const logged_in = useSelector(selectLoggedIn);
  return (
    <>
      {logged_in ? (
        <Route path={path} {...props} />
      ) : (
        <Navigate to="/login" state={{ from: path }} replace={true} />
      )}
    </>
  );
}
