import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FeElipsisV } from "../../app/molecules/icones";
import { setModal, setVideoId } from "../Interactions/interactionsSlice";
import styles from "./Video.module.css";

export function VideoTile({ video }) {
  const dispatch = useDispatch();
  return (
    <section className={styles.grid}>
      <section className="card-header">
        <NavLink to={`/watch/${video._id}`}>
          <img
            src={video.thumbnail}
            alt={video.title}
            className="card-img"
            style={{
              maxHeight: "100%",
            }}
          />
        </NavLink>
      </section>
      <section
        className="card-body"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "unset",
          paddingLeft: "0.6rem",
        }}
      >
        <section className={"card-title " + styles.cardTitle}>
          {video.title.length > 32
            ? video.title.substring(0, 32).concat("...")
            : video.title}
        </section>
        <section className={"card-text " + styles.cardText}>
          {video.channel.name}
        </section>
        <section
          className={"card-text " + styles.cardText + " " + styles.card__date}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>{video.uploaded}</span>
          <span
            className={styles.card__more}
            onClick={() => {
              dispatch(setVideoId(video._id));
              dispatch(setModal());
            }}
          >
            <FeElipsisV />
          </span>
        </section>
      </section>
    </section>
  );
}
