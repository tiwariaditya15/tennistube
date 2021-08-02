import { Routes, Route } from "react-router-dom";
import { History, Library } from "../../../features/Playlists";
import { Login, PrivateRoute } from "../../../features/Auth";
import { Home } from "../../pages/Home";
import { Watch } from "../../pages/Watch";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:videoId" element={<Watch />} />
      <Route path="/login" element={<Login />} />
      <PrivateRoute path="/history" element={<History />} />
      <PrivateRoute path="/library" element={<Library />} />
    </Routes>
  );
}
