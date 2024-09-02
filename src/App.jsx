import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

import { useContext } from "react";

const App = () => {

  const {audioRef,track} = useContext(PlayerContext)

  return (
    <div className="h-screen bg-black">
      <div className="flex h-[90%]">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
