import React, { useState } from "react";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";
 
export default function ReportsPage() {
  const [showModal, setShowModal] = useState(false); // State for modal
 
  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-gray-50 p-4 sm:p-8 lg:p-20">
      <div className="w-full">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4 px-2">
          <Link to="/" className="text-gray-700 hover:underline">Home</Link> /{" "}
          <span className="font-semibold text-black">Reports</span>
        </div>
 
        {/* Page Title */}
        <h2 className="text-3xl font-bold mb-4 shadow bg-white rounded-lg p-3 sm:p-4">
          REPORTS
        </h2>
 
        {/* Profit Summary Card */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-1 text-gray-800">
            All Time Total Profit <Info className="w-4 h-4 text-gray-400" />
            <span className="ml-2 font-bold text-4xl text-black">₹30.0</span>
          </h3>
 
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-md">
            <div className="flex items-center gap-2 text-orange-500 font-bold p-4 border border-gray-300 rounded-md">
              <span className="bg-orange-200 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">⏳</span>
              Pending ₹30
            </div>
            <div className="flex items-center gap-2 text-green-600 font-bold p-4 border border-gray-300 rounded-md">
              <span className="bg-green-200 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✅</span>
              Confirmed ₹0
            </div>
            <div className="flex items-center gap-2 text-blue-500 font-bold p-4 border border-gray-300 rounded-md">
              <span className="bg-blue-200 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">💰</span>
              Paid ₹0
            </div>
            <div className="flex items-center gap-2 text-purple-600 font-bold p-4 border border-gray-300 rounded-md">
              <span className="bg-purple-200 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">📤</span>
              Requested ₹0
            </div>
            <div className="flex items-center gap-2 text-red-500 font-bold p-4 border border-gray-300 rounded-md">
              <span className="bg-red-200 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">❌</span>
              Cancelled ₹0
            </div>
          </div>
 
          <div
            className="text-semibold text-blue-800 mt-3 underline cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            What’s this?
          </div>
        </div>
 
        {/* Performance Breakdown */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-green-700">
              <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">₹</span>
              Performance Breakdown Overview
            </h3>
            <select className="border rounded px-4 py-2 text-sm text-gray-400 min-w-[150px]">
              <option>Filter by</option>
            </select>
          </div>
 
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-md">
            <div className="bg-pink-100 rounded-md p-4">
              <p className="font-bold text-gray-700">Clicks</p>
              <p className="text-lg text-pink-600 font-bold">0</p>
            </div>
            <div className="bg-green-100 rounded-md p-4">
              <p className="font-bold text-gray-700">Txns</p>
              <p className="text-lg text-green-600 font-bold">0</p>
            </div>
            <div className="bg-blue-100 rounded-md p-4">
              <p className="font-bold text-gray-700">Profit</p>
              <p className="text-lg text-blue-600 font-bold">₹0</p>
            </div>
            <div className="bg-purple-100 rounded-md p-4">
              <p className="font-bold text-gray-700 flex items-center justify-center">
                Conv. Rate <Info className="w-4 h-4 ml-1" />
              </p>
              <p className="text-lg text-purple-600 font-bold">0%</p>
            </div>
          </div>
        </div>
 
        {/* Performance by Brands Table */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-green-700">
              <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">📈</span>
              Performance by All Brands
            </h3>
            <select className="border rounded px-4 py-2 text-sm text-gray-400 min-w-[150px]">
              <option>Filter by</option>
            </select>
          </div>
 
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-t">
              <thead className="bg-gray-50 text-gray-600">
                <tr className="border-b">
                  <th className="px-6 py-4">Brands</th>
                  <th className="px-6 py-4">Clicks ⬍</th>
                  <th className="px-6 py-4">Transactions ⬍</th>
                  <th className="px-6 py-4">Profit ⬍</th>
                  <th className="px-6 py-4">Conv. Rate ⬍</th>
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
 
      {/* Modal */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-40"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              <h3 className="text-lg font-bold mb-4">What’s this?</h3>
              <p className="mb-4">
                This modal explains what the "What’s this?" means. You can customize this content.
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}