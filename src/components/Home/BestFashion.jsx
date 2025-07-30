import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";

// Image imports
import L1 from "../../assets/Home/Deals/l1.png";
import L2 from "../../assets/Home/Deals/l2.png";
import L3 from "../../assets/Home/Deals/l3.png";
import L4 from "../../assets/Home/Deals/l4.png";
import L5 from "../../assets/Home/Deals/l5.png";
import L6 from "../../assets/Home/Deals/logo8.png";
import L7 from "../../assets/Home/Deals/logo8.png";
import L8 from "../../assets/Home/Deals/l3.png";
import L9 from "../../assets/Home/Deals/l4.png";
import L10 from "../../assets/Home/Deals/l1.png";

import BF1 from "../../assets/Home/Deals/bf1.png";
import BF2 from "../../assets/Home/Deals/bf2.png";
import BF3 from "../../assets/Home/Deals/bf3.png";
import BF4 from "../../assets/Home/Deals/bf4.png";
import BF5 from "../../assets/Home/Deals/bf5.jpg";
import BF6 from "../../assets/Home/Deals/bf6.jpg";
import BF7 from "../../assets/Home/Deals/bf7.jpg";
import BF8 from "../../assets/Home/Deals/bf1.png";
import BF9 from "../../assets/Home/Deals/bf2.png";
import BF10 from "../../assets/Home/Deals/bf3.png";

const deals = [
  { id: 1, logo: L1, image: BF1, oldPrice: "₹1198", newPrice: "₹429", startsFrom: "₹429", profit: "Flat Rs 180 Profit", label: "AJIO" },
  { id: 2, logo: L2, image: BF2, oldPrice: "₹1199", newPrice: "₹599", startsFrom: "₹599", profit: "Flat 12% Profit", label: "AJIO" },
  { id: 3, logo: L3, image: BF3, oldPrice: "", newPrice: "Flat ₹450 Off", startsFrom: "₹349", profit: "Upto 20% Profit", label: "AJIO" },
  { id: 4, logo: L4, image: BF4, oldPrice: "", newPrice: "Upto 80% Off", startsFrom: "₹999", profit: "Flat 6% Profit", label: "AJIO" },
  { id: 5, logo: L5, image: BF5, oldPrice: "₹1199", newPrice: "₹599", startsFrom: "₹599", profit: "Flat 12% Profit", label: "AJIO" },
  { id: 6, logo: L6, image: BF6, oldPrice: "", newPrice: "", startsFrom: "₹149", profit: "Upto 21% Profit", label: "AJIO" },
  { id: 7, logo: L7, image: BF7, oldPrice: "", newPrice: "₹699 Only", startsFrom: "₹699", profit: "Flat 2% Profit", label: "AJIO" },
  { id: 8, logo: L8, image: BF8, oldPrice: "", newPrice: "Min 50% Off", startsFrom: "₹117", profit: "Upto 10% Profit", label: "AJIO" },
  { id: 9, logo: L9, image: BF9, oldPrice: "", newPrice: "", startsFrom: "₹99", profit: "Flat 5% Profit", label: "AJIO" },
  { id: 10, logo: L10, image: BF10, oldPrice: "", newPrice: "₹888 Only", startsFrom: "₹195", profit: "Flat 10% Profit", label: "AJIO" },
];

export default function FlashDeals() {
  const scrollRef = useRef(null);
  const [copyStatus, setCopyStatus] = useState(Array(deals.length).fill("COPY LINK"));

  const scroll = (direction) => {
    const scrollAmount = 280;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleShare = () => {
    const message = encodeURIComponent("Check out this great deal!");
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.location.href = whatsappUrl;
  };

  const handleCopy = async (idx) => {
    const newStatus = [...copyStatus];
    newStatus[idx] = "Copying...";
    setCopyStatus(newStatus);

    try {
      await navigator.clipboard.writeText(`https://example.com/deal/${idx}`);
      newStatus[idx] = "Copied";
      setCopyStatus([...newStatus]);

      setTimeout(() => {
        newStatus[idx] = "COPY LINK";
        setCopyStatus([...newStatus]);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);
      newStatus[idx] = "Failed";
      setCopyStatus([...newStatus]);

      setTimeout(() => {
        newStatus[idx] = "COPY LINK";
        setCopyStatus([...newStatus]);
      }, 2000);
    }
  };

  return (
    <div className="py-6 px-1 relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-bold ml-4 text-black">AJIO - TOP DEALS</h2>
        <a href="#" className="text-sm text-gray-600 hover:text-black mr-4 font-medium">VIEW ALL</a>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 hover:scale-110 transition"
        >
          <FaChevronLeft className="text-3xl" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-4 no-scrollbar"
        >
          {deals.map((item, idx) => (
            <div
              key={item.id}
              className="min-w-[283px] max-w-[283px] bg-white flex-shrink-0 rounded-md border border-gray-200 shadow relative overflow-hidden"
            >
              <div className="flex justify-center bg-orange-800 flex-col items-center">
                <div className="w-full h-[30px] flex items-center justify-start mt-2 px-2">
                  <img src={item.logo} alt="brand" className="h-8 w-auto object-contain rounded-full" />
                </div>
                <img src={item.image} alt="product" className="md:h-50 object-contain cursor-pointer mt-2" />
              </div>

              <div className="grid grid-cols-2 text-[11px] mt-2 px-2 gap-2">
                <div className="bg-gray-100 rounded px-2 py-2">
                  <span className="block font-semibold text-[12px]">STARTING FROM</span>
                  <span className="text-[22px]">{item.startsFrom}</span>
                </div>
                <div className="bg-gray-100 px-2 py-2">
                  <span className="block font-semibold border-b-[1.5px] border-[rgba(255,255,255,0.3)] text-[12px]">PER SALE YOU EARN</span>
                  <span className="text-[14px]">{item.profit}</span>
                </div>
              </div>

              <hr className="mt-2" />

              <div className="flex flex-col-1 gap-2 mt-4 px-2 pb-3">
                <button
                  onClick={() => handleCopy(idx)}
                  className="w-full text-sm md:text-md py-2 border rounded-full cursor-pointer font-medium"
                >
                  {copyStatus[idx]}
                </button>
                <button
                  onClick={handleShare}
                  className="w-full text-sm md:text-md bg-green-500 text-white rounded-full hover:bg-green-600 transition flex items-center justify-center gap-1 py-2"
                >
                  <FaWhatsapp className="text-white text-xl" /> SHARE NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 hover:scale-110 transition"
        >
          <FaChevronRight className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
