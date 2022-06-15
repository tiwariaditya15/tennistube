import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IcBaselineAdd } from "../../app/molecules/icones";
import { selectVideoById } from "../Videos/videoSlice";
import styles from "./playlists.module.css";
import { createPlaylist } from "./playlistsSlice";

export default function CreatePlaylist() {
  const [createModal, setCreateModal] = useState(false);
  const [playlist, setPlaylist] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const videoId = useSelector((state) => state.interactions.videoId);
  const handleCreatePlaylist = (event) => {
    if (playlist.length > 0) {
      setError(false);
      setCreateModal(false);
      dispatch(createPlaylist({ playlist, videoId }));
    } else {
      setError(true);
    }
  };
  console.log({ error });
  return (
    <>
      {!createModal && (
        <section
          className="px-1 py-1"
          style={{
            borderTop: "1px solid var(--colors-secondary)",
            cursor: "pointer",
          }}
          onClick={(event) => setCreateModal((prev) => !prev)}
        >
          <span>
            <IcBaselineAdd />
          </span>
          <span> Create Playlist</span>
        </section>
      )}
      {createModal && (
        <section
          className="px-1 py-1"
          style={{
            borderTop: "1px solid var(--colors-secondary)",
          }}
        >
          <input
            type="text"
            onChange={(event) => setPlaylist(event.target.value)}
            className={styles.formInput}
            style={error ? { border: "2px solid red" } : {}}
            placeholder={"Playlist name"}
          />
          <button className={styles.btn} onClick={handleCreatePlaylist}>
            Create
          </button>
        </section>
      )}
    </>
  );
}
