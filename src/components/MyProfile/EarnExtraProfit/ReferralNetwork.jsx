import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { Link } from 'react-router-dom';

const ReferralNetwork = () => {
  return (
    <div className="bg-gray-100">
      {/* Breadcrumb Header */}
      <div className="p-4 text-sm text-gray-600">
        <Breadcrumbs/>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-5 px-5">

        {/* Sidebar */}
        <aside className="w-full md:w-64 rounded-lg bg-white border-r border-gray-200">
          <nav className="flex flex-col p-4 space-y-5 border-b text-gray-700 text-base">
            <Link to='/my-earnings' className="hover:text-green-600 hover:bg-green-600 hover:text-white hover:rounded-lg border-b py-2 px-5 border-gray-100">My Earnings</Link>
            <Link to='/reports' className="hover:text-green-600 hover:bg-green-600 hover:text-white hover:rounded-lg border-b py-2 px-5 border-gray-100">Reports</Link>
            <Link to='/profit-track' className="hover:text-green-600 hover:bg-green-600 hover:text-white hover:rounded-lg border-b py-2 px-5 border-gray-100">Profit Didn't Track?</Link>
            <Link to='/request-payment' className="hover:text-green-600 hover:bg-green-600 hover:text-white hover:rounded-lg border-b py-2 px-5 border-gray-100">Request Payment</Link>
            <Link to='/payment-history' className="hover:text-green-600 hover:bg-green-600 hover:text-white hover:rounded-lg border-b py-2 px-5 border-gray-100">Payment History</Link>
            <Link to='/account-settings' className="hover:text-green-600 hover:bg-green-600 hover:text-white hover:rounded-lg border-b py-2 px-5 border-gray-100">Account Settings</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50 rounded-xl flex items-center justify-center">
          <div className="bg-white w-full max-w-2xl p-6 rounded shadow-sm text-center border border-gray-200">
            <p className="text-gray-600 mb-6">No records found. Start referring friends now!</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
              REFER FRIENDS NOW
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReferralNetwork;
