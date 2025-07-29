import Breadcrumbs from "../Breadcrumbs";
import Perfomance from '../../../assets/MyPerformance/report_empty.svg';

export default function MyLinksPerformance() {
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 md:px-10 py-6">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Breadcrumbs className="text-black" />
      </div>

      {/* Card */}
      <div className="bg-white rounded-md shadow-sm max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b border-gray-300 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            My Link Performance
          </h2>
        </div>

        {/* Sub-header */}
        <div className="border-b border-gray-300 text-xl sm:text-2xl px-5 py-6 text-gray-700 font-medium text-center sm:text-left">
          Track your link level data easily
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center px-4 py-10">
          {/* Image */}
          <img
            src={Perfomance}
            alt="Empty"
            className="w-40 h-40 sm:w-56 sm:h-56 mb-6"
          />

          {/* Message */}
          <p className="text-gray-800 text-lg sm:text-xl font-medium mb-3">
            Hey, your link data will reflect here when you start getting clicks on your Profit links
          </p>
          <p className="text-base sm:text-lg mb-6 px-2 sm:px-6">
            Share Profit links, get transactions, and track your link data here
          </p>

          {/* CTA Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold text-sm sm:text-base">
            Start Earning Now
          </button>
        </div>
      </div>
    </div>
  );
}
