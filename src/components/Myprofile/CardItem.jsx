// components/CardItem.js
import React from 'react';

function CardItem({ icon, text }) {
  return (
    <div className="flex items-center justify-between p-3 bg-[#f6f6f6] rounded-md hover:bg-gray-50 cursor-pointer transition-colors duration-200">
      <div className="flex items-center">
        {/* The icon slot, using flex to center content horizontally and vertically */}
        <span className="mr-3 flex items-center justify-center text-xl text-green-600">
            {icon}
        </span>
        <p className="text-gray-700">{text}</p>
      </div>
      {/* Right arrow SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

export default CardItem;