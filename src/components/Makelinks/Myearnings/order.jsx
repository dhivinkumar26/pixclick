import React from "react";
import { FaDownload } from "react-icons/fa"; // For the download icon
import { Link } from "react-router-dom"; // For navigation links

export default function OrderDetailsPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans w-full pb-10"> {/* Changed mb-10 to pb-10 for consistent padding */}
      {/* Top green gradient section */}
      <div className="w-full bg-gradient-to-b from-green-600 to-green-500 h-16 md:h-20 lg:h-28"></div>

      {/* Main content wrapper with responsive horizontal padding and negative top margin */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 -mt-12 sm:-mt-16 lg:-mt-20">
        {/* Breadcrumb Navigation */}
        <div className="flex text-sm sm:text-base text-white mb-5 sm:mb-6">
          {/* Home link */}
          <Link to="/" className="hover:underline cursor-pointer">Home</Link>
          <span className="mx-1">/</span>
          {/* My Earnings link */}
          <Link to="/my-earnings" className="hover:underline cursor-pointer font-semibold">My Earnings</Link> {/* Assuming a route for My Earnings */}
          <span className="mx-1">/</span>
          {/* Current page (Order Details) */}
          <span className="font-semibold">Order Details</span>
        </div>

        {/* Main content area: Filter Sidebar and Order Details Card */}
        {/* Uses flexbox for responsive layout: column on small screens, row on medium and up */}
        <div className="flex flex-col md:flex-row gap-4 p-4 md:p-6 bg-transparent"> {/* bg-transparent to let child cards define their own background */}
          {/* Filter Sidebar */}
          <div className="bg-white rounded-lg shadow p-4 w-full md:w-64 flex-shrink-0"> {/* flex-shrink-0 to prevent shrinking on larger screens */}
            <h3 className="font-semibold mb-3 text-gray-800">Filter By</h3>
            <hr className="mb-3 border-gray-200" /> {/* Added border color for clarity */}

            {/* Status Filter Section */}
            <div className="mb-4">
              <h4 className="text-gray-700 font-medium mb-2">Status</h4>
              <div className="flex flex-col gap-1 text-sm text-gray-600">
                {["Pending", "Confirmed", "Paid", "Requested", "Cancelled"].map(
                  (status) => (
                    <label key={status} className="flex items-center gap-2 cursor-pointer hover:text-gray-800">
                      <input type="checkbox" className="form-checkbox text-green-600 rounded" /> {/* Styled checkbox */}
                      {status}
                    </label>
                  )
                )}
              </div>
            </div>

            <hr className="mb-3 border-gray-200" />

            {/* Dates Filter Section */}
            <div className="mb-4">
              <h4 className="text-gray-700 font-medium mb-2">Dates</h4>
              <p className="text-xs text-gray-500 mb-2">Select transactions of</p>
              <div className="flex flex-col gap-1 text-sm text-gray-600">
                {["This month", "Last 30 Days", "Last month", "Last 3 months"].map(
                  (date) => (
                    <label key={date} className="flex items-center gap-2 cursor-pointer hover:text-gray-800">
                      <input type="checkbox" className="form-checkbox text-green-600 rounded" /> {/* Styled checkbox */}
                      {date}
                    </label>
                  )
                )}
              </div>

              <p className="text-xs text-gray-500 mt-3 mb-1">Select date range</p>
              <div className="flex flex-col sm:flex-row gap-2"> {/* Responsive flex for date inputs */}
                <input
                  type="date"
                  className="w-full sm:w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:ring-green-500 focus:border-green-500" // Added focus styles
                />
                <input
                  type="date"
                  className="w-full sm:w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:ring-green-500 focus:border-green-500" // Added focus styles
                />
              </div>
            </div>

            {/* Apply & Reset buttons */}
            <div className="flex gap-2 mt-4"> {/* Increased top margin for buttons */}
              <button className="flex-1 bg-green-600 text-white text-sm py-2 rounded-md hover:bg-green-700 transition-colors duration-200 shadow-sm"> {/* Added hover, transition, shadow */}
                APPLY
              </button>
              <button className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-md hover:bg-gray-300 transition-colors duration-200 shadow-sm"> {/* Added hover, transition, shadow */}
                RESET
              </button>
            </div>
          </div>

          {/* Order Details Card */}
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2"> {/* Responsive flex for title and button */}
              <h3 className="font-semibold text-gray-800 text-lg">Order Details</h3> {/* Increased text size for title */}
              <button className="flex items-center gap-1 bg-green-600 text-white text-xs px-3 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 shadow-sm"> {/* Added hover, transition, shadow, increased padding */}
                <FaDownload className="w-3 h-3" /> Download Report
              </button>
            </div>
            <hr className="mb-3 border-gray-200" />

            {/* Order item example */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 p-2 border border-gray-200 rounded-md"> {/* Added border and padding for visual separation */}
              <div className="flex items-center gap-3 mb-2 sm:mb-0"> {/* Added mb for mobile stacking */}
                {/* Placeholder for logo */}
                <img
                  src="https://placehold.co/40x40/e0e0e0/333333?text=Logo" // Updated placeholder for better visual
                  alt="Brand Logo"
                  className="rounded-md object-cover" // Added object-cover for image fitting
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/cccccc/000000?text=Logo"; }} // Fallback
                />
                <div className="flex flex-col text-sm">
                  <span className="text-gray-700">Bonus Type</span>
                  <span className="font-medium text-gray-900">Sign Up</span> {/* Darker text for emphasis */}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-gray-800">₹30</span> {/* Increased size for profit */}
                <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold"> {/* Darker text for pending status */}
                  Pending
                </span>
              </div>
            </div>

            {/* Share banner */}
            <div className="mt-6"> {/* Increased top margin */}
              {/* Placeholder for banner */}
              <img
                src="https://placehold.co/600x80/dcfce7/16a34a?text=Share+More+to+Earn+More" // Updated placeholder for better visual
                alt="Share More Banner"
                className="w-full rounded-lg shadow-md object-cover" // Added shadow and object-cover
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x80/cccccc/000000?text=Banner"; }} // Fallback
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
