import React, { useState } from "react";
import first from "./../../../assets/Profit/profit1.png";
import second from "./../../../assets/Profit/profit2.png";
import third from "./../../../assets/Profit/profit5.png";
import fourth from "./../../../assets/Profit/profit4.png";
import Himanshu from "./../../../assets/Profit/avatar1.png";
import Neha from "./../../../assets/Profit/avatar2.png";
import Raman from "./../../../assets/Profit/avatar3.png";
import { Link } from "react-router-dom";
export default function ProfitShareSection() {
  const [activeTab, setActiveTab] = useState('forYou');

  const steps = [
    "Decide how much Profit you want to share with your buyers",
    "Create & share Profit links",
    <>Buyers get Cashback as Amazon Gift Cards <span className="text-[10px]"><br />*T&C Apply</span></>,
    "Your earnings are credited to your EarnKaro account",
  ];

  // 🪄 Images array: each image corresponds to each step
  const images = [first, second, fourth, third];

const testimonials = [
  { name: "Himanshu", text: "I’ve been using Profit Share for 2 months, and I love it. Now I get more orders as I share Profit where the percentage is higher.", avatar: Himanshu },
  { name: "Neha", text: "With Profit Share, I doubled my earnings by offering buyers cashback as Gift Cards. It helped scale my earnings.", avatar: Neha },
  { name: "Raman", text: "Thanks to Profit Share, now I am a market leader. Buyers trust me and I can offer them higher profit percentages.", avatar: Raman },
];


  return (
    <div className="bg-black text-white font-sans py-8">
      {/* Header */}
      <div className="max-w-md mx-auto bg-gradient-to-br from-[#3b3b3b] via-gray-800 to-[#2b2b2b] rounded-2xl shadow-lg p-8 text-center space-y-2">
        <p className="text-xl text-yellow-400">Let’s Simplify the Joy Of</p>
        <p className="text-4xl font-semibold">Earning & Saving More</p>
        <hr className="my-2 border-gray-600" />
        <p className="text-sm text-gray-400">PixClick's Exclusive Tool</p>
        <span className="inline-block mt-3 text-yellow-500 px-6 py-2 text-3xl font-bold">PROFIT SHARE</span>
      </div>

      {/* How Profit Sharing Works */}
      <div className="max-w-md mx-auto mt-8 p-4 rounded-2xl bg-gradient-to-br from-[#3b3b3b] via-gray-800 to-[#2b2b2b] shadow-lg">
        <p className="text-lg font-semibold text-yellow-400 mb-4">How Profit Sharing works</p>
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-gradient-to-br from-yellow-700/20 via-gray-800 to-gray-900 rounded-lg p-3 flex items-center space-x-3">
              <img src={images[idx]} alt={`Step ${idx + 1}`} className="w-15 h-25 object-contain" />
              <p className="text-md text-gray-200">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-md mx-auto mt-8 p-4 rounded-2xl bg-gradient-to-br from-[#3b3b3b] via-gray-800 to-[#2b2b2b] shadow-lg">
        <p className="text-lg font-semibold text-yellow-400 mb-4">Watch the video to know more</p>
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Profit Share Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Benefits Tabs */}
      <div className="max-w-md mx-auto mt-8 p-4 rounded-2xl bg-gradient-to-br from-[#3b3b3b] via-gray-800 to-[#2b2b2b] shadow-lg">
        <p className="text-lg font-semibold text-yellow-400 mb-4">Benefits for you and your buyers</p>
        <div className="flex border-b border-gray-700 mb-3">
          {['forYou', 'forBuyers'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-md px-2 py-1 transition ${
                activeTab === tab ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400'
              }`}
            >
              {tab === 'forYou' ? 'For You' : 'For Buyers'}
            </button>
          ))}
        </div>

        {activeTab === 'forYou' && (
          <ul className="text-md list-disc list-inside space-y-1 text-gray-300">
            <li>100% free platform to increase affiliate earnings</li>
            <li>The more lucrative your deals; the more you earn</li>
            <li>Build more credibility with your buyers</li>
          </ul>
        )}

        {activeTab === 'forBuyers' && (
          <ul className="text-md list-disc list-inside space-y-1 text-gray-300">
            <li>Buyers save extra money on top of all discounts</li>
            <li>Buyers choose cashback as Amazon Gift Card or UPI*</li>
            <li>Buyers spend cashback easily without hassle</li>
          </ul>
        )}
        <p className="text-[10px] mt-1 text-gray-500">*T&C Apply</p>
      </div>

      {/* Testimonials */}
      <div className="max-w-md mx-auto mt-8 p-4 rounded-2xl bg-gradient-to-br from-[#3b3b3b] via-gray-800 to-[#2b2b2b] shadow-lg">
        <p className="text-lg font-semibold text-yellow-400 mb-4">See what our users have to say</p>
        <div className="space-y-3">
  {testimonials.map((user, idx) => (
    <div key={idx} className="bg-gray-800 rounded p-3 text-md border border-yellow-500 flex justify-between items-center space-x-3">
      <div className="flex-1">
        <p className="font-semibold mb-1 text-yellow-300">{user.name}</p>
        <p className="text-gray-200">{user.text}</p>
      </div>
      <img src={user.avatar} alt={user.name} className="w-25 h-25 rounded-full object-cover border border-yellow-400" />
    </div>
  ))}
</div>

      </div>

      {/* Footer */}
      <div className="max-w-md mx-auto mt-8 p-4 rounded-2xl bg-gradient-to-br from-[#3b3b3b] via-gray-800 to-[#2b2b2b] shadow-lg text-center space-y-3">
        <div className="flex justify-center items-center space-x-2">
          
          <span className="text-yellow-400 font-semibold tracking-widest text-xl">PROFIT SHARE</span>
        </div>
        <hr className="border-gray-600 mx-auto max-w-xs" />
        <div className="flex justify-center space-x-4 text-md text-gray-300">
         {[
  { label: "Terms & Conditions", path: "/terms-conditions" },
  { label: "Privacy Policy", path: "/privacy" },
].map((item, idx) => (
  <Link
    key={idx}
    to={item.path}
    className="flex items-center space-x-1 hover:text-yellow-400"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8.414A2 2 0 0017.586 7L13 2.414A2 2 0 0011.586 2H4zm0 2h7v4h4v8H4V4z" />
    </svg>
    <span>{item.label}</span>
  </Link>
))}
        </div>
      </div>

      {/* Button outside footer */}
      <div className="max-w-md mx-auto mt-4 text-center">
        <Link to="/goto">
        <button className="bg-yellow-500 text-black text-md px-6 py-2 rounded-xl font-bold hover:bg-yellow-400 transition">
          Go to Profit Share
        </button></Link>
      </div>
    </div>
  );
}
