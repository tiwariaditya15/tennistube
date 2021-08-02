import { useDispatch, useSelector } from "react-redux";
import { setModal, selectModalInteraction } from "./interactionsSlice";
import styles from "./modal.module.css";

export function Modal({ children }) {
  const modal = useSelector(selectModalInteraction);
  const dispatch = useDispatch();
  return (
    <section
      className={modal ? styles.modal + " " + styles.show : styles.modal}
      onClick={() => dispatch(setModal())}
    >
      <section onClick={(e) => e.stopPropagation()} className={styles.body}>
        {children}
      </section>
    </section>
  );
}
