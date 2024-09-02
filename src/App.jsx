import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

import { useContext } from "react";

const App = () => {

  // Access audioRef and track from PlayerContext using useContext hook
  const {audioRef, track} = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      {/* Main container with full height and black background */}

      <div className="flex h-[90%]">
        {/* Container to hold Sidebar and Display components, taking up 90% of the height */}
        <Sidebar />
        <Display />
      </div>
      
      {/* Player component at the bottom */}
      <Player />

      {/* Hidden audio element that plays the track, with a reference to control it programmatically */}
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
