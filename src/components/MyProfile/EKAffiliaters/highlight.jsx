import React from 'react';
import LeftRobot from './../../../assets/MyProfile/left-robot.png';     
import RightRobot from './../../../assets/MyProfile/right-robot.png';   

const HighlightsSection = () => {
  return (
    <section className="bg-white py-18 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Our <span className="text-green-600">Highlights</span>
      </h2>
<br />
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-screen-xl mx-auto px-4">
        {/* Left Robot */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            src={LeftRobot}
            alt="Left Robot"
            className="w-36 sm:w-40 md:w-48 lg:w-62"
          />
        </div>

        {/* Stats Cards */}
        <div className="flex-1 flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow text-center w-64 border-2 border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">30L+</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-700">
              Affiliate<br />Marketers
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow text-center w-64 border-2 border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">1 CR+</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-700">
              Successful<br />Transactions
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow text-center w-64 border-2 border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">₹40 CR+</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-700">
              Paid to<br />Users
            </p>
          </div>
        </div>

        {/* Right Robot */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={RightRobot}
            alt="Right Robot"
            className="w-32 sm:w-36 md:w-44 lg:w-48"
          />
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
