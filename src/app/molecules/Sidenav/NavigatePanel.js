import { Link, useNavigate } from "react-router-dom";
import { IonNavicon } from "../icones";
import { useDispatch, useSelector } from "react-redux";
import { setSideNavigation } from "../../../features/Interactions/interactionsSlice";
import styles from "./sidenav.module.css";
import { selectLoggedIn } from "../../../features/Auth/authSlice";

export default function NavigatePanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged_in = useSelector(selectLoggedIn);
  return (
    <section
      className={styles.body}
      onClick={(event) => event.stopPropagation()}
    >
      <section
        className={styles.sideNavIcon}
        onClick={() => dispatch(setSideNavigation())}
      >
        <IonNavicon />
      </section>
      <section
        className={styles.navLinks}
        onClick={() => {
          dispatch(setSideNavigation());
          navigate("/");
        }}
      >
        Home
      </section>
      <section
        className={styles.navLinks}
        onClick={() => {
          dispatch(setSideNavigation());
          navigate("/library");
        }}
      >
        Library
      </section>
      <section
        className={styles.navLinks}
        onClick={() => {
          dispatch(setSideNavigation());
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
            dispatch(setSideNavigation());
          }}
        >
          Login
        </section>
      )}
    </section>
  );
}
