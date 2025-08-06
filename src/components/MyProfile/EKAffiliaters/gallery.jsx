import React from 'react';
import gearIcon from "./../../../assets/EKAffiliaters/gear.png";
import arrowIcon from "./../../../assets/EKAffiliaters/arrow.png";
import robotIcon from "./../../../assets/EKAffiliaters/robot.png";
import flipkartTagIcon from "./../../../assets/EKAffiliaters/flipkart.png";

export default function BestToolSection() {
  return (
    <section className="bg-white py-10 px-8 sm:px-16 lg:px-32">
      <div className=" mx-auto">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 leading-snug">
            Why This Is The <span className="text-green-700">Best Tool</span> For You
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* Reusable Card Component */}
          {[
            { icon: gearIcon, title: "Multi-Link Magic", desc: "Convert multiple links and text into profit links at once." },
            { icon: arrowIcon, title: "Auto-Forwarding", desc: "Forward deals from other channels to yours automatically." },
            { icon: robotIcon, title: "Auto-Posting", desc: "Schedule & post deals without manual work." },
            { icon: flipkartTagIcon, title: "Flipkart Tags", desc: "Use tags to redirect links faster and better." },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-green-600 rounded-lg overflow-hidden hover:shadow-sm transition"
            >
              <img src={card.icon} alt={card.title} className="w-full h-28 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-base md:text-lg text-green-600 font-serif mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-l md:text-xl font-semibold leading-snug">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
