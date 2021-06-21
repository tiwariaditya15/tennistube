import { NavLink } from "react-router-dom";
import {
  IcBaselineSearch,
  MdiAccountCircle,
  IonNavicon,
} from "../../molecules/icones";
import styles from "./Appbar.module.css";
export function Appbar() {
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
      <section>
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
