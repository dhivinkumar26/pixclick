import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
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
import logo1 from "../../assets/Home/brands/logo11.png";
import logo2 from "../../assets/Home/brands/logo22.jpg";
import logo3 from "../../assets/Home/brands/logo33.jpg";
import logo4 from "../../assets/Home/brands/logo44.png";
import logo5 from "../../assets/Home/brands/logo55.png";
import logo6 from "../../assets/Home/brands/logo66.png";
import logo7 from "../../assets/Home/brands/logo77.png";
import logo8 from "../../assets/Home/brands/logo88.png";
import logo9 from "../../assets/Home/brands/logo22.jpg";
import logo10 from "../../assets/Home/brands/logo11.png";

const allCards = [
  { title: "Axis Ace Credit Card", brand: "Axis", seller: "Bank Bazaar", price: 999, profit: "₹800", image: card1, logo: logo1 },
  { title: "SBI SimplyClick Card", brand: "SBI", seller: "CardExpert", price: 499, profit: "₹600", image: card2, logo: logo2 },
  { title: "HDFC Millennia Card", brand: "HDFC", seller: "PayNearby", price: 1000, profit: "₹700", image: card3, logo: logo3 },
  { title: "ICICI Coral Card", brand: "ICICI", seller: "CardDekho", price: 799, profit: "₹650", image: card4, logo: logo4 },
  { title: "Amazon Pay ICICI Card", brand: "ICICI", seller: "Amazon", price: 0, profit: "₹500", image: card5, logo: logo5 },
  { title: "Flipkart Axis Card", brand: "Axis", seller: "Flipkart", price: 500, profit: "₹550", image: card6, logo: logo6 },
  { title: "IndusInd Legend Card", brand: "IndusInd", seller: "IndusDeals", price: 1500, profit: "₹850", image: card7, logo: logo7 },
  { title: "AU Small Finance Zenith", brand: "AU Bank", seller: "AU Bazaar", price: 1200, profit: "₹800", image: card8, logo: logo8 },
  { title: "RBL Shoprite Card", brand: "RBL", seller: "RBL Express", price: 899, profit: "₹600", image: card9, logo: logo9 },
  { title: "YES First Preferred Card", brand: "YES Bank", seller: "YesKart", price: 1099, profit: "₹750", image: card10, logo: logo10 },
];

const uniqueBrands = [...new Set(allCards.map(card => card.brand))];
const uniqueSellers = [...new Set(allCards.map(card => card.seller))];

