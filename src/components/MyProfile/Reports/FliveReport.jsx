import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const timeFilters = [
  'Last 15 Mins', 'Last 30 Mins', 'Last 1 Hour',
  'Last 6 Hours', 'Last 24 Hours', 'Today',
  'Yesterday', 'Last 3 Days', 'Last 7 Days',
  'Last 30 Days', 'Last 3 Months'
];

export default function FlipkartLiveOrderReport() {
  const [selectedTime, setSelectedTime] = useState('Last 15 Mins');
  const navigate = useNavigate();

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    // You can fetch/filter data here based on `time`
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 md:px-12 py-6 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* Breadcrumb */}
        <div className="px-4 py-6">
      <div className="text-sm text-gray-600 mb-4 space-x-1">
        <span
          onClick={() => handleNavigate('/')}
          className="cursor-pointer hover:underline"
        >
          Home
        </span>
        <span>/</span>
        <span
          onClick={() => handleNavigate('/reports')}
          className="cursor-pointer hover:underline"
        >
          Reports
        </span>
        <span>/</span>
        <span
          onClick={() => handleNavigate('/reports/flipkart')}
          className="cursor-pointer hover:underline"
        >
          Flipkart Reports & Insights
        </span>
        <span>/</span>
        <span className="font-semibold text-black">
          Flipkart Panel Live Order Report
        </span>
      </div>

      {/* Your rest of the Live Order content here */}
    </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="bg-white w-full lg:w-[260px] rounded-lg shadow-sm p-5">
            <h3 className="font-semibold text-lg text-gray-800 mb-5">Filter by</h3>
            <div>
              <p className="text-base font-medium mb-3">Time Period</p>
              <ul className="space-y-3">
                {timeFilters.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => handleTimeClick(item)}
                    className={`flex items-center space-x-3 cursor-pointer px-2 py-1 rounded-md ${
                      selectedTime === item ? 'bg-green-100' : 'hover:bg-gray-100'
                    }`}
                  >
                    <span
                      className={`h-3 w-3 rounded-full border ${
                        selectedTime === item ? 'bg-green-600 border-green-600' : 'border-green-600 bg-white'
                      }`}
                    ></span>
                    <span
                      className={`text-base ${
                        selectedTime === item ? 'text-green-700 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 space-y-6">
            {/* Heading */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800">Flipkart Panel Live Order Report</h2>
              <p className="text-sm text-gray-500 mt-1">Data was last uploaded on 04-08-2025 at 10:58 am</p>
              <p className="text-base mt-3 text-gray-700">
                Showing data for: <span className="text-green-600 font-semibold">{selectedTime}</span>
              </p>
              <p className="text-base mt-1 text-gray-700">
                Your Profit will be added to <span className="text-green-600 font-medium">'My Earnings'</span>
              </p>
            </div>

            {/* Summary cards */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white flex-1 min-w-[160px] p-6 rounded-lg shadow-sm text-center">
                <p className="text-base text-gray-600">
                  Total Commission <span className="text-gray-400 text-sm ml-1">?</span>
                </p>
                <p className="text-2xl font-bold mt-2">₹0</p>
              </div>
              <div className="bg-white flex-1 min-w-[160px] p-6 rounded-lg shadow-sm text-center">
                <p className="text-base text-gray-600">
                  Total Orders <span className="text-gray-400 text-sm ml-1">?</span>
                </p>
                <p className="text-2xl font-bold mt-2">0</p>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="border-b">
                  <tr className="text-gray-700">
                    <th className="px-4 py-3 font-semibold text-green-600">Order Date ↕</th>
                    <th className="px-4 py-3 font-semibold">Order ID</th>
                    <th className="px-4 py-3 font-semibold text-green-600">Product Name ↕</th>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Comm. Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5} className="text-center text-gray-500 py-10 text-base">
                      There’s nothing to show for <span className="font-medium">{selectedTime}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
