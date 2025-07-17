import React from "react";
import { FaSearch, FaUser, FaLink, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-green-950 p-4 md:p-5">
      {/* Left: Menu icon and logo */}
      <div className="flex items-center space-x-3">
        <a href="#">
          <FaBars className="text-white text-2xl md:text-3xl cursor-pointer" />
        </a>
        <a href="#" className="text-white text-2xl md:text-4xl font-bold">
          <span className="text-green-400">PIX</span>CLICK
        </a>
      </div>

      {/* Middle: Search box - hidden on small screens */}
      <div className="hidden md:flex flex-1 max-w-sm text-lg mx-4">
        <input
          type="text"
          placeholder="Search for partners or deals"
          className="flex-1 px-3 py-1 rounded-l-full bg-green-930 border border-white text-white placeholder-white focus:outline-none"
        />
        <button className="bg-white px-5 py-3 rounded-r-full">
          <FaSearch className="text-green-930" />
        </button>
      </div>

      {/* Right: Menu items */}
      <div className="hidden md:flex items-center space-x-5 text-white text-sm md:text-xl">
        <a href="#" className="flex items-center space-x-1 hover:text-green-400">
          <span className="bg-yellow-400 text-green-930 rounded-full px-1">₹ </span>
          <span>Profit Rates</span>
        </a>
        <a href="#" className="flex items-center space-x-1 hover:text-green-400">
          <FaLink />
          <span>Make Links</span>
        </a>
        <a href="#" className="flex items-center space-x-1 border-l border-white pl-4 hover:text-green-400">
          <FaUser />
          <span>My Profile</span>
        </a>
      </div>

      {/* Mobile right icons: only visible on small screens */}
      <div className="flex md:hidden items-center space-x-3 text-white text-xl">
        <a href="#">
          <FaSearch className="cursor-pointer" />
        </a>
        <a href="#">
          <FaUser className="cursor-pointer" />
        </a>
      </div>
    </header>
  );
};

export default Header;
