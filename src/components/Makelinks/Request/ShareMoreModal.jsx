import React from "react";
import { X } from "lucide-react";

export default function ShareMoreModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-xl shadow-lg w-[90%] max-w-md p-8 pt-10 text-center overflow-hidden">

        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/8213/8213204.png"
          alt="Share"
          className="w-20 mx-auto mb-6"
        />

        {/* Heading */}
        <h2 className="text-xl font-semibold mb-3">Share More to Earn More</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 px-2">
          You need a minimum of ₹10 Confirmed Profit to transfer your earnings
          to your bank account. All you need to do is share Crazy Deals via EarnKaro!
        </p>

        {/* CTA Button */}
        <button
          onClick={onClose}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md"
        >
          SHARE BEST DEALS
        </button>

        {/* Wavy Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="w-full h-14">
            <path
              d="M0,30 C150,100 350,0 500,30 L500,100 L0,100 Z"
              fill="#EEF2FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
