import React from "react";
import { Link2 } from "lucide-react";

export default function ProfitLinkForm() {
  return (
    <div className="flex-1 flex justify-center px-4 py-6">
      <div className="bg-white shadow p-6 w-full  max-w-[1203px] h-98">
      <h2 className="text-center text-3xl font-bold mb-9">
  Make your own Profit Links in Seconds
</h2>

        <p className="text-center text-sm text-gray-600 mb-7">
          Paste a link from our active partner sites in the box below to make a link & share it.
        </p>

        <div className="flex justify-center mb-4">
          <button className="text-green-600 border border-green-600 px-8 py-4 rounded-full hover:bg-green-50 text-lg">
            SEE PARTNERS & PROFIT RATES
          </button>
        </div>

        <div className="bg-white px-4 py-2 rounded-full shadow-inner max-w-[600px] w-full mx-auto flex items-center gap-3 border border-gray-200 mb-3">
  {/* Green Circle Icon */}
  <div className="bg-green-500 rounded-full w-9 h-9 flex items-center justify-center shadow">
    <Link2 className="text-white w-4 h-4" />
  </div>

  {/* Input Field */}
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
    </div>
  );
}
