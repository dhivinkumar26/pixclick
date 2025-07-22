import React, { useState } from "react";
import { motion } from "framer-motion";
import super1 from "../../assets/Home/super1.png";
import super2 from "../../assets/Home/super2.png";
import super3 from "../../assets/Home/super3.png";
import super4 from "../../assets/Home/super4.png";

import accessories1 from "../../assets/Home/accessories1.png";
import accessories2 from "../../assets/Home/accessories2.png";
import accessories3 from "../../assets/Home/accessories3.png";
import accessories4 from "../../assets/Home/accessories4.png";

import electronics1 from "../../assets/Home/electronics1.png";
import electronics2 from "../../assets/Home/electronics2.png";
import electronics3 from "../../assets/Home/electronics3.jpg";


import mens1 from "../../assets/Home/mens1.png";
import mens2 from "../../assets/Home/mens2.png";
import mens3 from "../../assets/Home/mens3.png";
import mens4 from "../../assets/Home/mens4.png";

import personal1 from "../../assets/Home/personal1.jpg";
import personal2 from "../../assets/Home/personal2.png";
import personal3 from "../../assets/Home/personal3.png";
import personal4 from "../../assets/Home/personal4.png";

import footwear1 from "../../assets/Home/footwear1.png";
import footwear2 from "../../assets/Home/footwear2.png";
import footwear3 from "../../assets/Home/footwear3.png";
import footwear4 from "../../assets/Home/footwear4.png";

import womens1 from "../../assets/Home/womens1.png";
import womens2 from "../../assets/Home/womens2.png";
import womens3 from "../../assets/Home/womens3.png";
import womens4 from "../../assets/Home/womens4.png";
import womens5 from "../../assets/Home/womens5.png";
import womens6 from "../../assets/Home/womens6.png";

import womenFoot1 from "../../assets/Home/womenFoot1.png";
import womenFoot2 from "../../assets/Home/womenFoot2.png";
import womenFoot3 from "../../assets/Home/womenFoot3.png";
import womenFoot4 from "../../assets/Home/womenFoot4.png";

import grocery1 from "../../assets/Home/grocery1.png";
import grocery2 from "../../assets/Home/grocery2.jpg";
// import grocery3 from "../../assets/cards/grocery3.png";
// import grocery4 from "../../assets/cards/grocery4.png";

import beauty1 from "../../assets/Home/beauty1.png";
import beauty2 from "../../assets/Home/beauty2.png";
// import beauty3 from "../../assets/cards/beauty3.png";
// import beauty4 from "../../assets/cards/beauty4.png";

import home1 from "../../assets/Home/home1.png";
import home2 from "../../assets/Home/home2.jpg";
import home3 from "../../assets/Home/home3.png";
import home4 from "../../assets/Home/home4.png";

import baby1 from "../../assets/Home/baby1.png";
import baby2 from "../../assets/Home/baby2.png";

import bags1 from "../../assets/Home/bags1.png";
import bags2 from "../../assets/Home/bags2.png";
const tabs = [
  "Super Sellers", "Accessories", "Electronics", "Mens Fashion",
  "Personal Care", "Men's Footwear", "Women's Fashion", "Women's Footwear",
  "Grocery & Essentials", "Beauty", "Home & Kitchen", "BabyProducts", "Bags&Luggage"
];

const tabCardImages = {
  "Super Sellers": [super1, super2, super3, super4],
  "Accessories": [accessories1, accessories2, accessories3, accessories4],
  "Electronics": [electronics1, electronics2, electronics3],
  "Mens Fashion": [mens1, mens2, mens3, mens4],
  "Personal Care": [personal1, personal2, personal3, personal4],
  "Men's Footwear": [footwear1, footwear2, footwear3, footwear4],
  "Women's Fashion": [womens1, womens2, womens3, womens4, womens5, womens6],
  "Women's Footwear": [womenFoot1, womenFoot2, womenFoot3, womenFoot4],
  "Grocery & Essentials": [grocery1, grocery2],
  "Beauty": [beauty1, beauty2],
  "Home & Kitchen": [home1, home2, home3, home4],
  "BabyProducts": [baby1, baby2 ],
  "Bags&Luggage": [bags1, bags2] ,// reuse or replace with actual
};

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("Super Sellers");

  return (
    <div className="w-full bg-[#f4f4f4] py-4">
      {/* Tabs */}
      <div className="overflow-x-auto whitespace-nowrap border-b border-gray-300 px-2 md:px-4">
        <div className="flex gap-10 min-w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 whitespace-nowrap text-sm md:text-base cursor-pointer font-medium ${
                activeTab === tab ? "text-black border-b-2 border-red-500 font-semibold" : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-6 ">
        {tabCardImages[activeTab]?.map((img, index) => (
         <motion.div
            key={index}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, delay: index * 0 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg overflow-hidden shadow-sm bg-white cursor-pointer transition duration-300"
          >
            <img
              src={img}
              alt={`Card ${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TabSection;
