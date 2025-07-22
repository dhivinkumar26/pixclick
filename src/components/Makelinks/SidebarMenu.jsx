import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function SidebarMenu() {
  const menu = [
    { label: "My Earnings", path: "/my-earnings" },
    { label: "Reports", path: "/reports" },
    { label: "Profit Didn't Track?", path: "/profit-track" },
    { label: "Request Payment", path: "/request-payment" },
    { label: "Payment History", path: "/payment-history" },
    { label: "Account Settings", path: "/account-settings" },
  ];

  return (
    <div className="w-full md:w-[390px] shadow mb-4 md:mb-0 ml-0 md:ml-8">
      {/* Breadcrumb */}
      <div className="text-sm mb-4 text-gray-600 ml-9 mt-3">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link> / Make Links
      </div>

      {/* Menu */}
      <div className="w-full bg-white shadow-md h-[360px] py-0">
        {menu.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive }) =>
              `block px-6 py-4 border-b border-gray-200 text-lg font-medium ${
                isActive ? "text-blue-600" : "text-black"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
