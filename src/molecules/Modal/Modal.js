import { useInteractions } from "../../context/InteractionsProvider";
import styles from "./Modal.module.css";

export function Modal({ children }) {
  const { modal, setModal } = useInteractions();
  return (
    <section
      className={modal ? styles.modal + " " + styles.show : styles.modal}
      onClick={() => setModal(false)}
    >
      <section onClick={(e) => e.stopPropagation()} className={styles.body}>
        {children}
      </section>
    </section>
  );
}
