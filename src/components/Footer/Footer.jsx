import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className=" p-4 md:p-7 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About EarnKaro */}
        <div>
          <h3 className="text-green-500 font-semibold mb-3">About PixClick</h3>
          <ul className="space-y-2">
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">About Us</a>
            </li>
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">Blog</a>
            </li>
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Useful Reads */}
        <div>
          <h3 className="text-green-500 font-semibold mb-3">Useful Reads</h3>
          <ul className="space-y-2">
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">Terms and Conditions</a>
            </li>
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">Privacy & Cookie Policy</a>
            </li>
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">Anti-Spam Policy</a>
             </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-green-500 font-semibold mb-3">Connect With Us</h3>
          <ul className="space-y-2">
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">Get Help</a>
            </li>
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">Telegram</a>
            </li>
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">YouTube</a>
            </li>
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">Instagram</a>
            </li>
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">Facebook</a>
            </li>
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">Twitter</a>
            </li>
            <li className="group flex items-center space-x-2">
              <span className="transition-transform duration-200 group-hover:translate-x-1">›</span>
              <a href="#" className="hover:text-red-500">LinkedIn</a>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-green-500 font-semibold mb-3">Download App</h3>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="w-32"
            />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className=" bg-gray-900 border-t border-gray-900 text-center py-4 text-gray-300 text-sm relative">
        (C) Copyright 2025 PixClick. All Rights Reserved.
        
        {/* Scroll to top */}
        
      </div>
    </footer>
  );
};

export default Footer;
