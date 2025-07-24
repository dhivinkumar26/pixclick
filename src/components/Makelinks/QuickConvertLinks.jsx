import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "./../../assets/MakeLinks/img6.jpeg";
import img2 from "./../../assets/MakeLinks/img8.png";
import img3 from "./../../assets/MakeLinks/img7.jpeg";

const brands = [
  { name: "Flipkart", img: "https://logo.clearbit.com/flipkart.com" },
  { name: "Myntra", img: "https://logo.clearbit.com/myntra.com" },
  { name: "XYXX", img: img1 },
  { name: "WOW", img: img2 },
  { name: "AJIO", img: img3 },
];

export default function QuickConvertCarousel() {
  return (
    <div className="bg-white shadow-md px-4 sm:px-6 py-6 w-full max-w-[1203px] mx-auto mt-6">
      <h2 className="text-center text-lg sm:text-[22px] font-bold mb-5 sm:mb-6 leading-snug">
        Quick Convert <span className="font-semibold">Homepage Links</span>
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-[#4CAF50] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
          <ChevronLeft size={18} />
        </button>

        {/* Brand Scroll Row */}
        <div className="bg-[#f9f9f9] px-6 sm:px-12 py-4 sm:py-5 rounded-lg flex items-center justify-start sm:justify-center gap-4 sm:gap-6 overflow-x-auto scrollbar-hide">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white shadow-sm rounded-xl w-28 sm:w-36 h-20 sm:h-24 flex items-center justify-center shrink-0"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="h-8 sm:h-10 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-[#4CAF50] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="text-center mt-5 sm:mt-6">
        <button className="bg-green-600 text-white px-5 sm:px-6 py-2 rounded-full hover:bg-green-700 text-sm font-medium">
          SEE OUR PARTNERS
        </button>
      </div>
    </div>
  );
}
