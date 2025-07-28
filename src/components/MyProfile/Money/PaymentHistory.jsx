import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import PaymentEmpty from '../../../assets/PaymentHistory/payment_empty_img.svg'
import { Link, useLocation } from 'react-router-dom'

const PaymentHistory = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const linkClass = (path) =>
    `block px-4 py-3 text-sm sm:text-base md:text-lg border-b border-gray-200 hover:bg-gray-100 ${
      isActive(path)
        ? 'text-green-600 font-semibold bg-gray-100 border-l-4 border-green-500'
        : ''
    }`

  return (
    <div className="bg-gray-100 px-4 sm:px-6 md:px-10 py-4 min-h-screen">
      {/* Breadcrumbs */}
      <div className="relative z-10 mb-4">
        <Breadcrumbs className="text-black" />
      </div>

      {/* Responsive layout: stack on small screens */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="bg-white w-full lg:w-64 rounded-md shadow-sm">
          <nav className="flex flex-col">
            <Link to="/my-earnings" className={linkClass('/my-earnings')}>
              My Earnings
            </Link>
            <Link to="/reports" className={linkClass('/reports')}>
              Reports
            </Link>
            <Link to="/profit-not-tracked" className={linkClass('/profit-not-tracked')}>
              Profit Didn't Track?
            </Link>
            <Link to="/request-payment" className={linkClass('/request-payment')}>
              Request Payment
            </Link>
            <Link to="/payment-history" className={linkClass('/payment-history')}>
              Payment History
            </Link>
            <Link to="/account-settings" className={linkClass('/account-settings')}>
              Account Settings
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-white rounded-md shadow-sm p-4 sm:p-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Payment History</h2>
          <hr className="mb-6 border-gray-300" />

          <div className="flex flex-col items-center justify-center text-center">
            <img
              src={PaymentEmpty}
              alt="No payment requested"
              className="w-28 h-28 sm:w-32 sm:h-32 my-12"
            />
            <p className="text-xl sm:text-2xl font-medium mb-2">
              Hey, you have not requested any payment yet
            </p>
            <p className="text-base sm:text-xl font-medium mb-6">
              More transactions, more Profit, more withdrawals!
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white text-lg sm:text-xl py-2 px-5 sm:px-6 rounded">
              Make Link Now
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PaymentHistory
