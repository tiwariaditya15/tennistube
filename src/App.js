import axios from "axios";
import {
  useInterceptors,
  useTheme,
  useVideos,
  usePlaylists,
  useModal,
  useAuthToken,
} from "./app/hooks";
import { Appbar } from "./features/Appbar/";
import { TabNavigation } from "./app/molecules/TabNavigation";
import { Sidenav } from "./app/molecules/Sidenav";
import { Modal } from "./features/Interactions";
import { SavePlaylists } from "./features/Playlists";
import { Router } from "./app/molecules/Router";

export default function App() {
  const { modal } = useModal();
  const { toggleTheme } = useTheme();
  const { AUTH_TOKEN } = useAuthToken();
  useInterceptors(axios);
  useVideos(AUTH_TOKEN);
  usePlaylists(AUTH_TOKEN);
  return (
    <>
      <section className="">
        <Appbar toggleTheme={toggleTheme} />
        <Sidenav />
        <Router />
        <TabNavigation />
      </section>

      {modal && (
        <Modal>
          <SavePlaylists />
        </Modal>
      )}
    </>
  );
}
