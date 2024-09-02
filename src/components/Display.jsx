import React, { useRef, useEffect } from 'react';
import DisplayHome from './DisplayHome';
import { Routes, Route } from 'react-router-dom';
import DisplayAlbum from './DisplayAlbum';
import { useLocation } from 'react-router-dom';
import { albumsData } from '../assets/assets';

const Display = () => {
    const displayRef = useRef(); // Reference to the display div
    const location = useLocation(); // Get the current route location
    const isAlbum = location.pathname.includes('album'); // Check if the route contains 'album'
    const albumId = isAlbum ? location.pathname.slice(-1) : ""; // Extract album ID from the route if it's an album
    const bgColor = albumsData[Number(albumId)].bgColor; // Get the background color for the album

    useEffect(() => {
        if (isAlbum) {
            // Set background gradient for album pages
            displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
        } else {
            // Set a solid background for non-album pages
            displayRef.current.style.background = `#121212`;
        }
    }, [isAlbum, bgColor]); // Re-run effect when isAlbum or bgColor changes

    return (
        <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            {/* Main display area that changes content based on the route */}
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<DisplayAlbum />} />
            </Routes>
        </div>
    );
};

export default Display;
