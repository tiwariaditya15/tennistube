import { useState } from "react";
import { Appbar } from "../../features/Appbar";
import { BxBxShow, BxBxHide } from "../../molecules/icones";
import styles from "./Login.module.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Appbar />
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
        <section className={styles.buttonWrapper}>
          <span className={"btn " + styles.buttonWrapper__button}>Login</span>
        </section>
      </section>
    </>
  );
}
