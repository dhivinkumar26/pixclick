import React from "react";
// import foundersImage from "../assets/founders.jpg"; // Replace with your image path

export default function AboutHero() {
  return (
    <div className="w-full bg-white">
      {/* Top Image Section */}
      <div className="flex justify-center items-center p-4 md:p-10">
        <img
          src={foundersImage}
          alt="Founders"
          className="w-full max-w-5xl object-contain"
        />
      </div>

      {/* Quote + Paragraph */}
      <div className="max-w-4xl mx-auto px-4 md:px-0 text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          "We are India’s #1 Affiliate Marketing Platform"
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Founded by Swati & Rohan Bhargava in July 2019, EarnKaro is a
          deal-sharing platform, partnered with 200+ Shopping Sites across
          various categories like Fashion, Beauty, Grocery, OTC Medicines,
          Electronics & Credit Cards. Backed by Late Mr. Ratan Tata & some of
          India's leading VC firms – Kalaari Capital & Korea Investment
          Partners, we cater to 20L+ registered users sharing deals across
          e-commerce sites like Flipkart, Myntra, Axis Bank, Mamaearth, Beardo
          & more.
        </p>
      </div>

      {/* Achievement Timeline */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl font-semibold text-center mb-6">
            Follow Our Achievements
          </h3>

          <div className="flex items-start space-x-4 md:space-x-6">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-full p-3 shadow-md">
                🚀
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm md:text-base mb-1">
                JULY ’19: OFF TO A GREAT START
              </h4>
              <p className="text-gray-700 text-sm">
                Built strategic tie ups with Myntra, Flipkart & Nykaa<br />
                Raised investment from several VC firms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
