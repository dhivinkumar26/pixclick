import React from 'react'
import { FaFileAlt, FaStar, FaTags, FaChartBar, FaListAlt } from 'react-icons/fa';
import Breadcrumbs from '../Breadcrumbs';

const FlipkartReport = () => {

  const reports = [
    {
      label: 'Flipkart Panel Live Order Report',
      icon: <FaFileAlt size={20} />,
    },
    {
      label: 'Your Best-Selling Products',
      icon: <FaStar size={20} />,
    },
    {
      label: 'Overall Best-Selling Products',
      icon: <FaTags size={20} />,
    },
    {
      label: 'Your Best-Selling Categories',
      icon: <FaListAlt size={20} />,
    },
    {
      label: 'Order Status',
      icon: <FaChartBar size={20} />,
    },
  ];

  return (
    <div>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="relative z-10 mx-20">
          <Breadcrumbs className='text-black' />
        </div>

        <div className="mx-40">
          {/* Header */}
          <h2 className="text-2xl font-bold bg-white p-4 rounded shadow-sm mb-6">
            Flipkart Reports & Insights
          </h2>

          {/* Report Cards */}
          <div className="grid grid-cols-1 py-10 sm:grid-cols-2 md:grid-cols-2 gap-10">
            {reports.map((report, index) => (
              <div
                key={index}
                className="border border-green-500 rounded-lg p-8 bg-white hover:bg-green-50 transition group cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-green-600 w-15 h-15 text-white p-5 rounded-full">
                      {report.icon}
                    </div>
                    <div className="flex items-center justify-center text-center space-x-3">
                      <p className="font-medium text-xl text-center text-gray-800 group-hover:text-green-700">
                        {report.label}
                      </p>
                      <span className="text-green-600 text-2xl text-center font-bold">›</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipkartReport