import React, { useState, useEffect } from 'react';

const timeFilters = [
  'Last 1 Hour',
  'Last 6 Hours',
  'Last 24 Hours',
  'Last 7 Days',
  'Last 30 Days',
  'Last 3 Months',
];

const dummyData = [
  {
    name: 'glow and lovely Renew Bright Multivitamin Serum in Cream',
    price: '₹52',
    orders: 112,
    category: 'Grocery and Food',
    link: 'https://www.flipkart.com/x/p/x?pid=FRNF79FPZRYWD95T',
  },
  {
    name: 'Wild Stone Soap Combo (Ultra Sensual, Forest Spice, Musk)',
    price: '₹166',
    orders: 28,
    category: 'Grocery and Food',
    link: '#',
  },
  {
    name: 'CINTHOL Lime Bath Soap',
    price: '₹178',
    orders: 20,
    category: 'Grocery and Food',
    link: '#',
  },
  {
    name: 'LIFEBUOY 100% Stronger Germ Protection',
    price: '₹180',
    orders: 19,
    category: 'Grocery and Food',
    link: '#',
  },
  {
    name: 'Boost Nutrition Drink',
    price: '₹244',
    orders: 17,
    category: 'Beauty',
    link: '#',
  },
  {
    name: 'RedClinic Calcium & Vitamin D3 Tablets | For Bone Health & Joint Support',
    price: '₹382',
    orders: 16,
    category: 'Beauty',
    link: '#',
  },
];

export default function BestSellingUISection() {
  const [selectedFilter, setSelectedFilter] = useState('Last 1 Hour');
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    setLastUpdated(formatted);
  }, []);

  return (
    <div className="bg-[#f5f5f5] min-h-screen px-4 sm:px-6 md:px-12 py-6 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="bg-white w-full lg:w-[240px] rounded-lg shadow-sm p-5">
          <h3 className="font-semibold text-lg text-gray-800 mb-5">Filter by</h3>
          <div>
            <p className="text-base font-medium mb-3">Time Period</p>
            <ul className="space-y-3">
              {timeFilters.map((filter) => (
                <li
                  key={filter}
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={() => setSelectedFilter(filter)}
                >
                  <span
                    className={`h-4 w-4 rounded-full border-2 ${
                      selectedFilter === filter ? 'bg-green-600 border-green-600' : 'border-green-600'
                    }`}
                  ></span>
                  <span
                    className={`text-sm ${
                      selectedFilter === filter ? 'text-green-700 font-semibold' : 'text-gray-800'
                    }`}
                  >
                    {filter}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800">
              Overall Best-Selling Products
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Data was last uploaded on {lastUpdated}
            </p>
            <p className="text-base mt-4 text-gray-700 font-medium">
              Promote what other EarnKaro users are sharing and increase your earnings
            </p>

            <div className="bg-green-100 mt-4 p-2 px-4 rounded-md border border-green-300 text-sm text-gray-700 italic">
              <span className="font-semibold text-black">*Best Price:</span> This is the price at which other users got maximum number of orders
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="border-b">
                <tr className="text-gray-700">
                  <th className="px-4 py-3 font-semibold">Product Name ⬍</th>
                  <th className="px-4 py-3 font-semibold">Best Price* ⬍</th>
                  <th className="px-4 py-3 font-semibold text-green-600">Orders ⬍</th>
                  <th className="px-4 py-3 font-semibold">Category ⬍</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((item, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-blue-700 underline cursor-pointer">
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    </td>
                    <td className="px-4 py-3">{item.price}</td>
                    <td className="px-4 py-3 font-medium text-green-700">{item.orders}</td>
                    <td className="px-4 py-3">{item.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
