import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setSideNavigation,
  selectSideNavigation,
} from "../../../features/Interactions/interactionsSlice";
import NavigatePanel from "./NavigatePanel";
import styles from "./sidenav.module.css";
export function Sidenav() {
  const dispatch = useDispatch();
  const sideNavigation = useSelector(selectSideNavigation);
  return (
    <>
      {sideNavigation && (
        <section
          className={styles.sidenav}
          onClick={() => dispatch(setSideNavigation())}
        >
          <NavigatePanel />
        </section>
      )}
    </>
  );
}
