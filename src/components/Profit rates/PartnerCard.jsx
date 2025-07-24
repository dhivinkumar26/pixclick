import React from "react";

const PartnerCard = ({ logo, profit, name, onView }) => (
  <div className="bg-white rounded shadow hover:shadow-md p-4 flex flex-col items-center">
    <img src={logo} alt={name} className="h-12 mb-2 object-contain" />
    <p className="text-gray-800 font-semibold text-center">{profit}</p>
    <button
      onClick={onView}
      className="mt-2 text-green-600 text-sm hover:underline"
    >
      VIEW PROFIT RATES
    </button>
  </div>
);

export default PartnerCard;
