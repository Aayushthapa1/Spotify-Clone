import { createContext, useEffect, useRef } from "react";
import { songsData } from "../assets/assets";
import { useState } from "react";

// Create a context to share player-related data across components
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  // Create references for the audio element, seek background, and seek bar
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  // State to manage the currently playing track, defaulting to the first song
  const [track, setTrack] = useState(songsData[0]);

  // State to manage whether the track is playing or paused
  const [playStatus, setPlayStatus] = useState(false);

  // State to manage the current and total time of the track in minutes and seconds
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // Function to play the track
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  // Function to pause the track
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  // Function to play a specific track by its ID
  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  // Function to play the previous track, if available
  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  // Function to play the next track, if available
  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  // Function to seek the track to a specific position based on user interaction
  const seekSong = async (e) => {
    audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
  };

  // useEffect to update the seek bar and time every second
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        
        // Update the current and total time of the track
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  // Context value that will be provided to all components consuming PlayerContext
  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
