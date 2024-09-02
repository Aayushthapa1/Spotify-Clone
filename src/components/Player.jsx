import React from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  // Extracting necessary values from PlayerContext
  const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } =
    useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* Main player container, taking up 10% of the height, aligned at the bottom */}
      
      <div className="hidden lg:flex items-center gap-4">
        {/* Display the track's image and details (name and description) on large screens */}
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p> {/* Display first 12 characters of the description */}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto ">
        {/* Central control section for play/pause, next, previous, etc. */}
        
        <div className="flex gap-5">
          {/* Playback controls (shuffle, previous, play/pause, next, loop) */}
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt=""
            />
          )}
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>

        <div className="flex items-center gap-5">
          {/* Time display and seek bar */}
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            ref={seekBg} onClick={seekSong}
            className="w-[60vw] max-w-[600px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-15 bg-white hover:bg-green-800 rounded-full"
            />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-4 opacity-75">
        {/* Additional player controls (volume, queue, speaker, etc.) visible on large screens */}
        <img className="w-4" src={assets.play_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div> {/* Volume bar */}
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
