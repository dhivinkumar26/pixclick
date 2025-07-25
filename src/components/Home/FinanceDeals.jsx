import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import card1 from "../../assets/Home/cards/card1.png";
import card2 from "../../assets/Home/cards/card2.png";
import card3 from "../../assets/Home/cards/card3.jpg";
import card4 from "../../assets/Home/cards/card4.jpg";
import card5 from "../../assets/Home/cards/card5.jpg";
import card6 from "../../assets/Home/cards/card6.png";
import card7 from "../../assets/Home/cards/card7.jpg";
import card8 from "../../assets/Home/cards/card8.png";
import card9 from "../../assets/Home/cards/card9.png";
import card10 from "../../assets/Home/cards/card10.png";

const cards = [
  { image: card1, profit: "Rs 2380", title: "Axis My Zone Credit Card" },
  { image: card2, profit: "Rs 2240", title: "SBI Click Credit Card" },
  { image: card3, profit: "Rs 3000", title: "HSBC Platinum Credit Card" },
  { image: card4, profit: "Rs 2380", title: "Axis My Zone Credit Card" },
  { image: card5, profit: "Rs 2240", title: "SBI Click Credit Card" },
  { image: card6, profit: "Rs 3000", title: "HSBC Platinum Credit Card" },
  { image: card7, profit: "Rs 2380", title: "Axis My Zone Credit Card" },
  { image: card8, profit: "Rs 2240", title: "SBI Click Credit Card" },
  { image: card9, profit: "Rs 3000", title: "HSBC Platinum Credit Card" },
  { image: card10, profit: "Rs 2380", title: "Axis My Zone Credit Card" },
];

const FinanceDeals = () => {
  const scrollRef = useRef(null);
  const [copyStatus, setCopyStatus] = useState(Array(cards.length).fill("COPY LINK"));

  const scroll = (dir) => {
    const container = scrollRef.current;
    const scrollAmount = 320;
    container.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  const handleShare = () => {
    const message = encodeURIComponent("Check out this great deal!");
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.location.href = whatsappUrl;
  };

  const handleCopy = async (index) => {
    const newStatus = [...copyStatus];
    newStatus[index] = "Copying...";
    setCopyStatus(newStatus);

    try {
      await navigator.clipboard.writeText(`https://example.com/deal/${index}`);
      newStatus[index] = "Copied";
      setCopyStatus([...newStatus]);

      setTimeout(() => {
        newStatus[index] = "COPY LINK";
        setCopyStatus([...newStatus]);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);
      newStatus[index] = "Failed";
      setCopyStatus([...newStatus]);

      setTimeout(() => {
        newStatus[index] = "COPY LINK";
        setCopyStatus([...newStatus]);
      }, 2000);
    }
  };

  return (
    <div className="bg-[#e3e3e3] py-6">
      <div className="relative">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl ml-5 font-semibold">FINANCE DEALS</h2>
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-black flex items-center gap-1 mr-5"
          >
            VIEW ALL <FaChevronRight className="text-xs" />
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 cursor-pointer bg-white shadow-lg rounded hover:scale-110 transition hidden md:block"
          >
            <FaChevronLeft className="text-2xl" />
          </button>

          {/* Cards Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 px-6"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-[282px] max-w-[300px] bg-white shadow-md rounded-lg flex flex-col justify-between"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-t-lg object-cover cursor-pointer w-full"
                />
                <div className="px-2 py-3 space-y-2">
                  <p className="text-xs font-medium text-gray-600 text-center">PER SALE YOU EARN</p>
                  <p className="text-lg font-bold text-center">Flat {card.profit} Profit</p>
                  <div className="flex justify-between gap-2 pt-2">
                    <button
                      onClick={() => handleCopy(index)}
                      className="flex-1 text-sm py-2 border rounded-full cursor-pointer font-medium"
                    >
                      {copyStatus[index]}
                    </button>
                    <button
                      onClick={handleShare}
                      className="flex-1 text-sm bg-green-500 text-white rounded-full cursor-pointer hover:bg-green-600 transition flex items-center justify-center gap-1"
                    >
                      <FaWhatsapp className="text-white text-xl" /> SHARE NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg cursor-pointer rounded hover:scale-110 transition hidden md:block"
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceDeals;
