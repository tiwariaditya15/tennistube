import { useDispatch, useSelector } from "react-redux";
import SavePlaylistsRow from "./SavePlaylistsRow";
import CreatePlaylist from "./CreatePlaylist";
import { clearVideoId, setModal } from "../Interactions/interactionsSlice";
import { selectLibrary } from "./playlistsSlice";
import { MdiClose } from "../../app/molecules/icones";
import styles from "./playlists.module.css";

const HISTORY = "history";
const LIKED = "liked";
const DISLIKED = "disliked";

export function SavePlaylists() {
  const dispatch = useDispatch();
  const library = useSelector(selectLibrary);

  return (
    <>
      <section
        className={styles.flex + " " + styles.spacebetween + " px-1 py-1"}
        style={{
          borderBottom: "1px solid var(--colors-secondary)",
        }}
      >
        <span>Save to</span>
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            dispatch(clearVideoId());
            dispatch(setModal());
          }}
        >
          <MdiClose />
        </span>
      </section>
      {Object.keys(library)
        .filter(
          (playlist) =>
            playlist !== HISTORY && playlist !== LIKED && playlist !== DISLIKED
        )
        .map((playlist) => (
          <SavePlaylistsRow playlist={playlist} />
        ))}
      <CreatePlaylist />
    </>
  );
}
