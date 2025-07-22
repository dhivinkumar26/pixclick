import React from "react";
import SidebarMenu from "../components/Makelinks/SidebarMenu";
import ProfitLinkForm from "../components/Makelinks/ProfitLinkForm";
import QuickConvertLinks from "../components/Makelinks/QuickConvertLinks";
import HelpVideoTips from "../components/Makelinks/HelpVideoTips";

export default function MakeLinkPage() {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <SidebarMenu />
      <div className="flex-1 px-4 py-6">
        <ProfitLinkForm />
        <QuickConvertLinks />
        <HelpVideoTips />
      </div>
    </div>
  );
}
