import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllVideos } from "../../features/Videos/videoSlice";
import { FeElipsisV } from "../../molecules/icones";
import { useInteractions } from "../../context/InteractionsProvider";
import styles from "./Suggestions.module.css";

export function Suggestions() {
  const videos = useSelector(selectAllVideos);
  const { setModal } = useInteractions();
  return (
    <section className={styles.root}>
      {videos.map((video) => (
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
              className={
                "card-text " + styles.cardText + " " + styles.card__date
              }
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{video.uploaded}</span>
              <span
                className={styles.card__more}
                onClick={() => setModal(true)}
              >
                <FeElipsisV />
              </span>
            </section>
          </section>
        </section>
      ))}
    </section>
  );
}
