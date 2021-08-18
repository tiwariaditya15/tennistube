import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectAllVideos } from "../Videos/videoSlice";
import { Suggestions } from "../../app/molecules/Suggestions";
export function IndividualPlaylist() {
  const { playlist } = useParams();
  const playlistVideoIds = useSelector(
    (state) => state.playlists.library[playlist]
  );
  const playlistVideos = useSelector(selectAllVideos);
  const videos = playlistVideos.filter((video) =>
    playlistVideoIds.includes(video._id)
  );
  return (
    <>
      <Suggestions videos={videos} />
    </>
  );
}
