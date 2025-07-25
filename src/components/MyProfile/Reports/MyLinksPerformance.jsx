import Breadcrumbs from "../Breadcrumbs";
import Perfomance from '../../../assets/MyPerformance/report_empty.svg'

export default function MyLinksPerformance() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Breadcrumb */}
      <div className="relative z-10 mx-20">
        <Breadcrumbs className='text-black'/>
      </div>

      {/* Card */}
      <div className="bg-white rounded-md shadow-sm max-w-4xl mx-auto">
        <div className="border-b border-gray-400 p-10">
          <h2 className="text-3xl font-semibold text-gray-900">My Link Performance</h2>
        </div>

        <div className="border-b border-gray-400 text-2xl px-5 py-8 text-gray-700 font-medium">
          Track your link level data easily
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center p-15 text-center">
          {/* Image */}
          <img
            src={Perfomance}
            alt="Empty"
            className="w-30 h-30 my-10"
          />

          {/* Message */}
          <p className="text-gray-800 text-xl font-medium py-3">
            Hey, your link data will reflect here when you start getting clicks on your Profit links
          </p>
          <p className="text-lg py-5">
            Share Profit links, get transactions, and track your link data here
          </p>

          {/* CTA Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 my-5 py-2 rounded-md font-medium">
            Start Earning Now
          </button>
        </div>
      </div>
    </div>
  );
}
