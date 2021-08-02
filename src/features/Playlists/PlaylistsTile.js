import { MdiPlaylistPlay } from "../../app/molecules/icones";
import styles from "./playlists.module.css";

export default function PlaylistsTile({ video, library, playlist }) {
  return (
    <section className={styles.root}>
      <section className={styles.relative}>
        <img
          className={styles.thumbnail}
          src={video.thumbnail}
          alt="playlist"
          srcSet=""
        />
        <section className={styles.absolute}></section>
        <section className={styles.textOver}>
          <span>
            <span>{library[playlist].length}</span>
            <span>
              <MdiPlaylistPlay width="1em" height="1em" />
            </span>
          </span>
        </section>
      </section>
    </section>
  );
}
