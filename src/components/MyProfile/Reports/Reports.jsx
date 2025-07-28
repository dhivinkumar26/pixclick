import React, { useState } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { FaRegQuestionCircle, FaRupeeSign } from 'react-icons/fa';
import { SlGraph } from 'react-icons/sl';
import CancelImg from '../../../assets/Reports/reports_cancelled.svg';
import ConfirmedImg from '../../../assets/Reports/reports_confirmed.svg';
import PaidImg from '../../../assets/Reports/reports_paid.svg';
import PendingImg from '../../../assets/Reports/reports_pending.svg';
import RequestedImg from '../../../assets/Reports/reports_requested.svg';
import { Link } from 'react-router-dom';
import { FiHelpCircle } from 'react-icons/fi';

const Reports = () => {
  const mydetails = [
    { label: 'Pending', img: PendingImg, amount: '₹0', bg: 'bg-yellow-100', text: 'text-yellow-700' },
    { label: 'Confirmed', img: ConfirmedImg, amount: '₹0', bg: 'bg-green-100', text: 'text-green-700' },
    { label: 'Paid', img: PaidImg, amount: '₹0', bg: 'bg-blue-100', text: 'text-blue-700' },
    { label: 'Requested', img: RequestedImg, amount: '₹0', bg: 'bg-purple-100', text: 'text-purple-700' },
    { label: 'Cancelled', img: CancelImg, amount: '₹0', bg: 'bg-red-100', text: 'text-red-700' },
  ];

  const [filter, setFilter] = useState('');

  const stats = [
    { title: 'Clicks', value: 0, bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200' },
    { title: 'Txns', value: 0, bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
    { title: 'Profit', value: '₹0', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    { title: 'Conv. Rate', value: '0%', bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', icon: <FiHelpCircle size={14} /> },
  ];

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="relative p-3 z-10">
        <Breadcrumbs className="text-black" />
      </div>

      <section className="px-4 sm:px-8 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="bg-white py-3 px-5 mb-6 rounded-xl text-xl sm:text-2xl font-semibold">REPORTS</div>

        {/* All Time Profit */}
        <div className="bg-white py-3 px-5 mb-10 rounded-xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xl sm:text-2xl font-medium py-4">All Time Total Profit</span>
            <FaRegQuestionCircle className="w-6 h-6" />
            <span className="text-xl sm:text-2xl font-bold">₹0</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
            {mydetails.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border border-gray-300 p-4 flex items-center justify-between text-center gap-2 shadow hover:shadow-md transition duration-300 ${item.bg}`}
              >
                <img src={item.img} alt={item.label} className="w-10 h-10" />
                <div className={`text-base sm:text-xl font-medium ${item.text}`}>{item.label}</div>
                <div className={`text-lg sm:text-2xl font-bold ${item.text}`}>{item.amount}</div>
              </div>
            ))}
          </div>

          <Link to="" className="text-sm sm:text-lg text-blue-800 italic underline hover:text-blue-1000">What's this?</Link>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                <FaRupeeSign />
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold">Performance Breakdown Overview</h2>
            </div>
            <select className="border border-gray-300 rounded px-4 py-2 text-sm sm:text-base text-gray-500">
              <option>Filter by</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className={`p-4 border rounded-lg ${stat.bg} ${stat.border}`}>
                <div className="text-center font-semibold text-base sm:text-lg text-black flex items-center justify-center gap-1">
                  {stat.title} {stat.icon && stat.icon}
                </div>
                <div className={`text-center font-bold text-lg sm:text-2xl ${stat.text}`}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance by Brands */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 lg:p-8 my-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="bg-green-600 text-white rounded-full w-10 h-10 text-xl flex items-center justify-center">
                <SlGraph />
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold">Performance by All Brands</h2>
            </div>
            <select className="border border-gray-300 rounded px-4 py-2 text-sm sm:text-base text-gray-500">
              <option>Filter by</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base text-left border-collapse">
              <thead className="text-gray-700 border-b">
                <tr>
                  <th className="p-3">Brands</th>
                  <th className="p-3">Clicks ⬍</th>
                  <th className="p-3">Transactions ⬍</th>
                  <th className="p-3">Profit ⬍</th>
                  <th className="p-3">Conv. Rate ⬍</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="p-3">--</td>
                  <td className="p-3">--</td>
                  <td className="p-3">--</td>
                  <td className="p-3">--</td>
                  <td className="p-3">--</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;
