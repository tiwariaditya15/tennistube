import { NavLink } from "react-router-dom";
import { FeElipsisV } from "../../molecules/icones";
import { useInteractions } from "../../context/InteractionsProvider";
import styles from "./Video.module.css";

export default function Video({ video }) {
  const { setModal } = useInteractions();
  return (
    <>
      <section className="card">
        <section className="card-header">
          <NavLink to={`/watch/${video._id}`}>
            <img src={video.thumbnail} alt="Thumbnail" className="card-img" />
          </NavLink>
        </section>
        <section className="card-body">
          <section className="card-body__logo">
            <img src={video.channel.logo} alt="Logo" srcset="" />
          </section>
          <section className="card-body__title">
            <NavLink
              to={`/watch/${video._id}`}
              className={styles.cardbody__navlink}
            >
              <span className="">{video.title}</span>
            </NavLink>
            <span className={styles.cardbody__date}>{video.uploaded}</span>
          </section>
          <span
            className={styles.cardbody__menu}
            onClick={() => setModal(true)}
          >
            <FeElipsisV width="1.5rem" height="1.5rem" />
          </span>
        </section>
      </section>
    </>
  );
}
