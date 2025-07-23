import React, { useState } from "react";
import { FaSearch, FaUser, FaLink, FaBars, FaTimes, FaTag, FaFemale, FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

// Sidebar Component (Overlay remains bg-opacity-5)
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay - Remains bg-opacity-5 */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-20 z-40" // Already bg-opacity-5 from last update
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-green-950">CATEGORY</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-green-950">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <nav className="mt-2 h-[calc(100%-64px)] overflow-y-auto">
          <ul>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              <Link to="/offers" className="flex items-center w-full" onClick={onClose}>
                <FaTag className="mr-3 text-gray-700 text-lg" />
                Today's Exclusive Offers
                <span className="ml-auto text-gray-400">+</span>
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              {/* <Link to="/retailers" className="flex items-center w-full" onClick={onClose}>
                <img src="https://img.icons8.com/ios-filled/24/333333/shop.png" alt="Retailer Category" className="mr-3"/>
                Retailer Category
                <span className="ml-auto text-gray-400">+</span>
              </Link> */}
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              <Link to="/electronics" className="flex items-center w-full" onClick={onClose}>
                <img src="https://img.icons8.com/ios-filled/24/333333/electronics.png" alt="Electronics" className="mr-3"/>
                Electronics
                <span className="ml-auto text-gray-400">+</span>
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              <Link to="/grocery" className="flex items-center w-full" onClick={onClose}>
                <img src="https://img.icons8.com/ios-filled/24/333333/shopping-basket.png" alt="Grocery & Essentials" className="mr-3"/>
                Grocery & Essentials
                <span className="ml-auto text-gray-400">+</span>
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              <Link to="/mensfashion" className="flex items-center w-full" onClick={onClose}>
                <img src="https://img.icons8.com/ios-filled/24/333333/t-shirt.png" alt="Men's Fashion" className="mr-3"/>
                Men's Fashion
                <span className="ml-auto text-gray-400">+</span>
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              <Link to="/womensfashion" className="flex items-center w-full" onClick={onClose}>
                <FaFemale className="mr-3 text-gray-700 text-lg" />
                Women's Fashion
                <span className="ml-auto text-gray-400">+</span>
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              <Link to="/men-footwear" className="flex items-center w-full" onClick={onClose}>
                <img src="https://img.icons8.com/ios-filled/24/333333/mens-shoe.png" alt="Men's Footwear" className="mr-3"/>
                Men's Footwear
                <span className="ml-auto text-gray-400">+</span>
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              <Link to="/women-footwear" className="flex items-center w-full" onClick={onClose}>
                <img src="https://img.icons8.com/ios-filled/24/333333/womens-shoe.png" alt="Women's Footwear" className="mr-3"/>
                Women's Footwear
                <span className="ml-auto text-gray-400">+</span>
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              <Link to="/beauty" className="flex items-center w-full" onClick={onClose}>
                <img src="https://img.icons8.com/ios-filled/24/333333/lipstick.png" alt="Beauty Products" className="mr-3"/>
                Beauty Products
                <span className="ml-auto text-gray-400">+</span>
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              <Link to="/health-personal-care" className="flex items-center w-full" onClick={onClose}>
                <FaHeartbeat className="mr-3 text-gray-700 text-lg" />
                Health & Personal Care
                <span className="ml-auto text-gray-400">+</span>
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              <Link to="/baby-products" className="flex items-center w-full" onClick={onClose}>
                <img src="https://img.icons8.com/ios-filled/24/333333/baby-bottle.png" alt="Baby Products" className="mr-3"/>
                Baby Products
                <span className="ml-auto text-gray-400">+</span>
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-base">
              <Link to="/home-kitchen" className="flex items-center w-full" onClick={onClose}>
                <img src="https://img.icons8.com/ios-filled/24/333333/kitchen-room.png" alt="Home & Kitchen" className="mr-3"/>
                Home & Kitchen
                <span className="ml-auto text-gray-400">+</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

// Header Component
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsProfileModalOpen(false); // Close other overlays
    setIsMobileSearchVisible(false); // Close search if sidebar opens
  };

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
    setIsMobileSearchVisible(false); // Close search if profile modal opens
    setIsSidebarOpen(false); // Close sidebar if profile modal opens
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchVisible(!isMobileSearchVisible);
    setIsProfileModalOpen(false); // Close profile modal if search opens
    setIsSidebarOpen(false); // Close sidebar if search opens
  };

  return (
    <>
      <header className="relative bg-green-950 p-4 md:p-5">
        <div className="flex items-center justify-between">
          {/* Left: Menu icon and logo */}
          <div className="flex items-center space-x-3">
            <a href="#" onClick={toggleSidebar}>
              <FaBars className="text-white text-2xl md:text-3xl cursor-pointer" />
            </a>
            <Link to="/" className="text-white text-2xl md:text-4xl font-bold">
              <span className="text-green-400">PIX</span>CLICK
            </Link>
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

          {/* Right: Mobile and Web Icons */}
          <div className="flex items-center space-x-3 text-white text-xl">
            {/* Mobile Search Icon - visible only on mobile (md:hidden) */}
            <div className="md:hidden">
              <button onClick={toggleMobileSearch}>
                <FaSearch className="cursor-pointer" />
              </button>
            </div>

            {/* Web Navigation (md:flex) */}
            <div className="hidden md:flex items-center space-x-4 text-lg">
              <Link to="/partners" className="flex items-center space-x-1 hover:text-green-400">
                <span className="bg-yellow-400 text-green-930 rounded-full px-0.5 py-0.5 text-sm">₹ </span>
                <span>Profit Rates</span>
              </Link>
              <Link to="/make-links" className="flex items-center space-x-1 hover:text-green-400">
                <FaLink className="text-lg" />
                <span>Make Links</span>
              </Link>
              <Link to="/profile" className="flex items-center space-x-1 border-l border-white pl-4 hover:text-green-400">
                <FaUser className="text-lg" />
                <span>My Profile</span>
              </Link>
            </div>

            {/* Mobile Profile Icon - visible only on mobile (md:hidden) */}
            <div className="md:hidden relative">
              <button onClick={toggleProfileModal} className="text-white">
                <FaUser className="cursor-pointer" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Input (Conditionally Rendered below main header) */}
        <div
          className={`md:hidden absolute left-0 w-full bg-green-950 transition-all duration-300 ease-in-out ${
            isMobileSearchVisible ? 'top-full opacity-100 h-auto p-4' : 'top-full opacity-0 h-0 overflow-hidden pt-0 pb-0'
          }`}
        >
          <div className="flex items-center bg-green-930 rounded-full">
            <input
              type="text"
              placeholder="Search for partners or deals..."
              className="flex-1 px-4 py-2 bg-transparent text-white placeholder-white focus:outline-none"
            />
            <button onClick={toggleMobileSearch} className="text-white p-2">
              <FaTimes className="text-lg" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Profile Modal (Bottom Sheet Design) */}
      {isProfileModalOpen && (
        <>
          {/* Backdrop Overlay - Changed bg-opacity-20 to bg-opacity-5 */}
          <div
            className="fixed inset-0  bg-opacity-5 z-40 md:hidden" // *** Changed from bg-opacity-20 to bg-opacity-5 ***
            onClick={toggleProfileModal} // Close modal when clicking outside
          ></div>

          {/* Profile Modal Content */}
          <div
            className={`fixed bottom-0 left-0 w-full bg-white rounded-t-lg shadow-lg p-4 z-50 transform transition-transform duration-300 ease-out md:hidden ${
              isProfileModalOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="flex justify-between items-center border-b pb-3 mb-3">
              <h3 className="text-lg font-semibold text-green-950">My Account</h3>
              <button onClick={toggleProfileModal} className="text-gray-600 hover:text-green-950">
                <FaTimes className="text-2xl" />
              </button>
            </div>
            <nav>
              <ul>
                <li className="mb-2">
                  <Link
                    to="/partners"
                    className="flex items-center p-3 text-gray-800 hover:bg-gray-100 rounded-md text-base"
                    onClick={toggleProfileModal}
                  >
                    <span className="bg-yellow-400 text-green-930 rounded-full px-1 mr-3 text-sm">₹ </span>
                    Profit Rates
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/make-links"
                    className="flex items-center p-3 text-gray-800 hover:bg-gray-100 rounded-md text-base"
                    onClick={toggleProfileModal}
                  >
                    <FaLink className="mr-3 text-gray-700 text-lg" /> Make Links
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="flex items-center p-3 text-gray-800 hover:bg-gray-100 rounded-md text-base"
                    onClick={toggleProfileModal}
                  >
                    <FaUser className="mr-3 text-gray-700 text-lg" /> My Profile
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}

      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Header;