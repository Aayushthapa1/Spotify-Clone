import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/assets";
import { assets } from "../assets/assets";
import Navbar from "./Navbar";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams(); // Get album ID from URL parameters
  const albumData = albumsData[id]; // Retrieve album data based on ID from assets
  const { playWithId } = useContext(PlayerContext); // Get playWithId function from context

  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" /> {/* Display album cover image */}
        <div className="flex flex-col">
          <p>Playlist</p> {/* Label indicating playlist */}
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name} {/* Display album name */}
          </h2>
          <h4>{albumData.desc}</h4> {/* Display album description */}
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>
            13,232,424 Likes
            <b>50 Songs,</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title {/* Column headers for the song list */}
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4 " src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {
      songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)} // Play the song with the given ID when clicked
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
            <p className="text-white">
                <b className="mr-4 text-[#a7a7a7]">{index + 1}</b> {/* Song index */}
                <img className="inline w-10 mr-5" src={item.image} alt="" /> {/* Display song image */}
                {item.name} {/* Display song name */}
            </p>
            <p className="text-[15px]">{albumData.name}</p> {/* Display album name */}
            <p className="text-[15px] hidden sm:block">5 Days Ago</p> {/* Date added (hidden on small screens) */}
            <p className="text-[15px] text-center">{item.duration}</p> {/* Display song duration */}
        </div>
      ))
      }
    </>
  );
};

export default DisplayAlbum;
