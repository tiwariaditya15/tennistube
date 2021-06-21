import { NavLink } from "react-router-dom";
import {
  MdiHome,
  IcBaselineVideoLibrary,
  IcSharpWatchLater,
} from "../icones/index";
import styles from "./TabNavigation.module.css";

export function TabNavigation() {
  return (
    <section className={styles.tabnav}>
      <section className={styles.tabnav__tab}>
        <NavLink to="/" className={styles.tabnav__link}>
          <MdiHome height="1.6rem" width="1.6rem" />
        </NavLink>
      </section>
      <section className={styles.tabnav__tab}>
        <NavLink to="/library" className={styles.tabnav__link}>
          <IcBaselineVideoLibrary height="1.6rem" width="1.6rem" />
        </NavLink>
      </section>
      <section className={styles.tabnav__tab}>
        <NavLink to="/playlists" className={styles.tabnav__link}>
          <IcSharpWatchLater height="1.6rem" width="1.6rem" />
        </NavLink>
      </section>
    </section>
  );
}
