import React from "react";
import { Info } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-gray-50 p-4">
      <div className="w-full max-w-2xl">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="text-gray-700">Home</span> /{" "}
          <span className="font-semibold text-black">Reports</span>
        </div>

        {/* Page Title */}
        <h2 className="text-2xl font-bold mb-4">REPORTS</h2>

        {/* Profit Summary */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-1">
            All Time Total Profit <Info className="w-4 h-4 text-gray-400" />
            <span className="ml-2 font-bold text-xl text-black">₹30.0</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-orange-500 font-semibold">
              ⏳ Pending <span className="text-black font-medium">₹30</span>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-semibold">
              ✅ Confirmed <span className="text-black font-medium">₹0</span>
            </div>
            <div className="flex items-center gap-2 text-blue-500 font-semibold">
              💰 Paid <span className="text-black font-medium">₹0</span>
            </div>
            <div className="flex items-center gap-2 text-purple-600 font-semibold">
              📤 Requested <span className="text-black font-medium">₹0</span>
            </div>
            <div className="flex items-center gap-2 text-red-500 font-semibold">
              ❌ Cancelled <span className="text-black font-medium">₹0</span>
            </div>
          </div>

          <div className="text-xs text-blue-600 mt-3 underline cursor-pointer">What’s this?</div>
        </div>

        {/* Performance Breakdown */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-green-700">
              ₹ Performance Breakdown Overview
            </h3>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Filter by</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
            <div className="bg-pink-100 rounded-md p-3">
              <p className="font-semibold text-gray-700">Clicks</p>
              <p className="text-lg text-pink-600 font-bold">0</p>
            </div>
            <div className="bg-green-100 rounded-md p-3">
              <p className="font-semibold text-gray-700">Txns</p>
              <p className="text-lg text-green-600 font-bold">0</p>
            </div>
            <div className="bg-blue-100 rounded-md p-3">
              <p className="font-semibold text-gray-700">Profit</p>
              <p className="text-lg text-blue-600 font-bold">₹0</p>
            </div>
            <div className="bg-purple-100 rounded-md p-3">
              <p className="font-semibold text-gray-700">Conv. Rate <Info className="inline w-4 h-4 ml-1" /></p>
              <p className="text-lg text-purple-600 font-bold">0%</p>
            </div>
          </div>
        </div>

        {/* Performance by All Brands */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-green-700">
              📈 Performance by All Brands
            </h3>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Filter by</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-t">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Brands</th>
                  <th className="px-4 py-2">Clicks ⬍</th>
                  <th className="px-4 py-2">Transactions ⬍</th>
                  <th className="px-4 py-2">Profit ⬍</th>
                  <th className="px-4 py-2">Conv. Rate ⬍</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center text-gray-400">
                  <td colSpan="5" className="px-4 py-4">--</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
