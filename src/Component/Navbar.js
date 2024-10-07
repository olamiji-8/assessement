import React from 'react';
import Logo from "../Assets/Images/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCoins, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#121212]">
      
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-24 mr-4" />
      </div>

      {/* Middle Section: Search Bar */}
      <div className="relative flex-grow max-w-lg mx-4">
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search tournament, player name or player tag"
          className="pl-10 pr-4 py-2 w-full bg-[#121212] border border-gray-700 text-white placeholder-[#7E7F7F] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Section: Notifications, Balance, User Info */}
      <div className="flex items-center space-x-6 text-white">
        {/* Notification Icon */}
        <FontAwesomeIcon icon={faBell} className="text-gray-400 cursor-pointer" />

        {/* Coin Balance */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faCoins} className="text-yellow-500" />
          <span>20,0000</span>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faUser} className="text-gray-400" />
          <div className="flex flex-col items-start">
            <span>Akinola Olalekan</span>
            <div className="flex items-center space-x-1">
              <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs">Online</span>
              <FontAwesomeIcon icon={faUser} className="text-gray-400 text-xs" /> {/* Dropdown Arrow */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
