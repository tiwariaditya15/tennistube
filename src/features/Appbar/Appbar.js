import { NavLink } from "react-router-dom";
import {
  IcBaselineSearch,
  MdiAccountCircle,
  IonNavicon,
  IcOutlineLightMode,
  LsDark,
} from "../../app/molecules/icones";
import styles from "./appbar.module.css";
const DARK = "DARK";
export function Appbar({ toggleTheme }) {
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
        <span className={styles.navbar__navlink}>
          <MdiAccountCircle />
        </span>
      </section>
    </section>
  );
}
