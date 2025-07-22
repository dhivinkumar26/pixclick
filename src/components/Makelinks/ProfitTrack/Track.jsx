import React from "react";

export default function MissingProfit() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">MISSING PROFIT?</h2>

      <div className="flex justify-between items-start mb-6">
        <div className="bg-gray-200 p-4 rounded-md text-[16px] leading-relaxed max-w-3xl">
          <p className="font-semibold">
            If you got an order via EarnKaro, and did not get Profit, don't
            worry! Just raise a Missing Profit Ticket and our team will
            escalate it to the retailer.
          </p>
          <p className="mt-3 font-semibold">
            Please note that the retailers accept Missing Profit claims only
            within 10 days from the date of transaction.
          </p>
        </div>

        <button className="border border-green-600 text-green-600 font-bold px-6 py-2 rounded-md hover:bg-green-50">
          ADD TICKET
        </button>
      </div>

      <div className="text-center text-gray-600 mt-10">
        There are no missing profit tickets submitted.
      </div>
    </div>
  );
}
