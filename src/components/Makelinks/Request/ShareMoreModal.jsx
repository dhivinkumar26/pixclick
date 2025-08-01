import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ShareMoreModal() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // go back one step in history
  };

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-40 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-md rounded-lg overflow-hidden shadow-lg text-center">
        
        {/* ❌ Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="px-4 pt-8 pb-20 sm:px-6 sm:pb-16">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8213/8213204.png"
            alt="Share"
            className="w-20 sm:w-24 mx-auto mb-4"
          />
          <h2 className="text-base sm:text-xl font-semibold mb-2">
            Share More to Earn More
          </h2>
          <p className="text-sm text-gray-600 mb-6 px-1 sm:px-4">
            You need a minimum of ₹10 Confirmed Profit to transfer your earnings to your bank account.
            All you need to do is share Crazy Deals via <b>EarnKaro!</b>
          </p>
          
          <button
            onClick={handleClose}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md"
          >
            SHARE BEST DEALS
          </button>
        </div>

        {/* Wavy Bottom SVG */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="w-full h-12 sm:h-14">
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
