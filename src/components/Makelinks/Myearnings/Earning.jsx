import React from "react";
import { FaWallet, FaClipboardList, FaChartBar, FaRupeeSign, FaHeadphones } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyEarnings = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Breadcrumbs */}
      <div className="flex space-x-2 text-gray-600 mb-4">
        <Link to="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="font-semibold">My Earnings</span>
      </div>

      {/* Top earnings card */}
      <div className="bg-white rounded-lg shadow flex items-center justify-between p-6 mb-6">
        <div>
          <div className="flex items-center mb-2">
            <span className="font-semibold text-gray-800">Total Earnings</span>
            <span className="ml-2 text-gray-400 text-sm cursor-pointer">?</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-semibold">₹30.00</span>
            <button className="text-green-600 flex items-center text-sm">
              Explore <span className="ml-1">➔</span>
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Profit will appear here within 72 hours of order being placed
          </p>
        </div>
        <div className="bg-white rounded-full shadow p-3">
          <FaWallet className="text-red-500 text-xl" />
        </div>
      </div>

      {/* Bottom four green cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-b from-green-400 to-green-600 text-white rounded-lg shadow p-4 flex flex-col">
          <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 mb-3 mx-auto">
            <FaClipboardList className="text-red-500" />
          </div>
          <h3 className="text-center font-semibold mb-1">Order Details</h3>
          <button className="text-sm text-white flex justify-center items-center">
            View More <span className="ml-1">➔</span>
          </button>
        </div>

        <div className="bg-gradient-to-b from-green-400 to-green-600 text-white rounded-lg shadow p-4 flex flex-col">
          <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 mb-3 mx-auto">
            <FaChartBar className="text-red-500" />
          </div>
          <h3 className="text-center font-semibold mb-1">Reports</h3>
          <button className="text-sm text-white flex justify-center items-center">
            Know More <span className="ml-1">➔</span>
          </button>
        </div>

        <div className="bg-gradient-to-b from-green-400 to-green-600 text-white rounded-lg shadow p-4 flex flex-col">
          <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 mb-3 mx-auto">
            <FaRupeeSign className="text-red-500" />
          </div>
          <h3 className="text-center font-semibold mb-1">Request Payment</h3>
          <button className="text-sm text-white flex justify-center items-center">
            Get Paid <span className="ml-1">➔</span>
          </button>
        </div>

        <div className="bg-gradient-to-b from-green-400 to-green-600 text-white rounded-lg shadow p-4 flex flex-col">
          <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 mb-3 mx-auto">
            <FaHeadphones className="text-red-500" />
          </div>
          <h3 className="text-center font-semibold mb-1">Get Help</h3>
          <button className="text-sm text-white flex justify-center items-center">
            Learn More <span className="ml-1">➔</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEarnings;
