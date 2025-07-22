import React from "react";
import {
  FaWallet,
  FaClipboardList,
  FaChartBar,
  FaRupeeSign,
  FaHeadphones,
} from "react-icons/fa";

// Note: Ensure the Tailwind CSS CDN script is loaded in your HTML file:
// <script src="https://cdn.tailwindcss.com"></script>

const MyEarnings = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans w-full mb-10"> {/* Added w-full here */}
      {/* Top green gradient */}
      <div className="w-full bg-gradient-to-b from-green-600 to-green-500 h-16 md:h-20 lg:h-28"></div>

      {/* Main content wrapper - removed max-w-7xl and adjusted padding */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 -mt-12 sm:-mt-16 lg:-mt-20"> {/* More generous and responsive horizontal padding */}
        {/* Breadcrumb */}
        <div className="flex text-sm sm:text-base text-white mb-5 sm:mb-6">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="mx-1">/</span>
          <span className="font-semibold">My Earnings</span>
        </div>

        {/* Total Earnings card */}
        <div className="bg-white rounded-xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-7 mb-7 sm:mb-9">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex items-center mb-2">
              <span className="font-semibold text-gray-800 text-lg sm:text-xl">Total Earnings</span>
              <span className="ml-2 text-gray-400 text-sm cursor-pointer border border-gray-400 rounded-full w-5 h-5 flex items-center justify-center">?</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3">
              <span className="text-4xl sm:text-5xl font-bold text-gray-900">₹30.00</span>
              <button className="text-green-600 text-base sm:text-lg flex items-center font-medium hover:underline">
                Explore <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </div>
            <div className="border-t border-dotted border-gray-300 my-3"></div>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Profit will appear here within 72 hours of order being placed
            </p>
          </div>
          <div className="bg-green-100 rounded-full p-4 sm:p-5 flex-shrink-0">
            <FaWallet className="text-green-600 text-xl sm:text-2xl" />
          </div>
        </div>

        {/* Bottom 4 green cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          {/* Order Details */}
          <div className="bg-gradient-to-b from-green-400 to-green-600 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 cursor-pointer">
            <div className="bg-white rounded-full p-4 mb-4">
              <FaClipboardList className="text-green-600 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Order Details</h3>
            <div className="w-full border-t border-dotted border-green-200 opacity-75 mb-3"></div>
            <p className="text-white text-base flex items-center font-medium">
              View More <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </p>
          </div>

          {/* Reports */}
          <div className="bg-gradient-to-b from-green-400 to-green-600 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 cursor-pointer">
            <div className="bg-white rounded-full p-4 mb-4">
              <FaChartBar className="text-green-600 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Reports</h3>
            <div className="w-full border-t border-dotted border-green-200 opacity-75 mb-3"></div>
            <p className="text-white text-base flex items-center font-medium">
              Know More <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </p>
          </div>

          {/* Request Payment */}
          <div className="bg-gradient-to-b from-green-400 to-green-600 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 cursor-pointer">
            <div className="bg-white rounded-full p-4 mb-4">
              <FaRupeeSign className="text-green-600 text-xl sm:text-2xl" />
            </div>
            <h4 className="text-white font-bold text-xl mb-2">Request Payment</h4>
            <div className="w-full border-t border-dotted border-green-200 opacity-75 mb-3"></div>
            <p className="text-white text-base flex items-center font-medium">
              Get Paid <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </p>
          </div>

          {/* Get Help */}
          <div className="bg-gradient-to-b from-green-400 to-green-600 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 cursor-pointer">
            <div className="bg-white rounded-full p-4 mb-4">
              <FaHeadphones className="text-green-600 text-xl sm:text-2xl" />
            </div>
            <h4 className="text-white font-bold text-xl mb-2">Get Help</h4>
            <div className="w-full border-t border-dotted border-green-200 opacity-75 mb-3"></div>
            <p className="text-white text-base flex items-center font-medium">
              Learn More <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEarnings;