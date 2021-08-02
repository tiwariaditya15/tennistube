import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { FeElipsisV } from "../../app/molecules/icones";
import { setModal, setVideoId } from "../Interactions/interactionsSlice";
import { addToHistory } from "../Playlists/playlistsSlice";
import styles from "./video.module.css";

export default function Video({ video }) {
  const dispatch = useDispatch();
  return (
    <>
      <section className="card">
        <section className="card-header">
          <NavLink to={`/watch/${video._id}`}>
            <img
              src={video.thumbnail}
              alt="Thumbnail"
              className="card-img"
              onClick={(event) => dispatch(addToHistory(video._id))}
            />
          </NavLink>
        </section>
        <section className="card-body">
          <section className="card-body__logo">
            <img src={video.channel.logo} alt="Logo" />
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
            onClick={() => {
              dispatch(setVideoId(video._id));
              dispatch(setModal());
            }}
          >
            <FeElipsisV width="1.5rem" height="1.5rem" />
          </span>
        </section>
      </section>
    </>
  );
}
