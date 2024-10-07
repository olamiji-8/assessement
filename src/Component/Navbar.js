import React from 'react';
import Logo from "../Assets/Images/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#121212]">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-24 mr-4" /> {/* Adjust logo size and margin */}
      </div>

      {/* Search Bar Section */}
      <div className="relative flex items-center">
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search tournament, player name or player tag"
          className="pl-10 pr-4 py-2 w-80 bg-[#121212] border border-gray-700 text-white placeholder-[#7E7F7F] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Navbar;
