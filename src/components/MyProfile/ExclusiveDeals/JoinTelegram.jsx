import React from 'react';
import ProfileBG from '../../../assets/JoinTele/EKTeleImg.jpg';
import TeleBGImg from '../../../assets/JoinTele/TeleBGpattern.svg';
import { FaTelegram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const JoinTelegram = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start"
      style={{
        backgroundImage: `url(${TeleBGImg}), linear-gradient(to top left, rgba(34,193,195,0.5), rgba(253,187,45,0.5))`,
      }}
    >
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 shadow-md">
        <div className="flex items-center gap-2 text-blue-600 text-xl sm:text-2xl font-semibold">
          <FaTelegram />
          <span className="text-black text-base sm:text-xl">Telegram</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-1 sm:py-2 rounded-md text-sm sm:text-base">
          Download
        </button>
      </div>

      {/* Card Section */}
      <div className="bg-white w-[90%] max-w-xl rounded-lg shadow-lg mt-8 p-5 sm:p-8 flex flex-col items-center">
        {/* Profile Image */}
        <img
          src={ProfileBG}
          alt="EarnKaro Channel"
          className="rounded-full w-28 h-28 sm:w-36 sm:h-36 object-cover mb-4"
        />

        {/* Title & Subscribers */}
        <div className="text-center">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800">EarnKaro (Loot Deals & Offers)</h2>
          <p className="text-sm sm:text-base text-gray-500 mt-1">43,240 subscribers</p>
        </div>

        {/* Description */}
        <div className="text-xs sm:text-sm text-gray-700 text-center mt-4 space-y-1">
          <p>• EarnKaro Official Telegram Channel</p>
          <p>• Find best loot deals, coupons, offers, and discounts</p>
          <p>• Convert deals in your EarnKaro links and share with friends to earn money...</p>
        </div>

        {/* View Button */}
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm sm:text-base font-semibold">
          View in Telegram
        </button>

        {/* Preview Link */}
        <Link to="#" className="mt-4 text-gray-400 text-xs sm:text-sm hover:underline">
          Preview Channel
        </Link>
      </div>
    </div>
  );
};

export default JoinTelegram;
