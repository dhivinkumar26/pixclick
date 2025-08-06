import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const timeFilters = [
  'Last 15 Mins', 'Last 30 Mins', 'Last 1 Hour',
  'Last 6 Hours', 'Last 24 Hours', 'Today',
  'Yesterday', 'Last 3 Days', 'Last 7 Days',
  'Last 30 Days', 'Last 3 Months'
];

// Static simulated upload times for demo
const uploadTimes = {
  'Last 15 Mins': '06-08-2025 at 08:30 pm',
  'Last 30 Mins': '06-08-2025 at 08:22 pm',
  'Last 1 Hour': '06-08-2025 at 08:00 pm',
  'Last 6 Hours': '06-08-2025 at 04:00 pm',
  'Last 24 Hours': '05-08-2025 at 08:30 pm',
  'Today': '06-08-2025 at 07:15 pm',
  'Yesterday': '05-08-2025 at 09:55 pm',
  'Last 3 Days': '04-08-2025 at 10:58 am',
  'Last 7 Days': '01-08-2025 at 11:42 am',
  'Last 30 Days': '08-07-2025 at 03:30 pm',
  'Last 3 Months': '06-06-2025 at 12:15 pm'
};

export default function FlipkartLiveOrderReport() {
  const [selectedTime, setSelectedTime] = useState('Last 15 Mins');
  const [lastUploaded, setLastUploaded] = useState(uploadTimes['Last 15 Mins']);
  const navigate = useNavigate();

  useEffect(() => {
    setLastUploaded(uploadTimes[selectedTime]);
  }, [selectedTime]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 md:px-12 py-6 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* Breadcrumb */}
        <div className="px-4 py-6">
          <div className="text-sm text-gray-600 mb-4 space-x-1">
            <span onClick={() => handleNavigate('/')} className="cursor-pointer hover:underline">Home</span>
            <span>/</span>
            <span onClick={() => handleNavigate('/reports')} className="cursor-pointer hover:underline">Reports</span>
            <span>/</span>
            <span onClick={() => handleNavigate('/reports/flipkart')} className="cursor-pointer hover:underline">Flipkart Reports & Insights</span>
            <span>/</span>
            <span className="font-semibold text-black">Flipkart Panel Live Order Report</span>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="bg-white w-full lg:w-[260px] rounded-lg shadow-sm p-5">
            <h3 className="font-semibold text-lg text-gray-800 mb-5">Filter by</h3>
            <p className="text-base font-medium mb-3">Time Period</p>
            <ul className="space-y-3">
              {timeFilters.map((item) => (
                <li
                  key={item}
                  onClick={() => setSelectedTime(item)}
                  className={`flex items-center space-x-3 cursor-pointer px-2 py-1 rounded-md ${
                    selectedTime === item ? 'bg-green-100' : 'hover:bg-gray-100'
                  }`}
                >
                  <span className={`h-3 w-3 rounded-full border ${
                    selectedTime === item ? 'bg-green-600 border-green-600' : 'border-green-600 bg-white'
                  }`}></span>
                  <span className={`text-base ${
                    selectedTime === item ? 'text-green-700 font-semibold' : 'text-gray-700'
                  }`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-6">
            {/* Header Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800">Flipkart Panel Live Order Report</h2>
              <p className="text-sm text-gray-500 mt-1">Data was last uploaded on {lastUploaded}</p>
              <p className="text-base mt-3 text-gray-700">
                Showing data for: <span className="text-green-600 font-semibold">{selectedTime}</span>
              </p>
              <p className="text-base mt-1 text-gray-700">
                Your Profit will be added to <span className="text-green-600 font-medium">'My Earnings'</span>
              </p>
            </div>

            {/* Summary Cards */}
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
