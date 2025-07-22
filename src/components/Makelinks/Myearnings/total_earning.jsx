import React, { useState, useEffect } from 'react';
import {
  FaChevronLeft,
  FaInfoCircle,
  FaChevronDown,
  FaChevronUp,
  FaInfo
} from 'react-icons/fa';

const MyEarnings = () => {
  const [openSection, setOpenSection] = useState(null);
  const [spinSecondIcon, setSpinSecondIcon] = useState(false);
  const [showModal, setShowModal] = useState(false); // NEW: Modal state

  useEffect(() => {
    setSpinSecondIcon(true);
    const timer = setTimeout(() => {
      setSpinSecondIcon(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (sectionName) => {
    setOpenSection((prev) => (prev === sectionName ? null : sectionName));
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans w-full mb-10">
      {/* Top green gradient */}
      <div className="w-full bg-gradient-to-b from-green-600 to-green-500 h-16 md:h-20 lg:h-28"></div>

      {/* Main content wrapper */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 -mt-12 sm:-mt-16 lg:-mt-20">
        {/* Breadcrumb */}
        <div className="flex text-sm sm:text-base text-white mb-5 sm:mb-6">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="mx-1">/</span>
          <span className="font-semibold">My Earnings</span>
        </div>

        {/* Main content */}
        <main>
          {/* Total Earnings Card */}
          <section className="bg-white rounded-lg shadow-md p-5 sm:p-7 mb-7 sm:mb-9">
            <div className="flex flex-col md:flex-row justify-between items-start sm:items-center">
              <div className="w-full md:w-auto mb-4 sm:mb-0">
                <div className="flex items-center mb-2">
                  <h1 className="font-semibold text-gray-800 text-lg sm:text-xl mr-2">Total Earnings</h1>
                  <span className="ml-2 text-gray-400 text-sm cursor-pointer border border-gray-400 rounded-full w-5 h-5 flex items-center justify-center">?</span>
                </div>

                <div className="flex items-center text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  <span className="mr-3">₹30.00</span>
                  <button
                    className="flex items-center text-green-600 text-base sm:text-lg font-medium hover:underline py-1 px-2 -ml-2"
                    aria-label="Go back"
                  >
                    <FaChevronLeft className="mr-1 text-xs sm:text-sm" /> Back
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-gray-200">
                  <div className="mb-2 sm:mb-0">
                    <p className="text-gray-900 font-semibold text-lg sm:text-xl">₹30.00</p>
                    <p className="text-gray-500 text-sm sm:text-base">Total Profit Earnings</p>
                  </div>
                  <div className="hidden sm:block border-l border-dotted border-gray-400 h-12 mx-4"></div>
                  <div>
                    <p className="text-gray-900 font-semibold text-lg sm:text-xl">₹0.00</p>
                    <p className="text-gray-500 text-sm sm:text-base">Total Referral Earnings</p>
                  </div>
                </div>
              </div>

              {/* Donut Chart Placeholder */}
              <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-green-500 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 rounded-full bg-green-300"></div>
                <div className="absolute inset-0 rounded-full border-[6px] sm:border-[8px] border-green-700 border-l-transparent border-b-transparent transform rotate-[135deg]"></div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full relative z-10"></div>
              </div>
            </div>
          </section>

          {/* Profit Breakup Card */}
          <section className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection('profit')}>
              <h2 className="font-semibold text-gray-800 text-lg sm:text-xl">PROFIT BREAK UP</h2>
              {openSection === 'profit' ? (
                <FaChevronUp className="text-green-600 text-lg sm:text-xl" />
              ) : (
                <FaChevronDown className="text-green-600 text-lg sm:text-xl" />
              )}
            </div>

            {openSection === 'profit' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-300 pt-4 pb-2">
                  <div className="text-center md:text-left">
                    <p className="text-green-600 font-semibold text-lg sm:text-xl">₹0.00</p>
                    <p className="text-gray-600 text-sm sm:text-base">Confirmed Profit (Available For Payment)</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-green-600 font-semibold text-lg sm:text-xl">₹30.00</p>
                    <p className="text-gray-600 text-sm sm:text-base">Pending Profit</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-green-600 font-semibold text-lg sm:text-xl">₹0.00</p>
                    <p className="text-gray-600 text-sm sm:text-base">Paid Profit</p>
                  </div>
                </div>
                <div className="border-b border-dotted border-gray-400 my-2"></div>
                <div
                  className="flex items-center text-green-600 text-sm sm:text-base cursor-pointer hover:underline"
                  onClick={() => setShowModal(true)}
                >
                  What’s This <span className="ml-2 text-green-700 text-sm cursor-pointer border border-green-700 rounded-full w-5 h-5 flex items-center justify-center">?</span>
                </div>
              </>
            )}
          </section>

          {/* Referral Breakup Card */}
          <section className="bg-white rounded-lg shadow-md p-4 sm:p-8">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection('referral')}>
              <h2 className="font-semibold text-gray-800 text-lg sm:text-xl">REFERRAL BREAK UP</h2>
              {openSection === 'referral' ? (
                <FaChevronUp className="text-green-600 text-lg sm:text-xl" />
              ) : (
                <FaChevronDown className="text-green-600 text-lg sm:text-xl" />
              )}
            </div>

            {openSection === 'referral' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-300 pt-4 pb-2">
                  <div className="text-center md:text-left">
                    <p className="text-green-600 font-semibold text-lg sm:text-xl">₹0.00</p>
                    <p className="text-gray-600 text-sm sm:text-base">Confirmed Referral (Available For Payment)</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-green-600 font-semibold text-lg sm:text-xl">₹30.00</p>
                    <p className="text-gray-600 text-sm sm:text-base">Pending Referral</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-green-600 font-semibold text-lg sm:text-xl">₹0.00</p>
                    <p className="text-gray-600 text-sm sm:text-base">Paid Referral</p>
                  </div>
                </div>
                <div className="border-b border-dotted border-gray-400 my-2"></div>
                <div
                  className="flex items-center text-green-600 text-sm sm:text-base cursor-pointer hover:underline"
                  onClick={() => setShowModal(true)}
                >
                  What’s This <span className="ml-2 text-green-700 text-sm cursor-pointer border border-green-700 rounded-full w-5 h-5 flex items-center justify-center">?</span>
                </div>
              </>
            )}
          </section>
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 bg-black/80 bg-opacity-30 z-40"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
              <h3 className="text-lg font-semibold mb-4">Modal title</h3>
              <p className="mb-4">This is your modal content. Explain what the “What’s This” means here.</p>
              <div className="flex justify-end">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyEarnings;
