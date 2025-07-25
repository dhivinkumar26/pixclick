import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileBG from '../assets/MyProfile/ProfileBG.png'
import MainDetails from '../components/MyProfile/MainDetails';

const MainProfile = () => {

    const linkStyle = ({ isActive }) =>
        isActive
            ? "text-black text-xl font-semibold"
            : "text-gray-500 text-xl font-semibold";

    return (
        <div className='m-10'>
            {/* Breadcrumbs */}
            <nav>
                <NavLink to="/" className={linkStyle}>Home / </NavLink>
                <NavLink className={linkStyle}>Profile</NavLink>
            </nav>
            {/* Name box */}
            <section className='flex justify-between bg-center bg-cover m-5 p-5 rounded-lg overflow-x-auto hide-scrollbar' style={{ backgroundImage: `url(${ProfileBG})` }}>
                <div className='m-5 px-10 py-5 flex items-center space-x-6 border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-b-[5px] border-[rgba(255,255,255,0.3)] rounded-lg'>
                    <span className="bg-white text-green-700 rounded-full w-18 h-18 flex items-center justify-center text-3xl font-bold">M</span>
                    <span className="text-white text-2xl font-semibold">MyName</span>
                </div>
                <div className='flex justify-between items-center space-x-60'>
                    <div className="flex flex-col items-center justify-between text-white m-5 px-15 py-5 border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-b-[5px] border-[rgba(255,255,255,0.3)] rounded-lg">
                        <span className="font-semibold text-2xl">User ID</span>
                        <span className="font-semibold text-2xl">474541</span>
                    </div>
                    <div className="flex flex-col items-center text-white m-5 px-10 py-5 border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-b-[5px] border-[rgba(255,255,255,0.3)] rounded-lg">
                        <span className="font-semibold text-2xl">Total Profit</span>
                        <span className="font-semibold text-2xl">₹0</span>
                    </div>
                </div>
            </section>
            {/* Detail containers */}
            <MainDetails/>
        </div>
    )
}

export default MainProfile
