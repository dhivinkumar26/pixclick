import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const dateRanges = [
  'Today',
  'Yesterday',
  'Last 3 Days',
  'Last 7 Days',
  'Last 30 Days',
  'Last 3 Months',
];

export default function BestSellingProducts() {
  const [selectedRange, setSelectedRange] = useState('Last 30 Days');
  const [lastUploaded, setLastUploaded] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    setLastUploaded(formatted);
  }, [selectedRange]);

  const handleNavigate = (path) => navigate(path);
  const handleRangeChange = (range) => setSelectedRange(range);

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 md:px-12 py-6 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* Breadcrumb */}
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
            onClick={() => handleNavigate('/flipkart-reports')}
            className="cursor-pointer hover:underline"
          >
            Flipkart Reports & Insights
          </span>
          <span>/</span>
          <span className="font-semibold text-black">
            Your Best-Selling Products
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="bg-white w-full lg:w-[260px] rounded-lg shadow-sm p-5">
            <h3 className="font-semibold text-lg text-gray-800 mb-5">Filter by</h3>
            <div>
              <p className="text-base font-medium mb-3">Date Range</p>
              <ul className="space-y-3">
                {dateRanges.map((range, i) => (
                  <li
                    key={i}
                    onClick={() => handleRangeChange(range)}
                    className={`flex items-center space-x-3 cursor-pointer px-2 py-1 rounded-md ${
                      selectedRange === range ? 'bg-green-100' : 'hover:bg-gray-100'
                    }`}
                  >
                    <span
                      className={`h-3 w-3 rounded-full border ${
                        selectedRange === range ? 'bg-green-600 border-green-600' : 'border-green-600 bg-white'
                      }`}
                    ></span>
                    <span
                      className={`text-base ${
                        selectedRange === range ? 'text-green-700 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {range}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Heading */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800">
                Your Best-Selling Products
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Data was last uploaded on {lastUploaded}
              </p>
              <p className="text-base mt-3 text-gray-700">
                Showing data for: <span className="text-green-600 font-semibold">{selectedRange}</span>
              </p>
              <p className="text-base mt-1 text-gray-700">
                Track your best performing products and promote them again
              </p>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="border-b">
                  <tr className="text-gray-700">
                    <th className="px-4 py-3 font-semibold">Product Name ⬍</th>
                    <th className="px-4 py-3 font-semibold">Selling Price ⬍</th>
                    <th className="px-4 py-3 font-semibold">Orders ⬍</th>
                    <th className="px-4 py-3 font-semibold text-green-600">Commission ⬍</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500 py-10 text-base">
                      There’s nothing to show for <span className="font-medium">{selectedRange}</span>
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
