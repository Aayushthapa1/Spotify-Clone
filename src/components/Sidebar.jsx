import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    
  // Initialize navigation function from react-router-dom to handle route changes
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      {/* Sidebar container, visible on large screens, takes up 25% of the width */}
      
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        {/* Top section of the sidebar for navigation (Home and Search) */}
        
        <div onClick={() => navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          {/* Navigate to the home page when clicked */}
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-normal">Home</p>
        </div>
        
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          {/* Search functionality placeholder */}
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-normal">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        {/* Bottom section of the sidebar for user library and playlist creation */}

        <div className="p-4 flex items-center justify-between">
          {/* Your Library section with options to expand and add new items */}
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-normal text-gray-300 hover:text-white cursor-pointer">
              Your Library
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-6" src={assets.arrow_icon} alt="" />
            <img className="w-6" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          {/* Section to create a new playlist */}
          <h1>Create Your First Playlist</h1>
          <p className="font-light">It's easy. We will help you.</p>
          <button className="px-4 py-1.5 bg-[#1DB954] text-[15px] text-black rounded-full mt-4 hover:bg-[#1ED760]">
            Create Playlist
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 mt-4 pl-4">
          {/* Section to browse the library and discover new music */}
          <h1>Let's Listen to Music</h1>
          <p className="font-light">We'll help you to discover.</p>
          <button className="px-4 py-1.5 bg-[#1DB954] text-[15px] text-black rounded-full mt-4 hover:bg-[#1ED760]">
            Browse Library
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
