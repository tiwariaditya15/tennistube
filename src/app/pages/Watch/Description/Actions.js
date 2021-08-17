import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectLoggedIn } from "../../../../features/Auth/authSlice";
import { togglePlaylists } from "../../../../features/Playlists/playlistsSlice";
import {
  addLike,
  removeLike,
  addDislike,
  removeDislike,
} from "../../../../features/Videos/videoSlice";
import {
  setModal,
  setVideoId,
} from "../../../../features/Interactions/interactionsSlice";
import {
  BxBxDislike,
  BxBxsDislike,
  BxBxLike,
  BxBxsLike,
  IcBaselineLibraryAdd,
  IconParkOutlineShareTwo,
} from "../../../molecules/icones";
import styles from "./description.module.css";

export default function Actions({ video }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logged_in = useSelector(selectLoggedIn);
  const liked = useSelector((state) => state.playlists.library.liked);
  const disliked = useSelector((state) => state.playlists.library.disliked);
  return (
    <>
      <section className={styles.description__actions}>
        <section
          className={styles.description__actions_btn}
          onClick={() => {
            if (logged_in) {
              dispatch(
                togglePlaylists({ videoId: video._id, playlist: "liked" })
              );
              if (disliked.includes(video._id)) {
                dispatch(
                  togglePlaylists({ videoId: video._id, playlist: "disliked" })
                );
              }
              liked.includes(video._id)
                ? dispatch(removeLike(video._id))
                : dispatch(addLike(video._id));
            } else {
              navigate("/login");
            }
          }}
        >
          {logged_in && liked.includes(video._id) ? (
            <span>
              <BxBxsLike width="1.2rem" height="1.2rem" />
            </span>
          ) : (
            <span>
              <BxBxLike width="1.2rem" height="1.2rem" />
            </span>
          )}
          <span>{video.statistics.likes}</span>
        </section>
        <section
          className={styles.description__actions_btn}
          onClick={() => {
            if (logged_in) {
              dispatch(
                togglePlaylists({ videoId: video._id, playlist: "disliked" })
              );
              if (liked.includes(video._id)) {
                dispatch(
                  togglePlaylists({ videoId: video._id, playlist: "liked" })
                );
              }
              disliked.includes(video._id)
                ? dispatch(removeDislike(video._id))
                : dispatch(addDislike(video._id));
            } else {
              navigate("/login");
            }
          }}
        >
          {logged_in && disliked.includes(video._id) ? (
            <span>
              <BxBxsDislike width="1.2rem" height="1.2rem" />
            </span>
          ) : (
            <span>
              <BxBxDislike width="1.2rem" height="1.2rem" />
            </span>
          )}
          <span>{video.statistics.dislikes}</span>
        </section>
        <section
          className={styles.description__actions_btn}
          onClick={() => {
            if (logged_in) {
              dispatch(setModal());
              dispatch(setVideoId(video._id));
            } else {
              navigate("/login");
            }
          }}
        >
          <span>
            <IcBaselineLibraryAdd width="1.2rem" height="1.2rem" />
          </span>
          <span>Save</span>
        </section>
        <section className={styles.description__actions_btn}>
          <span>
            <IconParkOutlineShareTwo width="1.2rem" height="1.2rem" />
          </span>
          <span>Share</span>
        </section>
      </section>
    </>
  );
}
