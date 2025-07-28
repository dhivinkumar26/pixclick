import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileBG from '../assets/MyProfile/ProfileBG.png'
import MainDetails from '../components/MyProfile/MainDetails'

const MainProfile = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-black text-sm sm:text-base font-semibold"
      : "text-gray-500 text-sm sm:text-base font-semibold"

  return (
    <div className="m-4 sm:m-8">
      {/* Breadcrumbs */}
      <nav className="mb-4">
        <NavLink to="/" className={linkStyle}>Home / </NavLink>
        <NavLink className={linkStyle}>Profile</NavLink>
      </nav>

      {/* Name and Stats Section */}
      <section
        className="flex flex-col gap-4 lg:flex-row justify-between bg-center bg-cover p-4 sm:p-6 rounded-lg"
        style={{ backgroundImage: `url(${ProfileBG})` }}
      >
        {/* Left: Name and Icon */}
        <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-sm border-[1.5px] border-white/30 rounded-lg">
          <span className="bg-white text-green-700 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold">
            M
          </span>
          <span className="text-white text-lg sm:text-xl font-semibold">MyName</span>
        </div>

        {/* Right: ID & Profit */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex flex-col items-center text-white p-4 bg-white/20 backdrop-blur-sm border-[1.5px] border-white/30 rounded-lg w-full sm:w-auto">
            <span className="font-semibold text-base sm:text-lg">User ID</span>
            <span className="font-semibold text-base sm:text-lg">474541</span>
          </div>
          <div className="flex flex-col items-center text-white p-4 bg-white/20 backdrop-blur-sm border-[1.5px] border-white/30 rounded-lg w-full sm:w-auto">
            <span className="font-semibold text-base sm:text-lg">Total Profit</span>
            <span className="font-semibold text-base sm:text-lg">₹0</span>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <div className="mt-6">
        <MainDetails />
      </div>
    </div>
  )
}

export default MainProfile
