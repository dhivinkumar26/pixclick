import React from "react";
import {
  FaSearch,
  FaCube,
  FaRupeeSign,
  FaLightbulb,
  FaUserFriends,
  FaUsers,
  FaComments,
} from "react-icons/fa";
import Breadcrumbs from "../Breadcrumbs";
import TopCornerImg from "../../../assets/HowEKWorks/top-corner.png";

const cards = [
  { title: "EARNKARO BASICS", icon: <FaCube size={50} className="text-green-600" /> },
  { title: "ALL ABOUT PROFIT", icon: <FaRupeeSign size={50} className="text-green-600" /> },
  { title: "TIPS & TRICKS", icon: <FaLightbulb size={50} className="text-green-600" /> },
  { title: "REAL USER STORIES", icon: <FaUserFriends size={50} className="text-green-600" /> },
  { title: "AFFILATERS", icon: <FaUsers size={50} className="text-green-600" /> },
  { title: "CONTACT US", icon: <FaComments size={50} className="text-green-600" /> },
];

const HowEKWorks = () => {
  return (
    <div className="bg-gray-100 relative overflow-hidden">

      {/* Breadcrumb */}
      <div className="bg-green-600 text-white px-4 py-3 text-sm sm:text-base font-medium z-10 relative">
        <Breadcrumbs />
      </div>

      {/* Search Box */}
      <div className="w-full mx-auto px-4 -mt-3 z-10 relative">
        <div className="bg-white shadow-md rounded-md flex items-center px-4 py-3">
          <FaSearch className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full outline-none text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 sm:px-8 py-8 max-w-5xl mx-auto z-10 relative">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative h-50 bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transition hover:shadow-lg"
          >
            <img src={TopCornerImg} alt="img" className="z-0 bg-no-repeat bg-cover bg-center absolute right-0 top-0 rounded-xl" />
            <div className="my-8 z-1">{card.icon}</div>
            <div className="text-xs sm:text-sm md:text-lg font-semibold wrap text-gray-800">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowEKWorks;
