import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../Auth/authSlice";
import {
  IcBaselineSearch,
  MdiAccountCircle,
  IonNavicon,
  IcOutlineLightMode,
  LsDark,
} from "../../app/molecules/icones";
import styles from "./Appbar.module.css";

const DARK = "DARK";
export function Appbar({ toggleTheme }) {
  const logged_in = useSelector(selectLoggedIn);
  return (
    <section className={styles.navbar}>
      <section className="flex">
        <span>
          <IonNavicon />
        </span>
        <NavLink to="/" className={styles.navbar__navlink}>
          <span className={styles.navbar__navlink}>TennisTube</span>
        </NavLink>
      </section>

      <section className={styles.navbar__searchbox}>
        <input type="text" />
      </section>

      <section className={styles.navbarFlex}>
        <span className={styles.navbar__navlink} onClick={toggleTheme}>
          {document.body.dataset.theme === DARK ? (
            <IcOutlineLightMode />
          ) : (
            <LsDark />
          )}
        </span>
        <span className={styles.navbar__navlink}>
          <IcBaselineSearch />
        </span>
        {logged_in && (
          <span className={styles.navbar__navlink}>
            <MdiAccountCircle />
          </span>
        )}
      </section>
    </section>
  );
}
