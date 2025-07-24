import React from 'react';

const MissingProfit = () => {
  return (
    <div className="max-w-6xl mx-auto mt-6 md:mt-10 bg-white shadow-xl rounded-2xl p-4 md:p-8 border border-gray-200 mb-3">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">MISSING PROFIT?</h2>

      <div className="bg-gray-200 p-4 md:p-6 rounded-md text-sm md:text-[16px] text-gray-800">
        <p className="font-semibold mb-2">
          If you got an order via EarnKaro, and did not get Profit, don't worry! Just raise a Missing Profit Ticket and our team will escalate it to the retailer.
        </p>
        <p className="font-semibold">
          Please note that the retailers accept Missing Profit claims only within 10 days from the date of transaction.
        </p>
      </div>

      {/* Stack on mobile, side by side on desktop */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-6 md:mt-10">
        <div className="text-center md:text-left text-gray-600 text-sm md:text-[16px]">
          There are no missing profit tickets submitted.
        </div>

        <button className="text-green-600 border border-green-600 font-semibold px-4 py-2 text-sm md:text-base rounded hover:bg-green-50 w-full md:w-auto">
          ADD TICKET
        </button>
      </div>
    </div>
  );
};

export default MissingProfit;
