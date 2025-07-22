import React, { useState } from "react";
import SidebarMenu from "../components/Makelinks/SidebarMenu";
import ProfitLinkForm from "../components/Makelinks/ProfitLinkForm";
import QuickConvertLinks from "../components/Makelinks/QuickConvertLinks";
import HelpVideoTips from "../components/Makelinks/HelpVideoTips";
import Report from "../components/Makelinks/Reports/Reports";
import ProfitTrack from "./../components/Makelinks/ProfitTrack/Track";
import PaymentHistory from "./../components/Makelinks/History/History";
import Request from "../components/Makelinks/Request/ShareMoreModal";

export default function MakeLinkPage() {
  const [selectedMenu, setSelectedMenu] = useState("make-links");

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] px-4 md:px-10 py-6">
      <SidebarMenu onMenuSelect={setSelectedMenu} />

      <div className="flex-1">
        {selectedMenu === "make-links" && (
          <>
            <ProfitLinkForm />
            <QuickConvertLinks />
            <HelpVideoTips />
          </>
        )}

        {selectedMenu === "reports" && <Report />}
        {selectedMenu === "profitTrack" && <ProfitTrack />}
        {selectedMenu === "PaymentHistory" && <PaymentHistory />} 
        {selectedMenu === "Request" && <Request />} {/* ✅ Fixed line */}
      </div>
    </div>
  );
}
