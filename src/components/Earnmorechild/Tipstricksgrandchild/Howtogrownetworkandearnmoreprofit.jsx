import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";

const Howtogrownetworkandearnmoreprofit = () => {
  const [copied, setCopied] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/Fr0irwBLZsk?si=J6y1uhqXj9Ifr2hy";
  const shareText = `Check out this video on how to change language in EarnKaro: ${videoUrl}`;

  // ✅ Copy handler
  const handleCopy = () => {
    navigator.clipboard.writeText(videoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // revert icon after 2 seconds
  };

  return (
    <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg max-w-7xl mx-auto mt-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          How to grow network and earn more profit?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Remember, there is a difference between Referral Earnings and Partner Profit Earnings</li>
            <li>Referral Earnings is when someone downloads the EarnKaro app from your referral link. After that whenever their profit is confirmed you get 10% of their Profit in your EarnKaro account</li>
            <li>You get Partner Profit Earnings when an order is placed from your EarnKaro Profit Link that you shared of a specific retailer... Please check Profit Rates section to know more about Profit offered by different EarnKaro partner sites.</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-4">
          {/* Video */}
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Share Buttons */}
          <div className="flex gap-4">
            {/* ✅ WhatsApp Share */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full shadow hover:bg-green-600"
            >
              <FaWhatsapp size={20} />
            </a>

            {/* ✅ Email Share */}
            <a
              href={`mailto:?subject=How to change language in EarnKaro&body=${encodeURIComponent(shareText)}`}
              className="bg-gray-400 text-white p-3 rounded-full shadow hover:bg-gray-500"
            >
              <FaEnvelope size={20} />
            </a>

            {/* ✅ Copy Link */}
            <button
              onClick={handleCopy}
              className={`p-3 rounded-full shadow text-white ${
                copied ? "bg-green-600" : "bg-red-400 hover:bg-red-500"
              }`}
            >
              {copied ? <FaCheck size={20} /> : <FaCopy size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howtogrownetworkandearnmoreprofit;
