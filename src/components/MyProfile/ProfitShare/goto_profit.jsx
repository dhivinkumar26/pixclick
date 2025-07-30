// src/components/ProfitShare.js

import React from "react";
import Goto1 from "./../../../assets/Profit/goto1.png"; // Add the correct paths for your images
import Goto2 from "./../../../assets/Profit/goto2.png";
import Goto3 from "./../../../assets/Profit/goto3.png";
import Goto4 from "./../../../assets/Profit/goto4.png";

const ProfitShare = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header Section */}
      <header className="text-center py-10">
        <div className="text-yellow-400 font-bold text-6xl  mb-2">₹</div><br />
        <h1 className="text-4xl text-yellow-400 font-semibold mb-4 "><u>Profit Share</u></h1>
        <p className="text-xl">by PixClick</p>
        <p className="text-lg mt-2">The simplest way to share your Affiliate Earnings with your buyers</p>
      </header>

      {/* How It Works Section */}
      <section className="px-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">How It Works</h2>
        <div className="flex justify-center items-center space-x-8">
          {/* First Step */}
          <div className="bg-black text-center p-6 rounded-lg shadow-lg w-80">
            <img src={Goto1} alt="Step 1" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400">Set Your Profit Percentage</h3>
            <p className="mt-2 text-sm">Set the profit share percentage for your buyers.</p>

          </div>

          {/* Second Step */}
          <div className="bg-black text-center p-6 rounded-lg shadow-lg w-80">
            <img src={Goto2} alt="Step 2" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400">Create & Share Profit Links</h3>
            <p className="mt-2 text-sm">Create links to share your profit.</p>
          </div>
        </div>

        {/* Second Row of Steps */}
        <div className="flex justify-center items-center space-x-8 mt-10">
          {/* Third Step */}
          <div className="bg-black text-center p-6 rounded-lg shadow-lg w-80">
            <img src={Goto3} alt="Step 3" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400">Buyers Get Cashback</h3>
            <p className="mt-2 text-sm">Buyers receive cashback as Amazon Gift Cards.</p>
          </div>

          {/* Fourth Step */}
          <div className="bg-black text-center p-6 rounded-lg shadow-lg w-80">
            <img src={Goto4} alt="Step 4" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400">PixClick Credit</h3>
            <p className="mt-2 text-sm">Your earnings are credited to your PixClick account.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
            
          <button className="bg-yellow-400 text-black px-12 py-2 rounded-lg text-md font-bold">Login</button><br />
          <button className="text-sm mt-8 mb-8"><u>Terms & Conditions</u></button>
        </div>
      </section>
    </div>
  );
};

export default ProfitShare;
