import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaWallet,
  FaClipboardList,
  FaChartBar,
  FaRupeeSign,
  FaHeadphones,
} from "react-icons/fa";

const MyEarnings = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen font-sans w-full mb-10">
      {/* Top green gradient */}
      <div className="w-full bg-gradient-to-b from-green-600 to-green-500 h-16 md:h-20 lg:h-28"></div>

      {/* Main content */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 -mt-12 sm:-mt-16 lg:-mt-20">
        {/* Breadcrumb */}
       

<div className="flex text-sm sm:text-base text-white mb-5 sm:mb-6">
  <Link to="/" className="hover:underline cursor-pointer">
    Home
  </Link>
  <span className="mx-1">/</span>
  <Link to="/my-earnings" className="font-semibold">My Earnings</Link>
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
              
              <Link
  to="/total_earn"
  className="text-green-600 text-base sm:text-lg flex items-center font-medium hover:underline"
>
  Explore <span className="ml-2">→</span>
</Link>
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

        {/* Bottom cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          <div className="bg-gradient-to-b from-green-400 to-green-600 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 cursor-pointer transition-transform">
            <div className="bg-white rounded-full p-4 mb-4">
              <FaClipboardList className="text-green-600 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Order Details</h3>
            <div className="w-full border-t border-dotted border-green-200 opacity-75 mb-3"></div>
           <Link to="/order"> <p className="text-white text-base flex items-center font-medium">View More <span className="ml-2">→</span></p></Link>
          </div>

          <div className="bg-gradient-to-b from-green-400 to-green-600 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 cursor-pointer transition-transform">
            <div className="bg-white rounded-full p-4 mb-4">
              <FaChartBar className="text-green-600 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Reports</h3>
            <div className="w-full border-t border-dotted border-green-200 opacity-75 mb-3"></div>
            <Link to="/reports"><p className="text-white text-base flex items-center font-medium">Know More <span className="ml-2">→</span></p></Link>
          </div>

          {/* Request Payment - show modal on click */}
          <div
            className="bg-gradient-to-b from-green-400 to-green-600 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 cursor-pointer transition-transform"
            onClick={() => setShowModal(true)}
          >
            <div className="bg-white rounded-full p-4 mb-4">
              <FaRupeeSign className="text-green-600 text-xl sm:text-2xl" />
            </div>
            <h4 className="text-white font-bold text-xl mb-2">Request Payment</h4>
            <div className="w-full border-t border-dotted border-green-200 opacity-75 mb-3"></div>
            <p className="text-white text-base flex items-center font-medium">Get Paid <span className="ml-2">→</span></p>
          </div>

          <div className="bg-gradient-to-b from-green-400 to-green-600 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 cursor-pointer transition-transform">
            <div className="bg-white rounded-full p-4 mb-4">
              <FaHeadphones className="text-green-600 text-xl sm:text-2xl" />
            </div>
            <h4 className="text-white font-bold text-xl mb-2">Get Help</h4>
            <div className="w-full border-t border-dotted border-green-200 opacity-75 mb-3"></div>
           <Link to="/profitshala"> <p className="text-white text-base flex items-center font-medium">Learn More <span className="ml-2">→</span></p></Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-40"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 text-center relative">
              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              {/* Image */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6me1VaJZ_7ZjROfC1VJKylwzwFx4FFcxrA&s" // replace this with real path
                alt="Share More"
                className="mx-auto mb-4 w-24"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Share More to Earn More</h3>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                You need a minimum of ₹10 Confirmed Profit to transfer your earnings to your bank account.
                All you need to do is share Crazy Deals via EarnKaro!
              </p>
              <Link to="/make-links">
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                onClick={() => setShowModal(false)}
              >
                SHARE BEST DEALS
              </button></Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyEarnings;
