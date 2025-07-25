import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";

// Your image imports remain unchanged
import logo1 from "../../assets/Home/Deals/logo1.png";
import logo2 from "../../assets/Home/Deals/logo2.png";
import logo3 from "../../assets/Home/Deals/logo3.jpg";
import logo4 from "../../assets/Home/Deals/logo4.png";
import logo5 from "../../assets/Home/Deals/logo2.png";
import logo6 from "../../assets/Home/Deals/logo6.png";
import logo7 from "../../assets/Home/Deals/logo7.png";
import logo8 from "../../assets/Home/Deals/logo8.png";
import logo9 from "../../assets/Home/Deals/logo9.jpg";
import logo10 from "../../assets/Home/Deals/logo10.jpg";

import p1 from "../../assets/Home/Deals/product1.png";
import p2 from "../../assets/Home/Deals/product2.png";
import p3 from "../../assets/Home/Deals/product3.png";
import p4 from "../../assets/Home/Deals/product4.png";
import p5 from "../../assets/Home/Deals/product5.png";
import p6 from "../../assets/Home/Deals/product6.png";
import p7 from "../../assets/Home/Deals/product7.png";
import p8 from "../../assets/Home/Deals/product8.png";
import p9 from "../../assets/Home/Deals/product9.png";
import p10 from "../../assets/Home/Deals/product10.jpg";

const deals = [
  {
    id: 1,
    logo: logo1,
    image: p1,
    title: "Chia Seeds",
    oldPrice: "₹1198",
    newPrice: "₹429",
    startsFrom: "₹429",
    profit: "Flat Rs 180 Profit",
    label: "NEW BRAND",
  },
  {
    id: 2,
    logo: logo2,
    image: p2,
    title: "Wireless Bluetooth Earbud",
    oldPrice: "₹1199",
    newPrice: "₹599",
    startsFrom: "₹599",
    profit: "Flat 12% Profit",
    label: "NEW BRAND",
  },
  {
    id: 3,
    logo: logo3,
    image: p3,
    title: "Flat ₹450 Off on Products over ₹999",
    oldPrice: "",
    newPrice: "Flat ₹450 Off",
    startsFrom: "₹349",
    profit: "Upto 20% Profit",
    label: "MONSOON SALE",
  },
  {
    id: 4,
    logo: logo4,
    image: p4,
    title: "Upto 80% Off Across Categories",
    oldPrice: "",
    newPrice: "Upto 80% Off",
    startsFrom: "₹999",
    profit: "Flat 6% Profit",
    label: "FLASH SALE",
  },
  {
    id: 5,
    logo: logo5,
    image: p5,
    title: "Foot Spa Pedicure Silicone Socks",
    oldPrice: "₹1199",
    newPrice: "₹599",
    startsFrom: "₹599",
    profit: "Flat 12% Profit",
    label: "NEW BRAND",
  },
  {
    id: 6,
    logo: logo6,
    image: p6,
    title: "Buy Any 2 Products & Get 3 Freebies",
    oldPrice: "",
    newPrice: "",
    startsFrom: "₹149",
    profit: "Upto 21% Profit",
    label: "SPECIAL OFFER",
  },
  {
    id: 7,
    logo: logo7,
    image: p7,
    title: "2X Tees Cotton T-Shirts @ ₹699 Only",
    oldPrice: "",
    newPrice: "₹699 Only",
    startsFrom: "₹699",
    profit: "Flat 2% Profit",
    label: "TRENDING NOW",
  },
  {
    id: 8,
    logo: logo8,
    image: p8,
    title: "Min 50% Off on Marks & Spencer",
    oldPrice: "",
    newPrice: "Min 50% Off",
    startsFrom: "₹117",
    profit: "Upto 10% Profit",
    label: "FLASH DEAL",
  },
  {
    id: 9,
    logo: logo9,
    image: p9,
    title: "Buy 2 Products Get 2 Free",
    oldPrice: "",
    newPrice: "",
    startsFrom: "₹99",
    profit: "Flat 5% Profit",
    label: "GRAB NOW",
  },
  {
    id: 10,
    logo: logo10,
    image: p10,
    title: "Any 4 Products @ ₹888 Only",
    oldPrice: "",
    newPrice: "₹888 Only",
    startsFrom: "₹195",
    profit: "Flat 10% Profit",
    label: "NUTS DEAL",
  },
];

export default function FlashDeals() {
  const scrollRef = useRef(null);
  const [timers, setTimers] = useState({});
  const [copyStatus, setCopyStatus] = useState(Array(deals.length).fill("COPY LINK"));

  useEffect(() => {
    const endTimes = deals.reduce((acc, item) => {
      acc[item.id] = Date.now() + Math.floor(Math.random() * 10000000);
      return acc;
    }, {});

    const interval = setInterval(() => {
      const newTimers = {};
      deals.forEach((item) => {
        const diff = endTimes[item.id] - Date.now();
        if (diff > 0) {
          const hrs = Math.floor(diff / (1000 * 60 * 60));
          const mins = Math.floor((diff / (1000 * 60)) % 60);
          const secs = Math.floor((diff / 1000) % 60);
          newTimers[item.id] = `${hrs}h:${mins}m:${secs}s`;
        } else {
          newTimers[item.id] = "Expired";
        }
      });
      setTimers(newTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        <h2 className="text-lg md:text-xl font-bold text-black">FLASH DEALS</h2>
        <a href="#" className="text-sm text-gray-600 hover:text-black font-medium">VIEW ALL</a>
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
              <div className="absolute top-2 right-2  text-white text-[12px] font-semibold px-2 py-[2px]  shadow">
                {item.label}
              </div>

              <div className="flex justify-center bg-red-600 flex-col items-center">
                <div className="w-full  h-[30px] flex items-center justify-start mt-2 px-2">
                  <img src={item.logo} alt="brand" className="h-8 w-auto object-contain rounded-full" />
                </div>
                <img src={item.image} alt="product" className="h-49 object-contain cursor-pointer mt-2" />
              </div>

              <div className="bg-red-600 text-white text-sm md:text-md font-bold text-center py-1 ">
                DEAL ENDS IN <span className="ml-1">{timers[item.id] || "..."}</span>
              </div>

              <div className="grid grid-cols-2 text-[11px] mt-2 px-2 gap-2">
                <div className="bg-gray-100 rounded px-2 py-2">
                  <span className="block font-semibold text-[12px]">STARTING FROM</span>
                <span className="text-[22px]">  {item.startsFrom}</span>
                </div>
                <div className="bg-gray-100 rounded px-2 py-2">
                  <span className="block font-semibold text-[12px]">PER SALE YOU EARN</span>
                 <span className="text-[14px]"> {item.profit}</span>
                </div>
              </div>

              <div className="flex flex-col-1 gap-2 mt-4 px-2 pb-3">
                <button
                  onClick={() => handleCopy(idx)}
                  className="w-full text-sm  md:text-md py-2 border rounded-full cursor-pointer font-medium"
                >
                  {copyStatus[idx]}
                </button>
                <button
                  onClick={handleShare}
                  className="w-full text-sm md:text-md bg-green-500 text-white rounded-full cursor-pointer hover:bg-green-600 transition flex items-center justify-center gap-1 py-2"
                >
                  <FaWhatsapp className="text-white text-xl" /> SHARE NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md cursor-pointer    p-2 hover:scale-110 transition"
        >
          <FaChevronRight  className="text-3xl"/>
        </button>
      </div>
    </div>
  );
}
