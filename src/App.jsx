import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import AlbumItem from "./components/AlbumItem";
import DisplayHome from "./components/DisplayHOme";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="flex h-[90%]">
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
  );
};

export default App;
