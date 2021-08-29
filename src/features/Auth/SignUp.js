import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthError, signup } from "./authSlice";
import { validateCredentils } from "./utilityFunctions";
import { BxBxShow, BxBxHide } from "../../app/molecules/icones";
import styles from "./Auth.module.css";

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [signUpCredentials, setSignUpCredentils] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector(selectAuthError);

  const handleSignUp = () => {
    if (validateCredentils(signUpCredentials)) {
      setError(null);
      dispatch(signup(signUpCredentials));
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
          type="text"
          placeholder="Name"
          className={"form-input outlined " + styles.formInput}
          onChange={(event) =>
            setSignUpCredentils((prevCredentials) => ({
              ...prevCredentials,
              fullname: event.target.value,
            }))
          }
        />
        <input
          type="email"
          placeholder="Email"
          className={"form-input outlined " + styles.formInput}
          onChange={(event) =>
            setSignUpCredentils((prevCredentials) => ({
              ...prevCredentials,
              email: event.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Username"
          className={"form-input outlined " + styles.formInput}
          onChange={(event) =>
            setSignUpCredentils((prevCredentials) => ({
              ...prevCredentials,
              username: event.target.value,
            }))
          }
        />
        <section className={styles.wrapper}>
          <input
            type={showPassword ? "text" : "Password"}
            placeholder="Password"
            className={"form-input outlined " + styles.formInput}
            onChange={(event) =>
              setSignUpCredentils((prevCredentials) => ({
                ...prevCredentials,
                password: event.target.value,
              }))
            }
          />
          <span
            className={styles.wrapper_password}
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? <BxBxHide /> : <BxBxShow />}
          </span>
        </section>
        <section className={"btn " + styles.button} onClick={handleSignUp}>
          <span>SignUp</span>
        </section>
        <section className={styles.redirect}>
          <span>Have an account? </span>
          <NavLink
            to="/login"
            state={{ from: location.state?.from }}
            className={styles.redirect__btn}
          >
            Log in
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
