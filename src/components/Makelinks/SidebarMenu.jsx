import React from "react";
import { Link } from "react-router-dom";

export default function SidebarMenu({ onMenuSelect }) {
  const menu = [
   
    { label: "My Earnings", key: "my-earnings" },
    { label: "Reports", key: "reports" },
    { label: "Profit Didn't Track?", key: "profitTrack" },
    { label: "Request", key: "Request" },
    { label: "PaymentHistory", key: "PaymentHistory" },
    { label: "Account Settings", key: "account-settings" },
  ];

  return (
    <div className="w-full md:w-[360px] max-w-[360px] bg-white  shadow-md overflow-hidden max-h-[400px]">
      {/* Breadcrumb */}
      <div className="text-[18px] font-medium text-gray-600 px-6 py-4 border-b border-gray-200">
        <Link to="/" className="text-black hover:underline">Home</Link>
      </div>

      {/* Sidebar Menu */}
      <div className="">
        {menu.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onMenuSelect(item.key)}
            className="px-6 py-4 border-b border-gray-100 text-[16px] text-gray-700 hover:text-black cursor-pointer"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
