import { NavLink } from "react-router-dom";
import {
  MdiHome,
  IcBaselineVideoLibrary,
  IcSharpWatchLater,
} from "../icones/index";
import styles from "./tabNavigation.module.css";

export function TabNavigation() {
  return (
    <section className={styles.tabnav}>
      <NavLink to="/" className={styles.tabnav__link}>
        <section className={styles.tabnav__tab}>
          <MdiHome height="1.6rem" width="1.6rem" />
        </section>
      </NavLink>
      <NavLink to="/library" className={styles.tabnav__link}>
        <section className={styles.tabnav__tab}>
          <IcBaselineVideoLibrary height="1.6rem" width="1.6rem" />
        </section>
      </NavLink>
      <NavLink to="/history" className={styles.tabnav__link}>
        <section className={styles.tabnav__tab}>
          <IcSharpWatchLater height="1.6rem" width="1.6rem" />
        </section>
      </NavLink>
    </section>
  );
}
