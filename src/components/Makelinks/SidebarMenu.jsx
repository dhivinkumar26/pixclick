import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarMenu() {
  const location = useLocation();

  const linkClasses = (path) =>
    `block px-4 md:px-6 py-3 md:py-4 border-b border-gray-100 text-sm md:text-base ${
      location.pathname === path
        ? "text-black font-semibold"
        : "text-gray-700"
    } hover:text-black`;

  return (
    <div className="w-full md:w-[360px] max-w-full md:max-w-[360px] bg-white shadow-md overflow-y-auto max-h-[calc(100vh-100px)] md:max-h-[400px]">
      {/* Breadcrumb */}
      <div className="text-base md:text-lg font-medium text-gray-600 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
        <Link to="/" className="text-black hover:underline">
          Home
        </Link>
      </div>

      {/* Navigation Links */}
      <div>
        <Link to="/my-earnings" className={linkClasses("/my-earnings")}>
          My Earnings
        </Link>
        <Link to="/reports" className={linkClasses("/reports")}>
          Reports
        </Link>
        <Link to="/track" className={linkClasses("/track")}>
          Profit Didn't Track?
        </Link>
        <Link to="/request" className={linkClasses("/request")}>
          Request
        </Link>
        <Link to="/payment" className={linkClasses("/payment")}>
          Payment History
        </Link>
        <Link to="/settings" className={linkClasses("/settings")}>
          Account Settings
        </Link>
      </div>
    </div>
  );
}
