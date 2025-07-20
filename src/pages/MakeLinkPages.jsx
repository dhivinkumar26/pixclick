// src/pages/MakeLinkPage.jsx
import React from "react";
import SidebarMenu from "../components/Makelinks/SidebarMenu";
import ProfitLinkForm from "../components/Makelinks/ProfitLinkForm";

export default function MakeLinkPage() {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <SidebarMenu />
      <ProfitLinkForm />
    </div>
  );
}
