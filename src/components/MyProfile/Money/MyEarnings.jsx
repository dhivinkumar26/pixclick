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
import PopupBGImg from '../../../assets/MyProfile/payment_popup_bg.png'
import PopupImg from '../../../assets/MyProfile/payment_popup_top.png'

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
    // remove popup=true from URL
    navigate('/my-earnings', { replace: true });
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="absolute h-[100px] w-full bg-[linear-gradient(to_bottom,_#75d268_0%,_#41a234_75%)] z-0" />
      <div className="relative z-10 mx-50">
        <Breadcrumbs />
      </div>

      {/* Earnings Summary */}
      <section className="relative z-10 mx-50 py-5 bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col gap-2 px-10 py-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="text-xl">Total Earnings</span>
                <CiCircleQuestion className="text-xl font-bold" />
              </div>
              <span className="text-3xl font-semibold">₹0.00</span>
            </div>
            <div className="h-20 w-20 rounded-full border border-gray-100 shadow bg-white flex items-center justify-center">
              <GiWallet className="text-red-400 text-5xl" />
            </div>
          </div>
          <hr className="border-b-2 border-dotted border-gray-400 my-4" />
          <span className="text-gray-400 text-lg">
            Profit will appear here within 72 hours of order being placed
          </span>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-50 py-10 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, direction, path }, index) => (
            <Link to={path} key={index}>
              <div
                className="bg-green-600 p-5 text-white flex flex-col rounded-lg shadow h-[220px]"
                style={{
                  backgroundImage:
                    'linear-gradient(to top, #75d269 0%, #40a133 80%)',
                }}
              >
                <Icon className="text-red-400 text-xl p-3 h-16 w-16 bg-white rounded-full mb-2" />
                <span className="text-3xl font-normal">{title}</span>
                <hr className="border-b-2 border-dotted border-white my-5 w-full" />
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-lg font-normal">{direction}</span>
                  <FaGreaterThan className="text-sm" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Request Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full text-center relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-black hover:rotate-90 text-4xl transition-transform duration-300"
            >
              &times;
            </button>

            <div className="py-5">
              <img
                src={PopupImg}
                alt="Earning"
                className="mx-auto py-4 my-8"
              />
            </div>

            <h2 className="text-4xl font-semibold text-gray-700 py-3">
              Share More to Earn More
            </h2>

            <p className="text-medium text-xl py-6 block">
              <span className='block py-1'>You need a minimum of ₹10 Confirmed Profit to transfer your earnings</span>
              <span className='block py-1'>to your bank account. All you need to do is share Crazy Deals via</span>
              <span className='block py-1'>EarnKaro!</span>
            </p>

            <div className='relative'>
              <img src={PopupBGImg} className="absolute w-full rounded-xl" alt="" />
              <button className="relative bg-green-600 border-b-4 border-green-700 text-white text-xl px-6 py-2 my-10 hover:bg-green-700 transition">
                SHARE BEST DEALS
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default MyEarnings;
