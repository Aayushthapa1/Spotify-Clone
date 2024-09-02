import React from "react";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext); // Get playWithId function from context

  return (
    <div
      onClick={() => playWithId(id)} // Play the song with the given ID when clicked
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]" // Styling for the song item
    >
      <img className="rounded" src={image} alt="" /> {/* Display song image */}
      <p className="font-bold mt-2 mb-1">{name}</p> {/* Display song name */}
      <p className="text-slate-200 text-sm">{desc}</p> {/* Display song description */}
    </div>
  );
};

export default SongItem;
