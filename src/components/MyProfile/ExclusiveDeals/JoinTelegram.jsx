import React from 'react'
import ProfileBG from '../../../assets/JoinTele/EKTeleImg.jpg'
import TeleBGImg from '../../../assets/JoinTele/TeleBGpattern.svg'
import { FaTelegram } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const JoinTelegram = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center min-h-screen bg-gradient-to-tl from-green-200 via-blue-200 to-green-100"
        style={{ backgroundImage: `url(${TeleBGImg}), linear-gradient(to top left, rgba(34,193,195,0.5), rgba(253,187,45,0.5))`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Top Bar: Telegram logo and Download Button */}
        <div className="flex w-full bg-gray-100 justify-between items-center py-3 px-3">
          <div className="text-blue-500 text-4xl md:text-5xl flex items-center space-x-3">
            <FaTelegram />
            <span className='text-black text-2xl font-medium'>Telegram</span>
          </div>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-sm md:text-base">
            Download
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg w-100 max-w-3xl p-6 md:p-8 my-10 flex flex-col items-center justify-center">

          <img src={ProfileBG} className='rounded-full h-30 w-30' alt="" />

          {/* Channel Info Section */}
          <div className="text-center mb-6">
            <div className="text-3xl md:text-2xl font-bold text-gray-800">EarnKaro (Loot Deals & Offers)</div>
            <div className="text-sm md:text-base text-gray-500 mt-2">43,240 subscribers</div>
          </div>

          {/* Description */}
          <div className="text-center mb-6 text-xs sm:text-sm md:text-base">
            <p>* EarnKaro Official Telegram Channel</p>
            <p>* Find best loot deals, coupons, offers, and discounts</p>
            <p>* Convert deals in your EarnKaro links and share with friends to earn money...</p>
          </div>

          {/* View in Telegram Button */}
          <div className="text-center">
            <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-sm md:text-base">
              View in Telegram
            </button>
          </div>

          <Link to='' className='text-gray-400 py-5 hover:underline'>Preview Channel</Link>
        </div>
      </div>
    </div>
  )
}

export default JoinTelegram
