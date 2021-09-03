import { useNavigate } from "react-router-dom";
import { IonNavicon } from "../icones";
import { useDispatch } from "react-redux";
import { setSideNavigation } from "../../../features/Interactions/interactionsSlice";
import styles from "./sidenav.module.css";

export default function NavigatePanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    </section>
  );
}
