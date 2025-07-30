import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileBG from '../assets/MyProfile/ProfileBG.png';
import MainDetails from '../components/MyProfile/MainDetails';

const MainProfile = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-black text-xl font-semibold"
      : "text-gray-500 text-xl font-semibold";

  return (
    <div className="m-4 md:m-10">
      {/* Breadcrumbs */}
      <nav className="mb-4 md:mb-6">
        <NavLink to="/" className={linkStyle}>Home / </NavLink>
        <NavLink className={linkStyle}>Profile</NavLink>
      </nav>

      {/* Name box & Info */}
      <section
        className="flex flex-col lg:flex-row justify-between bg-center bg-cover m-2 md:m-5 p-4 md:p-5 rounded-lg space-y-4 lg:space-y-0 lg:space-x-6"
        style={{ backgroundImage: `url(${ProfileBG})` }}
      >
        {/* Name box */}
        <div className="flex items-center space-x-4 md:space-x-6 m-2 px-4 md:px-10 py-4 md:py-5 border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-b-[5px] border-[rgba(255,255,255,0.3)] rounded-lg">
          <span className="bg-white text-green-700 rounded-full w-14 h-14 md:w-18 md:h-18 flex items-center justify-center text-2xl md:text-3xl font-bold">M</span>
          <span className="text-white text-xl md:text-2xl font-semibold">MyName</span>
        </div>

        {/* Info boxes */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
          <div className="flex flex-col items-center text-white px-6 md:px-10 py-3 md:py-5 border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-b-[5px] border-[rgba(255,255,255,0.3)] rounded-lg">
            <span className="font-semibold text-lg md:text-2xl">User ID</span>
            <span className="font-semibold text-lg md:text-2xl">474541</span>
          </div>
          <div className="flex flex-col items-center text-white px-6 md:px-10 py-3 md:py-5 border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-b-[5px] border-[rgba(255,255,255,0.3)] rounded-lg">
            <span className="font-semibold text-lg md:text-2xl">Total Profit</span>
            <span className="font-semibold text-lg md:text-2xl">₹0</span>
          </div>
        </div>
      </section>

      {/* Detail containers */}
      <MainDetails />
    </div>
  );
}

export default MainProfile;
