// src/components/ProfitLinkForm.jsx
import { useRef } from "react";
import { FaLink, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../../assets/MakeLinks/img1.jpeg";
import img2 from "../../assets/MakeLinks/img2.png";
import img3 from "../../assets/MakeLinks/img3.jpeg";
import img4 from "../../assets/MakeLinks/img4.png";
import img5 from "../../assets/MakeLinks/img5.png";
import img6 from "../../assets/MakeLinks/img6.jpeg";
import img7 from "../../assets/MakeLinks/img7.jpeg";
import img8 from "../../assets/MakeLinks/img8.png";




export default function ProfitLinkForm() {
  const scrollRef = useRef();
  const logos = [img1, img2, img3, img4, img5, img6, img7,img8];

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += dir === "left" ? -200 : 200;
    }
  };

  return (
    <div className="flex-1 bg-[#f5f5f5] py-10 px-6">
      {/* Profit Link Box */}
      <div className="bg-white p-6 rounded shadow-sm mb-6">
        <h2 className="text-center text-xl font-semibold mb-2">
          Make your own <span className="font-bold">Profit Links</span> in Seconds
        </h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          Paste a link from our active partner sites in the box below to make a link & share it.
        </p>

        <div className="flex justify-center mb-4">
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 text-sm">
            SEE PARTNERS & PROFIT RATES
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-xl">
            <FaLink className="text-green-500 mr-3" />
            <input
              type="text"
              placeholder="Paste homepage or product link here"
              className="w-full text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700">
            MAKE PROFIT LINK
          </button>
        </div>
      </div>

      {/* Quick Convert Links */}
      <div className="bg-white p-6 rounded shadow-sm mb-6">
        <h3 className="text-center text-xl font-semibold mb-6">
          Quick Convert Homepage Links
        </h3>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-600 text-white p-2 rounded-full z-10"
          >
            <FaChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto no-scrollbar px-8"
          >
            {logos.map((logo, i) => (
              <div
                key={i}
                className="min-w-[150px] h-[90px] flex items-center justify-center rounded-lg shadow-md bg-white"
              >
                <img
                  src={logo}
                  alt={`brand-logo-${i}`}
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700">
            SEE OUR PARTNERS
          </button>
        </div>
      </div>

      {/* YouTube Video */}
      <div className="bg-white p-6 rounded shadow-sm mb-6">
        <h4 className="text-center text-md font-semibold mb-4">
          How to Make a Link Easily
        </h4>
        <div className="flex justify-center mb-4">
          <iframe
            width="560"
            height="315"
            src=" https://www.youtube.com/embed/bkhw3m8hkBI"
            title="How to Make Profit Links"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Tips Section */}
        <div className="text-sm text-gray-800 leading-relaxed px-4">
  <h2 className="font-semibold mb-3">Best Practices & Tips:</h2>
  <ul className="list-disc pl-4 space-y-4">
    <li>
      <span className="font-semibold">Ensure Link Format is Correct:</span>
      <div className="ml-5 mt-2 border-l-2 border-black pl-4 space-y-1 relative">
        <div className="flex items-start space-x-2">
          <div className="w-3 h-3 rounded-full border-2 border-black bg-white mt-1"></div>
          <span className="text-green-600">
            <strong>Right:</strong> https://www.oneplus.in
          </span>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-3 h-3 rounded-full border-2 border-black bg-white mt-1"></div>
          <span className="text-red-500">
            <strong>Wrong:</strong> oneplus.in (missing https://)
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-1 pl-5">Tip: Copy directly from the Address Bar and paste</p>
      </div>
    </li>
    <li>
      To convert links in Bulk, we have a special tool. Please contact <strong>support@earnkaro.com</strong> to get access.
    </li>
    <li>
      🚫 No profit applicable on App orders
    </li>
  </ul>
</div>

      </div>
    </div>
  );
}
