import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import { GiWallet } from "react-icons/gi";
import { CiCircleQuestion } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiCurrencyRupee } from "react-icons/hi2";
import { BsHeadset } from "react-icons/bs";


const MyEarnings = () => {
  return (
    <div>
      <div className="absolute h-[100px] w-full bg-[linear-gradient(to_bottom,_#75d268_0%,_#41a234_75%)] z-0">
      </div>
      <div className="relative z-10 mx-50">
        <Breadcrumbs />
      </div>
      <section className="relative z-10 mx-50 py-5 bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col gap-2  px-10 py-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-5">
              <div className='flex items-center gap-2'>
                <span className='text-xl'>Total Earnings</span>
                <CiCircleQuestion className='text-xl font-bold' />
              </div>
              <span className='text-3xl font-semibold'>₹0.00</span>
            </div>
            <div className="h-20 w-20 rounded-full border border-gray-100 shadow bg-white flex items-center justify-center">
              <GiWallet className="text-red-400 text-5xl" />
            </div>
          </div>
          <hr className='border-b-2 border-dotted border-gray-400 my-4' />
          <span className='text-gray-400 text-lg'>Profit will appear here within 72 hours of order being placed</span>
        </div>
      </section>
      <section className='mx-50 my-10 rounded-2xl'>
        <div className="flex items-center justify-between">
          <div className="bg-green-400 ">
            <div className="h-20 w-20 rounded-full bg-white text-center ">
              <FaClipboardList className='text-red-400 text-3xl' />
            </div>
          </div>
          <div className="bg-green-400 ">
            <div className="h-20 w-20 rounded-full bg-white text-center ">
              <BsGraphUpArrow className="text-red-400 text-3xl" />
            </div>
          </div>
          <div className="bg-green-400 ">
            <div className="h-20 w-20 rounded-full bg-white text-center ">
              <HiCurrencyRupee className="text-red-400 text-3xl" />
            </div>
          </div>
          <div className="bg-green-400 ">
            <div className="h-20 w-20 rounded-full bg-white text-center ">
              <BsHeadset className="text-red-400 text-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyEarnings