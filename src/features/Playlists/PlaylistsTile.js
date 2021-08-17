import { NavLink } from "react-router-dom";
import { MdiPlaylistPlay } from "../../app/molecules/icones";
import styles from "./playlists.module.css";

export default function PlaylistsTile({ video, library, playlist }) {
  return (
    <NavLink to={`/library/${playlist}`} className={styles.removeLinkStyle}>
      <section className={styles.root}>
        <img
          src={video.thumbnail}
          alt={playlist}
          srcSet=""
          className={styles.thumbnail}
        />

        <section className={styles.playlistInfo}>
          <span>{playlist}</span>
          <span
            style={{
              color: "var(--colors-secondary)",
            }}
          >
            {library[playlist].length} videos
          </span>
        </section>
      </section>
    </NavLink>
  );
}
