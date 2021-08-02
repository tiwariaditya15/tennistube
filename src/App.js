import axios from "axios";
import { useEffect } from "react";
import { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInterceptors } from "./app/hooks";
import { TabNavigation } from "./app/molecules/TabNavigation";
import { Sidenav } from "./app/molecules/Sidenav";
import { Modal } from "./features/Interactions";
import { SavePlaylists } from "./features/Playlists";
import { fetchPlaylists } from "./features/Playlists/playlistsSlice";
import { selectModalInteraction } from "./features/Interactions/interactionsSlice";
import { fetchVideos } from "./features/Videos/videoSlice";
import { Router } from "./app/molecules/Router";

export default function App() {
  const [theme, setTheme] = useState("dark");
  useInterceptors(axios);
  const modal = useSelector(selectModalInteraction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
    dispatch(fetchPlaylists());
  }, []);

  useLayoutEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  console.log(useSelector((store) => store));
  return (
    <>
      <section className="">
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
