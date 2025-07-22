import React from "react";
import { Link2 } from "lucide-react";

export default function ProfitLinkForm() {
  return (
    <div className="bg-white shadow p-6 mb-6 rounded-xl">
      <h2 className="text-center text-xl font-semibold mb-2">
        Make your own Profit Links in Seconds
      </h2>
      <p className="text-center text-sm mb-4 text-gray-600">
        Paste a link from our active partner sites in the box below to make a link & share it.
      </p>

      <div className="flex justify-center mb-4">
        <button className="text-green-600 border border-green-600 px-6 py-2 rounded-full hover:bg-green-50 text-sm">
          SEE PARTNERS & PROFIT RATES
        </button>
      </div>

      {/* Slightly longer but still neat search box */}
      <div className="flex items-center border border-gray-300 rounded-full px-5 py-2.5 mb-5 bg-gray-50 shadow-sm max-w-lg mx-auto w-full">
        <Link2 className="text-green-600 mr-3 w-4 h-4" />
        <input
          type="text"
          placeholder="Paste homepage or product link here"
          className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
        />
      </div>

      <div className="text-center">
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 text-sm">
          MAKE PROFIT LINK
        </button>
      </div>
    </div>
  );
}
