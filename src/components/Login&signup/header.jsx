import React, { useState } from "react";
import { FaInfoCircle, FaQuestionCircle, FaEnvelope } from "react-icons/fa"; // Combined imports for cleaner code

const App = () => { // Renamed to App for default export
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Header container: Uses flexbox to align items, responsive padding, and shadow
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-14 lg:px-52 bg-white shadow font-inter">
      {/* Logo */}
      <div className="flex items-center space-x-1 text-2xl md:text-3xl font-bold">
        <span className="text-green-600">PIX</span>
        <span className="text-gray-800">CLICK</span>
      </div>

      {/* Center navigation (visible on larger screens) */}
      <nav className="hidden md:flex items-center space-x-6 text-gray-500 text-base relative">
        {/* Company dropdown */}
        <div
          className="flex items-center space-x-1 cursor-pointer hover:text-black relative"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)} // Open on hover
          onMouseLeave={() => setIsOpen(false)} // Close on mouse leave
          aria-haspopup="true" // ARIA attribute for dropdown
          aria-expanded={isOpen} // ARIA attribute for dropdown state
        >
          <span>Company</span>
          <svg
            className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true" // ARIA attribute for decorative icon
          >
            <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.25 8.27a.75.75 0 0 1-.02-1.06z" />
          </svg>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-lg z-20 border border-gray-100">
              <ul className="flex flex-col py-2">
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-gray-700 hover:text-gray-900 transition-colors rounded-t-md">
                  <FaInfoCircle className="text-blue-500" />
                  <span>About Us</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <FaQuestionCircle className="text-yellow-500" />
                  <span>How PixClick Works</span>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-gray-700 hover:text-gray-900 transition-colors rounded-b-md">
                  <FaEnvelope className="text-purple-500" /> {/* Changed color for variety */}
                  <span>Contact Us</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        <a href="#" className="hover:text-black transition-colors">Blog</a>
      </nav>

      {/* Login button */}
      <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-red-600 transition-colors shadow-md text-sm md:text-base">
        Login or Sign up
      </button>
    </header>
  );
};

export default App;
