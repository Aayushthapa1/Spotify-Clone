import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ image, name, desc, id }) => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    return (
        <div
            onClick={() => navigate(`/album/${id}`)} // Navigate to the album details page when clicked
            className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]' // Styling for the album item
        >
            <img className='rounded' src={image} alt="" /> {/* Display album image */}
            <p className='font-bold mt-2 mb-1'>{name}</p> {/* Display album name */}
            <p className='text-slate-200 text-sm'>{desc}</p> {/* Display album description */}
        </div>
    );
};

export default AlbumItem;
