import React, { useState } from "react";

export default function ProfitShareSection() {
  const [activeTab, setActiveTab] = useState('forYou');

  const steps = [
    "Decide how much Profit you want to share with your buyers",
    "Create & share Profit links",
    <>Buyers get Cashback as Amazon Gift Cards <span className="text-[10px]"><br />*T&C Apply</span></>,
    "Your earnings are credited to your EarnKaro account",
  ];

  const testimonials = [
    { name: "Himanshu", text: "I’ve been using Profit Share for 2 months, and I love it. Now I get more orders as I share Profit where the percentage is higher." },
    { name: "Neha", text: "With Profit Share, I doubled my earnings by offering buyers cashback as Gift Cards. It helped scale my earnings." },
    { name: "Raman", text: "Thanks to Profit Share, now I am a market leader. Buyers trust me and I can offer them higher profit percentages." },
  ];

  return (
    <div className="bg-black text-white font-sans py-8">
      {/* Header */}
      <div className="max-w-md mx-auto bg-gradient-to-br from-[#3b3b3b] via-gray-800 to-[#2b2b2b] rounded-2xl shadow-lg p-8 text-center space-y-2">
        <p className="text-xl text-yellow-400">Let’s Simplify the Joy Of</p>
        <p className="text-4xl font-semibold">Earning & Saving More</p><br /><hr />
        <p className="text-sm text-gray-400">PixClick's Exclusive Tool</p>
        <span className="inline-block mt-3 bg-yellow-500 text-black px-6 py-2 rounded-xl text-md font-bold">PROFIT SHARE</span>
      </div>

      {/* How Profit Sharing Works */}
      <div className="max-w-md mx-auto mt-8 p-4 rounded-2xl bg-gradient-to-br from-[#3b3b3b] via-gray-800 to-[#2b2b2b] shadow-lg">
        <p className="text-l font-semibold text-yellow-400 mb-4">How Profit Sharing works</p>
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-gradient-to-br from-yellow-700/20 via-gray-800 to-gray-900 rounded-lg p-3 flex items-center space-x-3">
              <img src="https://via.placeholder.com/40x70" alt="" className="w-10 h-20 object-contain" />
              <p className="text-md text-gray-200">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-md mx-auto mt-8 p-4 rounded-2xl bg-gradient-to-br from-[#3b3b3b] via-gray-800 to-[#2b2b2b] shadow-lg">
        <p className="text-l font-semibold text-yellow-400 mb-4">Watch the video to know more</p>
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
        <p className="text-l font-semibold text-yellow-400 mb-4">Benefits for you and your buyers</p>
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
        <p className="text-l font-semibold text-yellow-400 mb-4">See what our users have to say</p>
        <div className="space-y-3">
          {testimonials.map((user, idx) => (
            <div key={idx} className="bg-gray-800 rounded p-3 text-md border border-yellow-500">
              <p className="font-semibold mb-1 text-yellow-300">{user.name}</p>
              <p className="text-gray-200">{user.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-md mx-auto mt-8 p-4 rounded-2xl bg-gradient-to-br from-[#3b3b3b] via-gray-800 to-[#2b2b2b] shadow-lg text-center space-y-3">
        <div className="flex justify-center items-center space-x-2">
          <img src="/path-to-your-logo.png" alt="Profit Share Logo" className="h-5" />
          <span className="text-yellow-400 font-semibold tracking-widest text-l">PROFIT SHARE</span>
        </div>
        <hr className="border-gray-600 mx-auto max-w-xs" />
        <div className="flex justify-center space-x-4 text-md text-gray-300">
          {["Terms & Conditions", "Privacy Policy"].map((label, idx) => (
            <a key={idx} href="#" className="flex items-center space-x-1 hover:text-yellow-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8.414A2 2 0 0017.586 7L13 2.414A2 2 0 0011.586 2H4zm0 2h7v4h4v8H4V4z" />
              </svg>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
      <br />
      <div className="max-w-md mx-auto mt-4 text-center">
        <button className="bg-yellow-500 text-black text-md px-6 py-2 rounded-xl font-bold hover:bg-yellow-400 transition">
          Go to Profit Share
        </button>
      </div>
    </div>
    
  );
}
