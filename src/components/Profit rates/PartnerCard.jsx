import React from "react";

const PartnerCard = ({ logo, profit }) => (
  <div className="bg-white rounded shadow hover:shadow-md p-4 flex flex-col items-center">
    <img src={logo} alt="partner logo" className="h-12 mb-4 object-contain" />
    <p className="text-gray-800 font-semibold">{profit}</p>
    <button className="mt-2 text-green-600 text-sm">VIEW PROFIT RATES</button>
  </div>
);

export default PartnerCard;
