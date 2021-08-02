import { useSelector } from "react-redux";
import { selectAllVideos } from "../Videos/videoSlice";
import { selectLibrary } from "./playlistsSlice";
import PlaylistsTile from "./PlaylistsTile";
import styles from "./playlists.module.css";

export function Library() {
  const videos = useSelector(selectAllVideos);
  const library = useSelector(selectLibrary);
  return (
    <>
      <section className={styles.flex}>
        {Object.keys(library).reduce((acc, playlist) => {
          if (library[playlist].length) {
            const vid = videos.find((vid) => vid._id === library[playlist][0]);
            return acc.concat(
              <PlaylistsTile
                video={vid}
                library={library}
                playlist={playlist}
                key={vid._id}
              />
            );
          }
          return [...acc];
        }, [])}
      </section>
    </>
  );
}
