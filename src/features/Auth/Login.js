import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { login, selectAuthError } from "./authSlice";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authError = useSelector(selectAuthError);

  const handleLogin = () => {
    if (validateCredentils(credentials)) {
      setError(null);
      dispatch(login(credentials));
      if (!authError) {
        // TODO: doing location.state.from
        navigate("/");
      }
    } else {
      setError("Your email or password doesn't seem correct.");
    }
  };

  return (
    <>
      <section className={styles.login + " " + styles.flexColumn}>
        <input
          type="email"
          placeholder="Email"
          className={"form-input outlined " + styles.formInput}
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
          onClick={() => handleLogin()}
        >
          <span>Login</span>
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
