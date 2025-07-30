import React from 'react';
import gearIcon from "./../../../assets/EKAffiliaters/gear.png";
import arrowIcon from "./../../../assets/EKAffiliaters/arrow.png";
import robotIcon from "./../../../assets/EKAffiliaters/robot.png";
import flipkartTagIcon from "./../../../assets/EKAffiliaters/flipkart.png";

export default function BestToolSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 leading-snug">
            Why This Is The <span className="text-green-700">Best Tool</span> For You
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {/* Card 1 */}
          <div className="bg-gray-50 border-2 border-green-600 rounded-xl p-6 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <img src={gearIcon} alt="Multi-Link Magic" className="w-10 h-10 mr-3" />
              <h3 className="font-bold text-lg md:text-xl text-green-600 font-serif">
                Multi-Link Magic
              </h3>
            </div>
            <p className="text-gray-600 text-base md:text-lg font-semibold">
              Convert multiple links and text into profit links at once, saving precious time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 border-2 border-green-600 rounded-xl p-6 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <img src={arrowIcon} alt="Auto-Forwarding" className="w-10 h-10 mr-3" />
              <h3 className="font-bold text-lg md:text-xl text-green-600 font-serif">
                Auto-Forwarding
              </h3>
            </div>
            <p className="text-gray-600 text-base md:text-lg font-semibold">
              Forward deals from other channels to yours automatically, effortlessly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 border-2 border-green-600 rounded-xl p-6 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <img src={robotIcon} alt="Auto-Posting" className="w-10 h-10 mr-3" />
              <h3 className="font-bold text-lg md:text-xl text-green-600 font-serif">
                Auto-Posting
              </h3>
            </div>
            <p className="text-gray-600 text-base md:text-lg font-semibold">
              Instantly schedule & post deals to your channels without manual work.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 border-2 border-green-600 rounded-xl p-6 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <img src={flipkartTagIcon} alt="Flipkart Tags" className="w-10 h-10 mr-3" />
              <h3 className="font-bold text-lg md:text-xl text-green-600 font-serif">
                Flipkart Tags
              </h3>
            </div>
            <p className="text-gray-600 text-base md:text-lg font-semibold">
              Use personalized tags to quickly redirect links, improving workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
