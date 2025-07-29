import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const MyLinkPerformance = () => {
  return (
    <div className="min-h-screen  font-sans">
      {/* Breadcrumbs */}
      <div className=" py-3 px-4 sm:px-6 lg:px-8 ">
        <nav className="text-sm font-medium text-gray-500">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link to="/reports" className="text-gray-600 hover:text-gray-800">
                Reports
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center text-gray-800">
              My Link Performance
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl border border-gray-200">
          {/* Section Header */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            My Link Performance
          </h2>
          <div className="w-full h-px bg-gray-200 mb-6"></div> {/* Divider line */}

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8">
            Track your link level data easily
          </p>
          <div className="w-full h-px bg-gray-200 mb-12"></div> {/* Divider line */}

          {/* Empty State / No Data Content */}
          <div className="flex flex-col items-center justify-center text-center py-8">
            {/* Image Placeholder - Replicated with a simple div for structure */}
            {/* For a real image, replace this div with: <img src="path/to/your/image.png" alt="No data illustration" className="w-32 h-32 mb-6" /> */}
            <div className="relative w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                {/* Basic shapes to mimic the illustration */}
                <div className="absolute top-4 left-4 w-16 h-24 bg-green-300 rounded-md"></div>
                <div className="absolute top-2 right-2 text-4xl text-red-500 font-bold">xx</div>
                <div className="absolute bottom-4 right-4 text-3xl text-orange-500">₹</div>
            </div>


            <p className="text-gray-700 text-lg mb-4">
              Hey, your link data will reflect here when you start getting clicks on your Profit links
            </p>
            <p className="text-gray-500 text-base mb-8">
              Share Profit links, get transactions, and track your link data here
            </p>

            {/* Start Earning Now Button */}
            <Link
              to="/make-links" // This path is specified by you
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              style={{ backgroundColor: '#26af47' }} // Exact green color
            >
              Start Earning Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLinkPerformance;