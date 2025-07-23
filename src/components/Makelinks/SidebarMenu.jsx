import React from "react";
import { Link } from "react-router-dom";

export default function SidebarMenu({ onMenuSelect }) {
  return (
    <div className="w-full md:w-[360px] max-w-[360px] bg-white shadow-md overflow-hidden max-h-[400px]">
      {/* Optional Breadcrumb */}
      <div className="text-[18px] font-medium text-gray-600 px-6 py-4 border-b border-gray-200">
        <Link to="/" className="text-black hover:underline">Home</Link>
      </div>

      {/* Sidebar Nav Links */}
      <div>
        {/* Page navigation */}
        <Link
          to="/my-earnings"
          className="block px-6 py-4 border-b border-gray-100 text-[16px] text-gray-700 hover:text-black"
        >
          My Earnings
        </Link>
        <Link
          to="/reports"
          className="block px-6 py-4 border-b border-gray-100 text-[16px] text-gray-700 hover:text-black"
        >
          Reports
        </Link>

        {/* In-page content switch */}
        <button
          onClick={() => onMenuSelect("track")}
          className="w-full text-left px-6 py-4 border-b border-gray-100 text-[16px] text-gray-700 hover:text-black"
        >
          Profit Didn't Track?
        </button>
        <button
          onClick={() => onMenuSelect("request")}
          className="w-full text-left px-6 py-4 border-b border-gray-100 text-[16px] text-gray-700 hover:text-black"
        >
          Request
        </button>
        <button
          onClick={() => onMenuSelect("payment")}
          className="w-full text-left px-6 py-4 border-b border-gray-100 text-[16px] text-gray-700 hover:text-black"
        >
          Payment History
        </button>
        <button
          onClick={() => onMenuSelect("settings")}
          className="w-full text-left px-6 py-4 border-b border-gray-100 text-[16px] text-gray-700 hover:text-black"
        >
          Account Settings
        </button>
      </div>
    </div>
  );
}
