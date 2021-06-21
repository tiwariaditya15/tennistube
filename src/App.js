import { useState, useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "./app/Home";
import { Watch } from "./app/Watch";
import { TabNavigation } from "./molecules/TabNavigation";
import { Sidenav } from "./molecules/Sidenav";
import { useInteractions } from "./context/InteractionsProvider";
import { Modal } from "./molecules/Modal";
import { Playlists } from "./features/Playlists";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const { modal } = useInteractions();

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useLayoutEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  console.log(useSelector((store) => store));
  return (
    <>
      <section className="">
        <Sidenav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:videoId" element={<Watch />} />
        </Routes>
        <TabNavigation />
      </section>
      {modal && (
        <Modal>
          <Playlists />
        </Modal>
      )}
    </>
  );
}
