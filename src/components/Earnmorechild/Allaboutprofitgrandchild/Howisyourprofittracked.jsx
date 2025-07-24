import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";

const Howisyourprofittracked = () => {
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
         When & How is your Profit tracked?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The average tracking time for most of the retailers is between 24 to 72 hours</li>
            <li>Profit will not track if you open EarnKaro Profit Link on retailer app, remember to do transaction from retailer's browser site.</li>
            <li>Profit tracks in pending status</li>
            <li>Pending profit gets confirmed within 60-90 days once the retailer shares the report and confirms that the order is successfully delivered.</li>
            <li>The profit for returned/replaced/cancelled orders will also get cancelled</li>
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

export default Howisyourprofittracked;
