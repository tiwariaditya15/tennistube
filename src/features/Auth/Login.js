import { useState } from "react";
import { useLocation, Navigate } from "react-router";
import {
  login,
  selectAuthError,
  selectLoadingState,
  selectLoggedIn,
} from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import { BxBxShow, BxBxHide } from "../../app/molecules/icones";
import { validateCredentils } from "./utilityFunctions";
import styles from "./Auth.module.css";
import { NavLink } from "react-router-dom";

export function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const dispatch = useDispatch();

  const authError = useSelector(selectAuthError);
  const loading = useSelector(selectLoadingState);
  const logged_in = useSelector(selectLoggedIn);

  const handleLogin = () => {
    if (validateCredentils(credentials)) {
      setError(null);
      dispatch(login(credentials));
    } else {
      setError("Your email or password doesn't seem correct.");
    }
  };

  if (logged_in) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <>
      <section className={styles.login + " " + styles.flexColumn}>
        <input
          type="email"
          placeholder="Email"
          className={"form-input outlined " + styles.formInput}
          value={credentials.email}
          onChange={(e) =>
            setCredentials((prevCredentials) => {
              return { ...prevCredentials, email: e.target.value };
            })
          }
        />
        <section className={styles.wrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={"form-input outlined " + styles.formInput}
            value={credentials.password}
            onChange={(e) => {
              setCredentials({
                ...credentials,
                password: e.target.value,
              });
            }}
          />
          <span
            className={styles.wrapper_password}
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? <BxBxHide /> : <BxBxShow />}
          </span>
        </section>
        <section
          className={"btn " + styles.button}
          onClick={() => {
            if (!loading) {
              handleLogin();
            }
          }}
        >
          <span>{loading ? "Loging in..." : "Login"}</span>
        </section>
        <section
          className={"btn " + styles.button}
          style={{ marginTop: "0" }}
          onClick={() =>
            setCredentials((prevCredentials) => ({
              ...prevCredentials,
              email: "tiwariadi@gmail.com",
              password: "123456",
            }))
          }
        >
          <span>Fill Credentils</span>
        </section>
        <section className={styles.redirect}>
          <span>Don't have an account? </span>
          <NavLink
            to="/signup"
            state={{ from: location.state?.from }}
            className={styles.redirect__btn}
          >
            Sign Up
          </NavLink>
        </section>
        <section className={styles.error}>
          {authError && !error && authError}
        </section>
        <section className={styles.error}>
          <span>{error && error}</span>
        </section>
      </section>
    </>
  );
}
