import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="flex space-x-2 text-gray-600 mb-4">
    <Link to="/" className="hover:underline">Home</Link>
    <span>/</span>
    <span className="font-semibold">Partners</span>
  </div>
);

export default Header;
