import React, { useState } from "react";
import SidebarMenu from "../components/Makelinks/SidebarMenu";
import ProfitLinkForm from "../components/Makelinks/ProfitLinkForm";
import QuickConvertCarousel from "../components/Makelinks/QuickConvertLinks";
import HelpVideoTips from "./../components/Makelinks/HelpVideoTips";
import RequestSection from "./../components/Makelinks/Request/ShareMoreModal";
import PaymentHistory from "./../components/Makelinks/History/History";
import AccountSettings from "./../components/Makelinks/Account/AccountSettings";
import ProfitTrack from "./../components/Makelinks/ProfitTrack/Track";

export default function MakeLinkPage() {
  const [selectedMenu, setSelectedMenu] = useState("make-links");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5] px-4 md:px-10 py-6 gap-4">
      <SidebarMenu onMenuSelect={setSelectedMenu} />

      <div className="flex-1">
        {selectedMenu === "make-links" && (
          <>
            <ProfitLinkForm />
            <QuickConvertCarousel />
            <HelpVideoTips />
          </>
        )}
        {selectedMenu === "track" && <ProfitTrack />}
        {selectedMenu === "request" && <RequestSection />}
        {selectedMenu === "payment" && <PaymentHistory />}
        {selectedMenu === "settings" && <AccountSettings />}
      </div>
    </div>
  );
}
