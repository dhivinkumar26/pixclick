import React, { useState } from "react";
import { Link2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProfitLinkForm() {
  const navigate = useNavigate();
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleMakeLinkClick = () => {
    if (!link.trim()) {
      setShowModal(true); // show popup if empty
    } else {
      navigate("/profitrates"); // or your page
    }
  };

  return (
    <div className="flex-1 flex justify-center px-3 sm:px-4 py-6">
      <div className="bg-white shadow p-4 sm:p-6 w-full max-w-[1203px] relative">
        <h2 className="text-center text-xl sm:text-3xl font-bold mb-6 sm:mb-9">
          Make your own Profit Links in Seconds
        </h2>

        <p className="text-center text-sm text-gray-600 mb-6 sm:mb-7 px-1">
          Paste a link from our active partner sites in the box below to make a link & share it.
        </p>

        <div className="flex justify-center mb-4">
          <Link to="/partners">
            <button className="text-green-600 border border-green-600 px-5 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-50 text-sm sm:text-lg">
              SEE PARTNERS & PROFIT RATES
            </button>
          </Link>
        </div>

        <div className="bg-white px-3 sm:px-4 py-2 rounded-full shadow-inner max-w-[600px] w-full mx-auto flex items-center gap-2 sm:gap-3 border border-gray-200 mb-3">
          <div className="bg-green-500 rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shadow">
            <Link2 className="text-white w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Paste homepage or product link here"
            className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleMakeLinkClick}
            className="bg-green-600 text-white px-5 sm:px-6 py-2 rounded-full hover:bg-green-700 text-sm"
          >
            MAKE PROFIT LINK
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded shadow p-4 w-80 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-3 text-gray-700 text-xl"
              >
                &times;
              </button>
              <div className="flex flex-col items-center">
                <img src="/notekaro-logo.png" alt="NoteKaro" className="h-6 mb-2" />
                <div className="border-t w-full border-gray-300 mb-3"></div>
                <p className="text-gray-700">Please enter URL</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
