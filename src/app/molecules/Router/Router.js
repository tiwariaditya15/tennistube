import { Routes, Route } from "react-router-dom";
import {
  History,
  Library,
  IndividualPlaylist,
} from "../../../features/Playlists";
import { SignUp, Login, PrivateRoute } from "../../../features/Auth";
import { Home } from "../../pages/Home";
import { Watch } from "../../pages/Watch";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:videoId" element={<Watch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <PrivateRoute path="/history" element={<History />} />
      <PrivateRoute path="/library" element={<Library />} />
      <PrivateRoute
        path="/library/:playlist"
        element={<IndividualPlaylist />}
      />
    </Routes>
  );
}
