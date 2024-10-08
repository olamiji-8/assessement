import React from 'react';
import Navbar from '../Component/Navbar';
import Sidebar from '../Component/Sidebar';

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-grow bg-[#121212] text-white">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="p-8">
          
          {/* Top Section: Profile, Continue Playing, Quick Match */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Setup Profile Card */}
            <div className="bg-[#1C1C1C] p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Setup your profile</h3>
              <p className="text-sm mb-4">Complete your information to get access to tournaments and other premium features</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Complete profile</button>
            </div>

            {/* Continue Playing Card */}
            <div className="bg-[#1C1C1C] p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Continue playing</h3>
              <p className="text-sm mb-4">Start or resume tournaments you have registered for</p>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">Continue playing</button>
            </div>

            {/* Quick Match Card */}
            <div className="bg-[#1C1C1C] p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Quick match</h3>
              <p className="text-sm mb-4">Create a tournament and invite friends to play</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Let's go</button>
            </div>
          </div>

          {/* Tournaments Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Tournaments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tournament Card */}
              <div className="bg-[#1C1C1C] p-4 rounded-lg">
                <img src="tournament-image.jpg" alt="Tournament" className="rounded-lg mb-4" />
                <h3 className="text-lg font-bold">Call of Duty</h3>
                <p className="text-sm mb-2">10 Feb 2023 · Free-to-play · 4v4</p>
                <p className="text-sm mb-4">Prizes: ₦10,000</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Join tournament</button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2">View details</button>
              </div>

              {/* Duplicate the above card for other tournaments */}
              {/* Add more tournament cards here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
