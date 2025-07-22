import React from "react";
import { Link } from "react-router-dom";

export default function PaymentHistory() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 p-6">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <hr className="mb-8" />

        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10404/10404690.png"
            alt="Empty State"
            className="w-24 h-24 mb-4"
          />
          <p className="text-lg font-semibold mb-1">
            Hey, you have not requested any payment yet
          </p>
          <p className="text-gray-600 mb-6">
            More transactions, more Profit, more withdrawals!
          </p>

          <Link
            to="/make-links"
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
          >
            Make Link Now
          </Link>
        </div>
      </div>
    </div>
  );
}
