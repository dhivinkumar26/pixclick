import React from 'react';

const timeFilters = [
  'Last 15 Mins', 'Last 30 Mins', 'Last 1 Hour',
  'Last 6 Hours', 'Last 24 Hours', 'Today',
  'Yesterday', 'Last 3 Days', 'Last 7 Days',
  'Last 30 Days', 'Last 3 Months'
];

export default function FlipkartLiveOrderReport() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 flex flex-col">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-600 mb-2">Home / Reports / Flipkart Reports & Insights / <span className="font-semibold text-black">Flipkart Panel Live Order Report</span></p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="bg-white w-full lg:w-[240px] rounded-lg shadow-sm p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Filter by</h3>
          <div>
            <p className="text-sm font-medium mb-2">Time Period</p>
            <ul className="space-y-2">
              {timeFilters.map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="h-3 w-3 rounded-full border border-green-600 bg-white"></span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 space-y-4">
          {/* Heading */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">Flipkart Panel Live Order Report</h2>
            <p className="text-sm text-gray-500 mt-1">Data was last uploaded on 04-08-2025 at 10:58 am</p>
            <p className="text-sm mt-2 text-gray-700">Your Profit will be added to <span className="text-green-600 font-medium">'My Earnings'</span></p>
          </div>

          {/* Summary cards */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white flex-1 p-4 rounded-lg shadow-sm text-center">
              <p className="text-sm text-gray-600">Total Commission <span className="text-gray-400 text-xs ml-1">?</span></p>
              <p className="text-xl font-bold mt-1">₹0</p>
            </div>
            <div className="bg-white flex-1 p-4 rounded-lg shadow-sm text-center">
              <p className="text-sm text-gray-600">Total Orders <span className="text-gray-400 text-xs ml-1">?</span></p>
              <p className="text-xl font-bold mt-1">0</p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="border-b">
                <tr className="text-gray-700">
                  <th className="px-4 py-2 font-semibold text-green-600">Order Date ↕</th>
                  <th className="px-4 py-2 font-semibold">Order ID</th>
                  <th className="px-4 py-2 font-semibold text-green-600">Product Name ↕</th>
                  <th className="px-4 py-2 font-semibold">Category</th>
                  <th className="px-4 py-2 font-semibold">Comm. Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 py-8">
                    There’s nothing to show in the selected time period
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
