import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BxBxShow, BxBxHide } from "../../app/molecules/icones";
import styles from "./Auth.module.css";

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  return (
    <>
      <section className={styles.login + " " + styles.flexColumn}>
        <input
          type="text"
          placeholder="Name"
          className={"form-input outlined " + styles.formInput}
        />
        <input
          type="email"
          placeholder="Email"
          className={"form-input outlined " + styles.formInput}
        />
        <input
          type="text"
          placeholder="Username"
          className={"form-input outlined " + styles.formInput}
        />
        <section className={styles.wrapper}>
          <input
            type={showPassword ? "text" : "Password"}
            placeholder="Password"
            className={"form-input outlined " + styles.formInput}
          />
          <span
            className={styles.wrapper_password}
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? <BxBxHide /> : <BxBxShow />}
          </span>
        </section>
        <section className={"btn " + styles.button} onClick={() => {}}>
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
          {/* {authError && !error && authError} */}
        </section>
        <section className={styles.error}>
          {/* <span>{error && error}</span> */}
        </section>
      </section>
    </>
  );
}
