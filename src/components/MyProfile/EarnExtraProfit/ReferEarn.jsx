import { useState } from "react";
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import ReferEarnBGImg from '../../../assets/ReferEarn/refer-earn-bg.png';

const ReferEarn = () => {
  const [referralLink] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  return (
    <div
      className="bg-cover bg-center text-white text-center"
    >
      {/* Section Heading */}
      <div className="h-[300px]"
        style={{ backgroundImage: `url(${ReferEarnBGImg})` }}>
        <h2 className="text-2xl sm:text-3xl font-bold py-5 pt-10">Chance to Earn Extra!</h2>
        <p className="text-sm sm:text-base">Invite Your Friends To EarnKaro</p>
        <p className="text-sm py-3">
          Share your invite link & earn 10% of the profit your friends make - <strong>FOREVER!</strong>
        </p>
      </div>

      {/* Referral Card */}
      <div className="bg-white text-gray-800 rounded-md shadow-lg -mt-20 max-w-3xl mx-auto p-6">
        {/* Referral Link */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-10">
          <label className="w-full sm:w-auto font-medium">Your Referral link</label>
          <input
            readOnly
            type="text"
            value={referralLink}
            className="w-full flex-1 border border-gray-300 rounded px-4 py-2 text-sm"
          />
          <button
            onClick={handleCopy}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            COPY LINK
          </button>
        </div>

        {/* Invite Options */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Email Invite */}
          <div className="flex-1">
            <p className="font-semibold mb-5">Invite By Email</p>
            <input
              type="email"
              placeholder="Enter Your Friend's Email ID"
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm mb-5"
            />
            <button className="bg-green-600 text-white px-4 py-2 w-full rounded hover:bg-green-700">
              SEND INVITE
            </button>
          </div>

          {/* OR Divider */}
          <div className="hidden md:flex flex-col justify-center items-center">
            <span className="text-gray-400">OR</span>
          </div>

          {/* Social Invite */}
          <div className="flex-1">
            <p className="font-semibold mb-5">Invite by Social Media</p>
            <div className="space-y-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${referralLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                <FaFacebookF /> Facebook
              </a>
              <a
                href={`https://t.me/share/url?url=${referralLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
              >
                <FaTelegramPlane /> Telegram
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${referralLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferEarn;
