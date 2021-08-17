import { useSelector } from "react-redux";
import { selectAllVideos } from "../Videos/videoSlice";
import { selectLibrary } from "./playlistsSlice";
import PlaylistsTile from "./PlaylistsTile";
import styles from "./playlists.module.css";

const LIKED = "liked";
const HISTORY = "history";
const WATCHLATER = "watchLater";

export function Library() {
  const videos = useSelector(selectAllVideos);
  const library = useSelector(selectLibrary);
  return (
    <>
      <section className={styles.flex}>
        {Object.keys(library)
          .filter(
            (playlist) =>
              playlist === LIKED ||
              playlist === HISTORY ||
              playlist === WATCHLATER
          )
          .reduce((acc, playlist) => {
            if (library[playlist].length) {
              const vid = videos.find(
                (vid) => vid._id === library[playlist][0]
              );
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
        <section className={styles.horizontalLine}></section>
        {Object.keys(library)
          .filter(
            (playlist) =>
              playlist !== LIKED &&
              playlist !== HISTORY &&
              playlist !== WATCHLATER
          )
          .reduce((acc, playlist) => {
            if (library[playlist].length) {
              const vid = videos.find(
                (vid) => vid._id === library[playlist][0]
              );
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
