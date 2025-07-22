import { useState } from "react";

export default function SidebarMenu() {
  const menuItems = [
    "My Earnings",
    "Reports",
    "Profit Didn't Track?",
    "Request Payment",
    "Payment History",
    "Account Settings",
  ];

  const [active, setActive] = useState("My Earnings"); // default active

  return (
    <div className="w-[250px] bg-white shadow-sm border-r min-h-screen">
      <div className="text-sm text-gray-600 px-6 py-4">
        <span className="text-gray-400">Home / </span>
        <span className="font-semibold text-black">Make Links</span>
      </div>

      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setActive(item)}
            className={`px-6 py-4 text-sm border-b cursor-pointer 
              ${active === item ? "border-l-4 border-green-600 bg-gray-50 font-medium" : "border-l-4 border-transparent"}
              hover:bg-gray-100 transition-all`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
