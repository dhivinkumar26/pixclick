import React from "react";

// components/Sidebar.jsx
export default function Sidebar() {
  const menu = [
    "My Earnings",
    "Reports",
    "Profit Didn't Track?",
    "Request Payment",
    "Payment History",
    "Account Settings",
  ];
  return (
    <div className="w-full md:w-64 bg-white shadow p-4 rounded mb-4 md:mb-0">
      {menu.map((item, idx) => (
        <div
          key={idx}
          className="py-3 px-4 border-b text-sm hover:bg-gray-100 cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

