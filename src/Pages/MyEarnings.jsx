// src/pages/MakeLinkPage.jsx
import React from "react";
import Earnings from "../components/Makelinks/Myearnings/Earning";
import Order from "./../components/Makelinks/Myearnings/order";
import Report from "./../components/Makelinks/Myearnings/report";
import Total_Earnings from "./../components/Makelinks/Myearnings/total_earning";


export default function MakeLinkPage() {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <Earnings />
      
    </div>
  );
}
