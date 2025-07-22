// components/Header.js
import React from 'react';

function Header() {
  return (
    <div className="container mx-auto bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-md p-6 flex items-center justify-between text-white mt-4 px-6">
      <div className="flex items-center">
        <div className="bg-white text-green-700 font-bold w-12 h-12 flex items-center justify-center rounded-full mr-4 text-xl">
          M
        </div>
        <div>
          <h2 className="text-xl font-semibold">Mayakannan C</h2>
        </div>
      </div>
      <div className="flex space-x-6">
        <div className="text-right">
          <p className="text-sm">User ID</p>
          <p className="font-bold">4516964</p>
        </div>
        <div className="text-right">
          <p className="text-sm">Total Profit</p>
          <p className="font-bold">₹30</p>
        </div>
      </div>
    </div>
  );
}

export default Header;