import React from 'react'
import {
  FaFileAlt,
  FaStar,
  FaTags,
  FaChartBar,
  FaListAlt
} from 'react-icons/fa'
import Breadcrumbs from '../Breadcrumbs'

const FlipkartReport = () => {
  const reports = [
    { label: 'Flipkart Panel Live Order Report', icon: <FaFileAlt size={20} /> },
    { label: 'Your Best-Selling Products', icon: <FaStar size={20} /> },
    { label: 'Overall Best-Selling Products', icon: <FaTags size={20} /> },
    { label: 'Your Best-Selling Categories', icon: <FaListAlt size={20} /> },
    { label: 'Order Status', icon: <FaChartBar size={20} /> },
  ]

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-8 md:px-16 py-6">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Breadcrumbs className="text-black" />
      </div>

      <div className="sm:mx-3 md:mx-10">

        {/* Header */}
        <h2 className="text-2xl font-bold bg-white p-4 rounded shadow-sm mb-6 text-center sm:text-left">
          Flipkart Reports & Insights
        </h2>

        {/* Report Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reports.map((report, index) => (
            <div
              key={index}
              className="border border-green-500 rounded-lg p-6 bg-white hover:bg-green-50 transition group cursor-pointer shadow-sm"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-green-600 w-16 h-16 text-white flex items-center justify-center rounded-full">
                  {report.icon}
                </div>
                <div className="flex items-center justify-center space-x-2 text-center">
                  <p className="font-medium text-xl text-gray-800 group-hover:text-green-700">
                    {report.label}
                  </p>
                  <span className="text-green-600 text-2xl font-bold">›</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default FlipkartReport
