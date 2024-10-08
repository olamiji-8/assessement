import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faTrophy, faCoins, faCamera, faLock, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#121212] w-64 h-screen text-white relative">
      {/* Line on the left using placeholder color */}
      <div className="absolute left-0 top-0 w-1 h-full bg-[#7E7F7F]"></div>

      {/* Sidebar Items */}
      <div className="flex flex-col mt-10 space-y-6 flex-grow">
        
        {/* Tournaments */}
        <div className="flex items-center space-x-4 px-6 py-3 bg-gray-800 rounded-lg">
          <FontAwesomeIcon icon={faGamepad} className="text-white" />
          <span>Tournaments</span>
        </div>

        {/* Other Items */}
        <div className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-700 cursor-pointer">
          <FontAwesomeIcon icon={faTrophy} className="text-gray-400" />
          <span>Leaderboards</span>
        </div>
        <div className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-700 cursor-pointer">
          <FontAwesomeIcon icon={faCoins} className="text-gray-400" />
          <span>Token Shop</span>
        </div>
        <div className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-700 cursor-pointer">
          <FontAwesomeIcon icon={faCamera} className="text-gray-400" />
          <span>Live Betting</span>
        </div>
        <div className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-700 cursor-pointer">
          <FontAwesomeIcon icon={faLock} className="text-gray-400" />
          <span>Content Locker</span>
        </div>
        <div className="flex items-center space-x-4 px-6 py-3 hover:bg-gray-700 cursor-pointer">
          <FontAwesomeIcon icon={faUsers} className="text-gray-400" />
          <span>Community</span>
        </div>

      </div>

      {/* Log Out Button at the Bottom */}
      <div className="flex items-center justify-center py-4 bg-[#8B0000] hover:bg-[#A52A2A] cursor-pointer">
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-white" />
        <span className="text-white text-lg">LOG - OUT</span>
      </div>
    </div>
  );
};

export default Sidebar;
