import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from './../../assets/MakeLinks/img6.jpeg';
import img2 from './../../assets/MakeLinks/img8.png';
import img3 from './../../assets/MakeLinks/img7.jpeg';

const brands = [
  { name: "Flipkart", img: "https://logo.clearbit.com/flipkart.com" },
  { name: "Myntra", img: "https://logo.clearbit.com/myntra.com" },
  { name: "XYXX", img: img1 }, // ✅ Correctly referencing imported image
  { name: "WOW", img: img2 },
  { name: "AJIO", img: img3 },
];

export default function QuickConvertCarousel() {
  return (
    <div className="bg-white shadow p-6 mb-6 rounded">
      <h2 className="text-center text-xl font-semibold mb-4">
        Quick Convert Homepage Links
      </h2>
      <div className="flex items-center justify-center space-x-2 overflow-x-auto scrollbar-hide">
        <ChevronLeft className="text-green-600 cursor-pointer" />
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-4 w-32 h-20 flex items-center justify-center"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="h-10 object-contain"
            />
          </div>
        ))}
        <ChevronRight className="text-green-600 cursor-pointer" />
      </div>
      <div className="text-center mt-4">
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
          SEE OUR PARTNERS
        </button>
      </div>
    </div>
  );
}