const FinanceDeals = () => {
  const [copyStatus, setCopyStatus] = useState(Array(allCards.length).fill("COPY LINK"));
  const [search, setSearch] = useState("");
  const [sortTab, setSortTab] = useState("Popularity");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSellers, setSelectedSellers] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const toggleSelection = (item, selectedItems, setSelectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
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
      newStatus[index] = "Failed";
      setCopyStatus([...newStatus]);
      setTimeout(() => {
        newStatus[index] = "COPY LINK";
        setCopyStatus([...newStatus]);
      }, 2000);
    }
  };

  const filteredCards = allCards
    .filter((card) => card.title.toLowerCase().includes(search.toLowerCase()))
    .filter((card) => selectedBrands.length ? selectedBrands.includes(card.brand) : true)
    .filter((card) => selectedSellers.length ? selectedSellers.includes(card.seller) : true)
    .filter((card) => {
      const min = parseInt(minPrice) || 0;
      const max = parseInt(maxPrice) || Infinity;
      return card.price >= min && card.price <= max;
    })
    .sort((a, b) => {
      switch (sortTab) {
        case "Discount":
          return b.profit.replace(/[^0-9]/g, '') - a.profit.replace(/[^0-9]/g, '');
        case "High Price":
          return b.price - a.price;
        case "Low Price":
          return a.price - b.price;
        case "Popularity":
        default:
          return 0;
      }
    });

  return (

    <div className="bg-[#f4f4f4] py-6 px-4 md:px-8">
         
      <div className="text-sm text-[#4F4F4F] md:text-[18px] py-5">
        <Link to="/" className="hover:underline text-gray-600">Home</Link> / <span className="font-medium text-black">Finance Deals</span>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Filter Sidebar */}
        <div className="w-full md:w-1/5 bg-white p-4 rounded shadow">
          <h3 className="font-semibold text-lg mb-3">FILTER BY</h3>

          {/* Price Filter */}
          <div className="mb-6">
            <details open>
              <summary className="cursor-pointer font-medium">Price</summary>
              <p className="text-sm mt-2">Enter a price range</p>
              <div className="flex items-center gap-2 mt-2">
                <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border p-1 w-full" placeholder="Min" />
                <span>-</span>
                <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border p-1 w-full" placeholder="Max" />
                <button className="bg-green-500 text-white px-3 py-1">GO</button>
              </div>
            </details>
          </div>

          {/* Seller Filter */}
          <div className="mb-6">
            <details open>
              <summary className="cursor-pointer font-medium">Seller</summary>
              <input type="text" placeholder="Search Seller" className="w-full border p-1 mt-2 mb-2" />
              <div className="max-h-40 overflow-y-auto pr-1">
                {uniqueSellers.map((seller) => (
                  <label key={seller} className="block text-sm mb-1">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedSellers.includes(seller)}
                      onChange={() => toggleSelection(seller, selectedSellers, setSelectedSellers)}
                    />
                    {seller}
                  </label>
                ))}
              </div>
            </details>
          </div>

          {/* Brand Filter */}
          <div>
            <details open>
              <summary className="cursor-pointer font-medium">Brand</summary>
              <input type="text" placeholder="Search Brand" className="w-full border p-1 mt-2 mb-2" />
              <div className="max-h-40 overflow-y-auto pr-1">
                {uniqueBrands.map((brand) => (
                  <label key={brand} className="block text-sm mb-1">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleSelection(brand, selectedBrands, setSelectedBrands)}
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </details>
          </div>
        </div>

              {/* Main Content */}
              <div className="flex-1">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">FINANCE DEALS</h2>
          <p className="text-sm text-gray-500 mt-1">Choose from {allCards.length} deals</p>
        </div>

        {/* Tab Filters */}
        <div className="grid grid-cols-4 bg-white text-center rounded-t-md shadow overflow-hidden">
          {["Popularity", "Discount", "High Price", "Low Price"].map((tab, i) => (
            <button
              key={tab}
              onClick={() => setSortTab(tab)}
              className={`py-3 text-sm font-medium relative ${
                sortTab === tab ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              {tab}
              {sortTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600" />
              )}
              {i < 3 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-5 bg-gray-300" />
              )}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {filteredCards.map((card, index) => (
            <div key={index} className="relative bg-white shadow rounded-lg flex flex-col justify-between">
              <div className="relative">
                <img src={card.image} alt={card.title} className="rounded-t-lg object-cover w-full" />
                <img
                  src={card.logo}
                  alt={`${card.brand} logo`}
                  className="absolute top-2 left-2 w-10 h-10 rounded-full bg-white p-1 shadow"
                />
              </div>
              <div className="px-3 py-4 space-y-2">
                <p className="text-sm font-medium text-gray-600 text-center">PER SALE YOU EARN</p>
                <p className="text-lg font-bold text-center">Flat {card.profit} Profit</p>
                <hr className="border-gray-300" />
                <div className="flex justify-between gap-2 pt-2">
                  <button
                    onClick={() => handleCopy(index)}
                    className="flex-1 text-xs py-2 border rounded-full cursor-pointer font-medium"
                  >
                    {copyStatus[index]}
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex-1 text-xs bg-green-500 text-white rounded-full cursor-pointer hover:bg-green-600 transition flex items-center justify-center gap-1"
                  >
                    <FaWhatsapp className="text-white text-base" /> SHARE NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
};

export default FinanceDeals;
