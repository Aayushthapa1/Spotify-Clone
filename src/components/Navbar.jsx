import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                {/* Navigation arrows for going back and forward */}
                <div className="flex items-center gap-2">
                    <img
                        onClick={() => navigate(-1)} // Go to the previous page
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
                        src={assets.arrow_left}
                        alt="Back"
                    />
                    <img
                        onClick={() => navigate(1)} // Go to the next page
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
                        src={assets.arrow_right}
                        alt="Forward"
                    />
                </div>

                {/* Options for exploring premium content, installing the app, and user profile */}
                <div className="flex items-center gap-4">
                    <p className="bg-white cursor-pointer text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">
                        Explore Premium
                    </p>
                    <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
                        Install App
                    </p>
                    <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
                        A
                    </p>
                </div>
            </div>

            {/* Navigation tabs for different content sections */}
            <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
                    Podcasts
                </p>
            </div>
        </>
    );
};

export default Navbar;
