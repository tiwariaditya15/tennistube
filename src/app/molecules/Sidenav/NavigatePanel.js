import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./sidenav.module.css";
import { selectLoggedIn } from "../../../features/Auth/authSlice";

export default function NavigatePanel() {
  const navigate = useNavigate();
  const logged_in = useSelector(selectLoggedIn);
  return (
    <section
      className={styles.body}
      onClick={(event) => event.stopPropagation()}
    >
      <section
        className={styles.navLinks}
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </section>
      <section
        className={styles.navLinks}
        onClick={() => {
          navigate("/library");
        }}
      >
        Library
      </section>
      <section
        className={styles.navLinks}
        onClick={() => {
          navigate("/history");
        }}
      >
        History
      </section>
      {!logged_in && (
        <section
          className={styles.navLinks}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </section>
      )}
    </section>
  );
}
