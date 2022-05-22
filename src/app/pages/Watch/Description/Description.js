import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../../../features/Auth/authSlice";
import { CarbonMaximize } from "../../../molecules/icones";
import Actions from "./Actions";
import styles from "./description.module.css";

export function Description({ video }) {
  const logged_in = useSelector(selectLoggedIn);
  return (
    <section className={styles.description}>
      <section className={styles.title}>{video.title}</section>
      <section className={styles.views}>{video.statistics.views} views</section>
      <Actions video={video} />
      <section className={styles.channel}>
        <section>
          <img
            src={video.channel.logo}
            alt=""
            srcSet=""
            className={styles.channel__logo}
          />
        </section>
        <section className={styles.channel__name}>
          <span>{video.channel.name}</span>
          <span
            style={{
              color: "red",
              cursor: "pointer",
            }}
          >
            SUBSCRIBE
          </span>
        </section>
      </section>
      <section className={styles.comments}>
        <span>Comments</span>
        <span className={styles.maximize}>
          <CarbonMaximize />
        </span>
      </section>
    </section>
  );
}
