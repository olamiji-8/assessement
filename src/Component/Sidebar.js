import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faTrophy, faCoins, faCamera, faLock, faUsers } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#121212] w-64 h-screen text-white relative">
      {/* Line on the left using placeholder color */}
      <div className="absolute left-0 top-0 w-1 h-full bg-[#7E7F7F]"></div>

      {/* Sidebar Items */}
      <div className="flex flex-col mt-10 space-y-6">
        
        {/* Tournaments */}
        <div className="flex items-center space-x-4 px-6 py-3 bg-gray-800 rounded-lg">
          <FontAwesomeIcon icon={faGamepad} className="text-white" />
          <span>Tournaments</span>
        </div>

        {/* Leaderboards */}
        <div className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-700 cursor-pointer">
          <FontAwesomeIcon icon={faTrophy} className="text-gray-400" />
          <span>Leaderboards</span>
        </div>

        {/* Token Shop */}
        <div className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-700 cursor-pointer">
          <FontAwesomeIcon icon={faCoins} className="text-gray-400" />
          <span>Token Shop</span>
        </div>

        {/* Live Betting */}
        <div className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-700 cursor-pointer">
          <FontAwesomeIcon icon={faCamera} className="text-gray-400" />
          <span>Live Betting</span>
        </div>

        {/* Content Locker */}
        <div className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-700 cursor-pointer">
          <FontAwesomeIcon icon={faLock} className="text-gray-400" />
          <span>Content Locker</span>
        </div>

        {/* Community */}
        <div className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-700 cursor-pointer">
          <FontAwesomeIcon icon={faUsers} className="text-gray-400" />
          <span>Community</span>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
