import { useDispatch, useSelector } from "react-redux";
import { selectVideoId } from "../Interactions/interactionsSlice";
import { selectLibrary, togglePlaylists } from "./playlistsSlice";
import styles from "./playlists.module.css";

export default function SavePlaylistsRow({ playlist }) {
  const dispatch = useDispatch();
  const library = useSelector(selectLibrary);
  const videoId = useSelector(selectVideoId);

  return (
    <section
      className={styles.flex + " px-1 py-1"}
      style={{ cursor: "pointer" }}
      onClick={(event) => dispatch(togglePlaylists({ videoId, playlist }))}
    >
      <span>
        <input
          type="checkbox"
          className="form-checkbox checkbox"
          checked={library[playlist].some((video) => video === videoId)}
        />
      </span>
      <span>{playlist.charAt(0).toUpperCase() + playlist.slice(1)}</span>
    </section>
  );
}
