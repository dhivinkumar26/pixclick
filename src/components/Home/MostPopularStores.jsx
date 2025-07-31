import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/Home/mostPopularBanner.png";
import { FaWhatsapp } from "react-icons/fa";
import hsbc from "../../assets/Home/hsbc.png";
import axis from "../../assets/Home/axis.png";
import flipkart from "../../assets/Home/flipkart.png";
import ajio from "../../assets/Home/ajio.png";
import shopsy from "../../assets/Home/shopsy.png";
import amazon from "../../assets/Home/amazon.png";
import dotkey from "../../assets/Home/dot&key.jpg";
import buykaro from "../../assets/Home/buykaro.jpg";
import caffeine from "../../assets/Home/caffeine.jpg";

const cards = [
  {
    id: 1,
    title: "HSBC PLATINUM CREDIT CARD",
    logo: hsbc,
    profit: "Flat Rs 3000 Profit",
    url: "https://hsbc.com",
  },
  {
    id: 2,
    title: "AXIS MYZONE CREDIT CARD",
    logo: axis,
    profit: "Flat Rs 2380 Profit",
    url: "https://axisbank.com",
  },
  {
    id: 3,
    title: "AXIS FLIPKART CREDIT CARD",
    logo: axis,
    profit: "Flat Rs 2380 Profit",
    url: "https://axisbank.com",
  },
  {
    id: 4,
    title: "UPTO 85% OFF",
    logo: flipkart,
    profit: "Upto 8% Profit",
    url: "https://flipkart.com",
  },
  {
    id: 5,
    title: "RED HOT SALE",
    logo: ajio,
    profit: "Upto 12.5% Profit",
    url: "https://ajio.com",
  },
  {
    id: 6,
    title: "SHOPSY DHAMAKA SALE",
    logo: shopsy,
    profit: "Upto 10% Profit",
    url: "https://shopsy.in",
  },
  {
    id: 7,
    title: "THE BEAUTY SALE",
    logo: amazon,
    profit: "Upto 10.2% Profit",
    url: "https://amazon.in",
  },
  {
    id: 8,
    title: "UPTO 20% OFF",
    logo: dotkey,
    profit: "Upto 15% Profit",
    url: "https://dotandkey.com",
  },
  {
    id: 9,
    title: "CROMA OFFER",
    logo: buykaro,
    profit: "Upto 5% Profit",
    url: "https://croma.com",
  },
  {
    id: 10,
    title: "TATA CLIQ OFFER",
    logo: caffeine,
    profit: "Upto 11% Profit",
    url: "https://tatacliq.com",
  },
];

const MostPopularStores = () => {
  const containerRef = useRef(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    navigator.clipboard.writeText(cards[index].url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleShare = () => {
    const message = encodeURIComponent("Check out this great deal!");
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="">
      {/* Breadcrumb */}
      <div className="bg-[#eeeeee] py-3 px-4 text-sm md:text-base">
        <Link to="/" className="text-gray-700 hover:text-black font-medium">
          Home
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-black font-semibold">Most Popular Stores</span>
      </div>

      {/* Banner Image */}
      <div className="py-0">
        <img src={bannerImg} alt="Most Popular" className="w-full h-full object-cover" />
      </div>

      {/* Main Section */}
      <div className="bg-gray-100 py-10 min-h-screen">
        <div className="px-4">
          <h2 className="text-3xl text-center font-medium mb-14">
            Most Popular Stores
          </h2>

          <div className="relative">
            <div
              ref={containerRef}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {cards.map((card, idx) => (
                <div key={idx} className="w-full">
                  <div className="bg-white rounded-md shadow-sm overflow-hidden relative flex flex-col justify-between h-full">
                    {/* Badge */}
                    <div className="bg-red-600 text-white text-sm font-semibold px-2 py-1 absolute top-0 left-0 rounded-br-md">
                      {card.title}
                    </div>

                    {/* Logo */}
                    <div className="pt-10 pb-4 flex justify-center">
                      <img
                        src={card.logo}
                        alt="logo"
                        className="h-16 object-contain cursor-pointer"
                      />
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

                    {/* Action Buttons */}
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
                        {copiedIndex === idx ? "Copied" : "Copy Link"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularStores;
