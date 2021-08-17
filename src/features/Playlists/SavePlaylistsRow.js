import { useDispatch, useSelector } from "react-redux";
import { selectVideoId } from "../Interactions/interactionsSlice";
import {
  selectLibrary,
  togglePlaylists,
  removePlaylist,
} from "./playlistsSlice";
import styles from "./playlists.module.css";
import { IcBaselineRemoveCircle } from "../../app/molecules/icones";

const WATCHLATER = "watchLater";

export default function SavePlaylistsRow({ playlist }) {
  const dispatch = useDispatch();
  const library = useSelector(selectLibrary);
  const videoId = useSelector(selectVideoId);

  return (
    <section className={styles.flex + " " + styles.spacebetween + " px-1 py-1"}>
      <section
        className={styles.cursorPointer}
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
      {playlist !== WATCHLATER && (
        <section
          className={styles.cursorPointer}
          onClick={(event) => dispatch(removePlaylist(playlist))}
        >
          <IcBaselineRemoveCircle color="var(--colors-remove)" />
        </section>
      )}
    </section>
  );
}
