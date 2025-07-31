import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import hsbc from "../../assets/Home/hsbc.png";
import axis from "../../assets/Home/axis.png";
import flipkart from "../../assets/Home/flipkart.png";
import ajio from "../../assets/Home/ajio.png";
import { Link } from "react-router-dom";
import MostPopularStores from "./MostPopularStores";

const cardData = [
  { title: "HSBC PLATINUM CREDIT CARD", logo: hsbc, profit: "Flat Rs 3000 Profit" },
  { title: "AXIS MYZONE CREDIT CARD", logo: axis, profit: "Flat Rs 2380 Profit" },
  { title: "AXIS FLIPKART CREDIT CARD", logo: axis, profit: "Flat Rs 2380 Profit" },
  { title: "UPTO 85% OFF", logo: flipkart, profit: "Upto 8% Profit" },
  { title: "RED HOT SALE", logo: ajio, profit: "Upto 12.5% Profit" },
  { title: "HSBC PLATINUM CREDIT CARD", logo: hsbc, profit: "Flat Rs 3000 Profit" },
  { title: "AXIS MYZONE CREDIT CARD", logo: axis, profit: "Flat Rs 2380 Profit" },
  { title: "AXIS FLIPKART CREDIT CARD", logo: axis, profit: "Flat Rs 2380 Profit" },
  { title: "UPTO 85% OFF", logo: flipkart, profit: "Upto 8% Profit" },
  { title: "RED HOT SALE", logo: ajio, profit: "Upto 12.5% Profit" },
];

const RetailerSlider = () => {
  const containerRef = useRef(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth / 2; // base scroll by 2 cards
      containerRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleShare = () => {
    const message = encodeURIComponent("Check out this great deal!");
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.location.href = whatsappUrl;
  };

  const handleCopy = (idx) => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
    setCopiedIndex(idx);
  };

  useEffect(() => {
    setCopiedIndex(null);
  }, []);

  return (
    <div className="bg-[#e3e3e3] py-6">
      <div className="px-4 relative">
        {/* Top Heading */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">TOP RETAILERS</h2>
          <Link
            to="/most-popular-stores"
            className="text-sm text-gray-600 font-medium cursor-pointer flex items-center gap-1 hover:text-black "
          >
            VIEW ALL <span className="text-xl">›</span>
          </Link>
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 sm:p-4 rounded"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        {/* Scroll Container */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth no-scrollbar"
          >
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-2 
                w-[80%] sm:w-[60%] md:w-[40%] lg:w-[25%] xl:w-[20%]"
              >
                <div className="bg-white rounded-md shadow-sm overflow-hidden h-full flex flex-col justify-between">
                  {/* Title */}
                  <div className="relative">
                    <div className="bg-red-600 text-white text-sm font-semibold px-2 py-1 absolute top-0 left-0 rounded-br-md">
                      {card.title}
                    </div>
                    <div className="pt-10 pb-4 flex justify-center">
                      <img
                        src={card.logo}
                        alt="logo"
                        className="h-16 object-contain cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Earnings */}
                  <div className="border-t px-4 py-3 text-center">
                    <div className="bg-gray-200 text-sm px-3 py-1 inline-block rounded-full border font-semibold mb-1">
                      YOU EARN
                    </div>
                    <div className="font-bold text-lg sm:text-xl text-gray-800">
                      {card.profit}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="border-t px-4 py-3 flex flex-col gap-3">
                    <button
                      onClick={handleShare}
                      className="flex items-center justify-center gap-2 text-white bg-green-600 py-2 rounded-full font-medium text-sm sm:text-base"
                    >
                      <FaWhatsapp className="text-white text-lg" /> SHARE NOW
                    </button>
                    <button
                      onClick={() => handleCopy(idx)}
                      className="border border-gray-400 rounded-full py-2 font-medium text-sm sm:text-base"
                    >
                      {copiedIndex === idx ? "Copied" : "COPY LINK"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 sm:p-4 rounded"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default RetailerSlider;
