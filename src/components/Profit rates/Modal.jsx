import React from "react";

export default function Modal({ partner, onClose }) {
  if (!partner) return null;

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded max-w-md w-full p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img src={partner.logo} alt={partner.name} className="h-12 mb-2" />
          <h2 className="font-bold text-xl mb-4">{partner.name}</h2>
          <div className="flex gap-4 mb-4">
            <div className="text-center">
              <div className="text-orange-500">Share</div>
              <div className="font-semibold">Today</div>
            </div>
            <div className="text-center">
              <div className="text-orange-500">Get</div>
              <div className="font-semibold">Orders</div>
            </div>
            <div className="text-center">
              <div className="text-orange-500">Profit Tracks In</div>
              <div className="font-semibold">72 Hours</div>
            </div>
          </div>
          <div className="w-full flex justify-between border-b mb-2">
            <span className="font-bold">PROFIT RATES</span>
            <span className="font-bold">OFFER DETAILS</span>
          </div>
          <div className="text-green-600 font-bold text-lg mb-1">
            {partner.profit}
          </div>
          <div className="text-gray-600 text-sm">
            Profit on Credit Card Activation
          </div>
        </div>
      </div>
    </div>
  );
}
