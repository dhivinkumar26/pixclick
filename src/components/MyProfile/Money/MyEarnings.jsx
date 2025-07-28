import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { GiWallet } from "react-icons/gi";
import { CiCircleQuestion } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiCurrencyRupee } from "react-icons/hi2";
import { BsHeadset } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PopupBGImg from '../../../assets/MyProfile/payment_popup_bg.png';
import PopupImg from '../../../assets/MyProfile/payment_popup_top.png';

const MyEarnings = () => {
  const cards = [
    { icon: FaClipboardList, title: "Order Details", direction: "View More", path: "#" },
    { icon: BsGraphUpArrow, title: "Reports", direction: "Know More", path: "/reports" },
    { icon: HiCurrencyRupee, title: "Request Payment", direction: "Get Paid", path: "/my-earnings?popup=true" },
    { icon: BsHeadset, title: "Get Help", direction: "Learn More", path: "/profit-track" },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('popup') === 'true') {
      setShowModal(true);
    }
  }, [location.search]);

  const closeModal = () => {
    setShowModal(false);
    navigate('/my-earnings', { replace: true });
  };

  return (
    <div className="relative">
      {/* Top Banner */}
      <div className="absolute h-[100px] w-full bg-gradient-to-b from-[#75d268] to-[#41a234] z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <Breadcrumbs className='text-white'/>
      </div>

      {/* Earnings Summary */}
      <section className="relative z-10 container mx-auto px-4 py-5">
        <div className="flex flex-col gap-4 bg-white p-6 sm:p-10 rounded-2xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl">Total Earnings</span>
                <CiCircleQuestion className="text-xl" />
              </div>
              <span className="text-2xl sm:text-3xl font-semibold">₹0.00</span>
            </div>
            <div className="h-20 w-20 rounded-full border border-gray-100 shadow bg-white flex items-center justify-center">
              <GiWallet className="text-red-400 text-5xl" />
            </div>
          </div>
          <hr className="border-b-2 border-dotted border-gray-300" />
          <span className="text-gray-400 text-sm sm:text-base">
            Profit will appear here within 72 hours of order being placed
          </span>
        </div>
      </section>

      {/* Cards */}
      <section className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map(({ icon: Icon, title, direction, path }, index) => (
            <Link to={path} key={index}>
              <div className="bg-green-600 p-5 text-white flex flex-col rounded-lg shadow h-[220px]"
                   style={{ backgroundImage: 'linear-gradient(to top, #75d269 0%, #40a133 80%)' }}>
                <Icon className="text-red-400 text-xl p-3 h-13 w-13 bg-white rounded-full mb-2" />
                <span className="text-lg sm:text-xl">{title}</span>
                <hr className="border-b-2 border-dotted border-white my-4" />
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-sm sm:text-lg">{direction}</span>
                  <FaGreaterThan className="text-xs sm:text-sm" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl text-center relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-500 hover:text-black text-4xl transition-transform duration-300 hover:rotate-90"
            >
              &times;
            </button>

            <div className="py-5 px-4">
              <img src={PopupImg} alt="Earning" className="mx-auto py-4 my-6 max-w-[80%]" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 py-2">Share More to Earn More</h2>
              <p className="text-base sm:text-lg py-4 leading-relaxed">
                <span className="block">You need a minimum of ₹10 Confirmed Profit to transfer your earnings</span>
                <span className="block">to your bank account. All you need to do is share Crazy Deals via</span>
                <span className="block">EarnKaro!</span>
              </p>

              <div className="relative">
                <img src={PopupBGImg} alt="" className="absolute inset-0 w-full h-full object-cover rounded-xl z-0" />
                <button className="relative z-10 bg-green-600 border-b-4 border-green-700 text-white text-lg sm:text-xl px-6 py-3 my-6 hover:bg-green-700 transition rounded-lg">
                  SHARE BEST DEALS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEarnings;
