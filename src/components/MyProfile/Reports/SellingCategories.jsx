import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const dateFilters = [
  'Today',
  'Yesterday',
  'Last 3 Days',
  'Last 7 Days',
  'Last 30 Days',
  'Last 3 Months',
];

const lastUploadedTimes = {
  'Today': '06/08/2025, 11:45 AM',
  'Yesterday': '05/08/2025, 08:12 PM',
  'Last 3 Days': '04/08/2025, 05:27 PM',
  'Last 7 Days': '01/08/2025, 09:00 AM',
  'Last 30 Days': '10/07/2025, 03:45 PM',
  'Last 3 Months': '15/06/2025, 01:20 PM',
};

export default function BestSellingCategoriesPage() {
  const [selectedRange, setSelectedRange] = useState('Last 30 Days');
  const [lastUpdated, setLastUpdated] = useState(lastUploadedTimes['Last 30 Days']);
  const navigate = useNavigate();

  useEffect(() => {
    setLastUpdated(lastUploadedTimes[selectedRange]);
  }, [selectedRange]);

  const handleBreadcrumbClick = (page) => {
    if (page === 'Home') navigate('/');
    if (page === 'Reports') navigate('/reports');
    if (page === 'Insights') navigate('/reports/flipkart-insights');
  };

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-8 md:px-16 py-6">
      {/* Breadcrumb */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          <span className="cursor-pointer hover:underline" onClick={() => handleBreadcrumbClick('Home')}>Home</span> /{' '}
          <span className="cursor-pointer hover:underline" onClick={() => handleBreadcrumbClick('Reports')}>Reports</span> /{' '}
          <span className="cursor-pointer hover:underline" onClick={() => handleBreadcrumbClick('Insights')}>Flipkart Reports & Insights</span> /{' '}
          <span className="text-black font-medium">Your Best-Selling Categories</span>
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="bg-white w-full lg:w-[240px] rounded-lg shadow-sm p-5">
          <h3 className="font-semibold text-lg text-gray-800 mb-5">Filter by</h3>
          <div>
            <p className="text-base font-medium mb-3">Date Range</p>
            <ul className="space-y-3 mb-5">
              {dateFilters.map((range) => (
                <li
                  key={range}
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={() => setSelectedRange(range)}
                >
                  <span
                    className={`h-4 w-4 rounded-full border-2 ${
                      selectedRange === range ? 'bg-green-600 border-green-600' : 'border-green-600'
                    }`}
                  ></span>
                  <span
                    className={`text-sm ${
                      selectedRange === range ? 'text-green-700 font-semibold' : 'text-gray-800'
                    }`}
                  >
                    {range}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex-1 space-y-6">
          {/* Header Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800">
              Your Best-Selling Categories
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Data was last uploaded on {lastUpdated}
            </p>
            <p className="text-base mt-4 text-gray-700 font-medium">
              Track your best performing categories and promote them again
            </p>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="border-b">
                <tr className="text-gray-700">
                  <th className="px-4 py-3 font-semibold">Category ⬍</th>
                  <th className="px-4 py-3 font-semibold">Orders ⬍</th>
                  <th className="px-4 py-3 font-semibold">Commission ⬍</th>
                  <th className="px-4 py-3 font-semibold">Commission Per Order ⬍</th>
                  <th className="px-4 py-3 font-semibold">Order</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center text-gray-600 py-6">
                    There’s nothing to show in the selected date range
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
