import React from "react";
import { Link } from "react-router-dom";

export default function WelcomeBonusCard() {
  return (
    <div className="bg-gray-100 min-h-screen w-full font-sans pb-10">

      {/* Top green gradient bar */}
      <div className="w-full h-14 md:h-18 lg:h-22 bg-gradient-to-b from-green-600 to-green-500"></div>

      {/* Container overlapping top bar */}
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-18 xl:px-22 -mt-8 sm:-mt-10 lg:-mt-16 relative z-10">

        {/* Breadcrumb */}
        {/* Added flex-wrap to allow items to wrap to the next line on small screens */}
        {/* Adjusted text size for readability across devices, removed whitespace-nowrap */}
        <div className="flex flex-wrap text-[0.65rem] sm:text-xs md:text-sm lg:text-base text-white mb-5">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-0.5 sm:mx-1">/</span>
          <Link to="/my-earnings" className="hover:underline font-semibold">My Earnings</Link>
          <span className="mx-0.5 sm:mx-1">/</span>
          {/* Ensure 'Order Details' is not a Link if it's the current page, as per typical breadcrumb UX */}
          <span className="font-semibold">Order Details</span>
        </div>

        {/* Logo card */}
        <div className="flex justify-center">
          <div className="inline-block bg-white px-6 py-2 rounded-lg shadow-md">
            <span className="text-lg font-bold text-gray-800">
              PIX <span className="text-green-600">CLICK</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main bonus card */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mt-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 flex flex-col items-center text-center">

          {/* Bonus icon */}
          <div className="mb-6 sm:mb-8">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="50" fill="#FFD700" />
              <path d="M60 10C32.3858 10 10 32.3858 10 60C10 87.6142 32.3858 110 60 110C87.6142 110 110 87.6142 110 60C110 32.3858 87.6142 10 60 10ZM60 20C82.0914 20 100 37.9086 100 60C100 82.0914 82.0914 100 60 100C37.9086 100 20 82.0914 20 60C20 37.9086 37.9086 20 60 20Z" fill="#FFA500" />
              <path d="M60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0ZM60 10C87.6142 10 110 32.3858 110 60C110 87.6142 87.6142 110 60 110C32.3858 110 10 87.6142 10 60C10 32.3858 32.3858 10 60 10Z" fill="#FFD700" />
              <text x="60" y="68" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#FFFFFF">BONUS</text>
              <circle cx="20" cy="80" r="3" fill="#ADD8E6" />
              <circle cx="100" cy="40" r="3" fill="#ADD8E6" />
              <circle cx="30" cy="30" r="3" fill="#ADD8E6" />
              <circle cx="90" cy="90" r="3" fill="#ADD8E6" />
            </svg>
          </div>

          {/* Heading */}
          <h4 className="text-green-600 font-bold text-xl sm:text-2xl lg:text-3xl mb-2">
            Welcome to PixClick!
          </h4>

          {/* Subtext */}
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-6">
            Here's a <strong className="text-green-700">₹30</strong> bonus to get you started.
          </p>

          {/* Reminder message */}
          <div className="bg-green-100 border border-green-200 text-green-800 text-sm sm:text-base px-4 py-3 rounded-lg mb-6 leading-relaxed">
            Get at least 1 order before <strong>01-Aug-2025</strong> to prevent this bonus from expiring.
          </div>

          {/* Start earning button */}
          <Link to="/make-links">
            <button className="bg-green-600 text-white text-base sm:text-lg px-6 py-2 sm:px-8 sm:py-3 rounded-xl shadow hover:bg-green-700 hover:shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              START EARNING
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}