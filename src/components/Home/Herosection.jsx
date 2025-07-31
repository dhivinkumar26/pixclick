import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import card1 from "../../assets/Home/gif1.png";
import card2 from "../../assets/Home/gif2.gif";
import card3 from "../../assets/Home/gif3.png";
import card4 from "../../assets/Home/gif4.png";
import card5 from "../../assets/Home/gif5.png";
import card6 from "../../assets/Home/gif6.png";
import card7 from "../../assets/Home/gif7.png";
import card8 from "../../assets/Home/gif8.png";
import card9 from "../../assets/Home/gif9.png";

import amazonLogo from "../../assets/Home/amazon-logo.png";

const cards = [
  { id: 1, img: card1, link: "https://example.com/1" },
  { id: 2, img: card2, link: "https://example.com/2" },
  { id: 3, img: card3, link: "https://example.com/3" },
  { id: 4, img: card4, link: "https://example.com/4" },
  { id: 5, img: card5, link: "https://example.com/5" },
  { id: 6, img: card6, link: "https://example.com/6" },
  { id: 7, img: card7, link: "https://example.com/7" },
  { id: 8, img: card8, link: "https://example.com/8" },
  { id: 9, img: card9, link: "https://example.com/9" },
];

const EarnSection = () => {
  const visibleCount = 3;
  const [startIndex, setStartIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      if (!isMobile) handleNext();
    }, 8000);
    return () => clearInterval(timeoutRef.current);
  }, [isMobile]);

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= cards.length ? 0 : prev + visibleCount
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - visibleCount < 0 ? Math.max(cards.length - visibleCount, 0) : prev - visibleCount
    );
  };

  const visibleCards = cards.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="w-full bg-white py-6 space-y-6">
      {/* Top Bar */}
      <div className="px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm md:text-base">Your Total Profit</span>
            <span className="text-xl font-semibold text-black">₹30.00</span>
          </div>
          <a
            href="/profitshala"
            className="text-sm border border-black px-3 py-2 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition"
          >
            Learn How To Earn More <span>→</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={amazonLogo} alt="Amazon" className="h-6" />
            <h1 className="text-gray-800 text-base md:text-lg">
              <span className="font-bold">amazon</span>.in is live
            </h1>
          </div>
          <a
            href="https://your-check-eligibility-link.com"
            className="text-sm border border-green-600 text-green-600 font-medium px-3 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 hover:text-white transition"
          >
            Check eligibility <span>→</span>
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className="relative px-4">
        {isMobile ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="rounded-xl"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={card.id}>
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={card.img}
                      alt={`Card ${card.id}`}
                      className="w-full h-[200px] object-cover"
                    />
                    {index === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-4 flex flex-col justify-center">
                        <p className="text-white text-lg font-semibold">Upto 85% Off</p>
                        <p className="text-white text-sm">Across Categories</p>
                        <p className="mt-2 text-green-400 text-sm font-medium">EARN UPTO 8.8% PROFIT</p>
                      </div>
                    )}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border border-gray-300 shadow hover:scale-105 transition"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <div className="overflow-hidden rounded-xl">
              <div className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${(startIndex / cards.length) * 100}%)` }}
              >
                {cards.map((card) => (
                  <div key={card.id} className="w-full md:w-1/3 flex-shrink-0 p-2">
                    <a href={card.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={card.img}
                        alt={`Card ${card.id}`}
                        className="rounded-xl w-full h-48 md:h-64 object-cover shadow hover:shadow-xl transition"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border border-gray-300 shadow hover:scale-105 transition"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EarnSection;
