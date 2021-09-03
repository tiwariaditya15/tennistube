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
  useInterceptors(axios);
  useVideos();
  usePlaylists();
  return (
    <>
      <Sidenav />
      <section className="">
        <Appbar toggleTheme={toggleTheme} />
        <Router />
      </section>
      <TabNavigation />
      {modal && (
        <Modal>
          <SavePlaylists />
        </Modal>
      )}
    </>
  );
}
