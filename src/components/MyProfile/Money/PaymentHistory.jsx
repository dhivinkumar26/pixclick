import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import PaymentEmpty from '../../../assets/PaymentHistory/payment_empty_img.svg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const PaymentHistory = () => {

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
  `block px-10 py-5 text-xl border-b border-gray-200 hover:bg-gray-100 ${
    isActive(path) ? 'text-green-600 font-medium bg-gray-100 border-l-2 border-green-500' : ''
  }`;

  return (
    <div className='bg-gray-100 px-10'>
      <div className="relative z-10">
        <Breadcrumbs className='text-black' />
      </div>

      <div className='flex justify-between gap-10 h-auto'>
        {/* sidebar */}
        <aside className="w-75 bg-white text-xlspace-y-5">
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
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white">
          <h2 className="text-3xl font-semibold pt-3 pb-15">Payment History</h2>
          <hr className="pb-5 border-gray-300" />

          <div className="flex flex-col items-center justify-center text-center">
            <img
              src={PaymentEmpty}
              alt="No payment requested"
              className="w-32 h-32 my-20"
            />
            <p className="text-3xl font-medium mb-2">Hey, you have not requested any payment yet</p>
            <p className="py-3 text-2xl font-medium">More transactions, more Profit, more withdrawals!</p>
            <button className="bg-green-600 hover:bg-green-700 text-white text-2xl mt-10 py-2 px-6 rounded">
              Make Link Now
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PaymentHistory