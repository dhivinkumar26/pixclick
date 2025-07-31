import React from 'react';
import gearIcon from "./../../../assets/EKAffiliaters/gear.png";
import arrowIcon from "./../../../assets/EKAffiliaters/arrow.png";
import robotIcon from "./../../../assets/EKAffiliaters/robot.png";
import flipkartTagIcon from "./../../../assets/EKAffiliaters/flipkart.png";


export default function BestToolSection() {
  return (
    <section className="bg-white py-16 px-8 md:px-16">
      <div className=" mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">
            Why This Is The <span className="text-green-700">Best Tool</span> For You
          </h2>
          
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Left: Feature cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <img src={gearIcon} alt="Multi-Link Magic" className="w-12 h-12 mr-3" />
                <h3 className="font-semibold text-lg text-gray-800 font-serif">Multi-Link Magic</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Convert multiple links and text into profit links at once, saving precious time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <img src={arrowIcon} alt="Auto-Forwarding" className="w-12 h-12 mr-3" />
                <h3 className="font-semibold text-lg text-gray-800 font-serif">Auto-Forwarding</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Forward deals from other channels to yours automatically, effortlessly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <img src={robotIcon} alt="Auto-Posting" className="w-12 h-12 mr-3" />
                <h3 className="font-semibold text-lg text-gray-800 font-serif">Auto-Posting</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Instantly schedule & post deals to your channels without manual work.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <img src={flipkartTagIcon} alt="Flipkart Tags" className="w-12 h-12 mr-3" />
                <h3 className="font-semibold text-lg text-gray-800 font-serif">Flipkart Tags</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Use personalized tags to quickly redirect links, improving workflow.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
