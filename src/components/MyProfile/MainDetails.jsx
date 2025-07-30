import { Link } from "react-router-dom";
import {
  LuIndianRupee, LuHistory, LuScanSearch, LuLockKeyholeOpen,
} from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { SlGraph } from "react-icons/sl";
import { IoMdPaper } from "react-icons/io";
import {
  MdOutlineInsertLink, MdOutlinePersonAddAlt,
  MdAttachEmail, MdLogout,
} from "react-icons/md";
import {
  FaRegShareFromSquare, FaRegStar,
  FaPeopleGroup, FaGreaterThan,
} from "react-icons/fa6";
import { SiStackbit } from "react-icons/si";
import {
  TbBrandTelegram, TbBookmarkQuestion,
} from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { PiNoteDuotone } from "react-icons/pi";

// Function to auto-generate URL-friendly paths if no path provided
const generatePath = (label) =>
  "/" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Item component
const DetailItem = ({ icon: Icon, label, path }) => (
  <Link to={path || generatePath(label)} className="no-underline">
    <div className="flex items-center rounded-xl border border-gray-300 py-2 hover:bg-gray-50 transition">
      <Icon className="text-green-600 text-2xl font-semibold w-12 h-12 p-2 bg-gray-200 rounded-full mx-5" />
      <span className="px-3 text-lg font-semibold text-gray-700">{label}</span>
      <FaGreaterThan className="text-green-600 ml-auto mr-5 text-xl" />
    </div>
  </Link>
);

// Main component
const MainDetails = () => {
  const detailSections = [
    {
      title: "Money",
      items: [
        { icon: LuIndianRupee, label: "My Earnings", path: "/my-earnings" },
        { icon: CiWallet, label: "Request Payment", path: "/request" },
        { icon: LuHistory, label: "Payment History", path: "/payment-history" },
      ],
    },
    {
      title: "Reports",
      items: [
        { icon: SlGraph, label: "Reports", path: "/reports" },
        { icon: IoMdPaper, label: "Flipkart Reports", path: "/flipkart-report" },
        { icon: MdOutlineInsertLink, label: "My Link Performance", path: "/my-links-performance" },
      ],
    },
    {
      title: "Exclusive Tools",
      items: [
        { icon: FaRegShareFromSquare, label: "Profit Share", path: "/profit-share" },
        { icon: SiStackbit, label: "EK Affiliaters", path: "/ek-affiliaters" },
      ],
    },
    {
      title: "Exclusive Deals",
      items: [
        { icon: TbBrandTelegram, label: "Join Our Telegram", path: "/join-telegram" },
      ],
    },
    {
      title: "EarnKaro Academy",
      items: [
        { icon: TbBookmarkQuestion, label: "How EarnKaro Works?", path: "/profitshala" },
        { icon: FaRegStar, label: "Hear From Our Top Earners", path: "/profitshala/real-user-stories" },
      ],
    },
    {
      title: "Earn Extra Profit",
      items: [
        { icon: MdOutlinePersonAddAlt, label: "Refer & Earn", path: "/refer-earn" },
        { icon: FaPeopleGroup, label: "Referral Network", path: "/referral-network" },
      ],
    },
    {
      title: "Get Help",
      items: [
        { icon: LuScanSearch, label: "Profit Didn't Track?", path: "/profit-track" },
        { icon: MdAttachEmail, label: "Email Us", path: "/email-us" },
      ],
    },
    {
      title: "More",
      items: [
        { icon: IoSettingsOutline, label: "Account Settings", path: "/account-settings" },
        { icon: PiNoteDuotone, label: "Terms & Conditions", path: "/terms-conditions" },
        { icon: LuLockKeyholeOpen, label: "Privacy Policy", path: "/privacy-policy" },
        { icon: MdLogout, label: "Logout", path: "/account-settings" },
      ],
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
      {detailSections.map((section, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex flex-col gap-4"
        >
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">{section.title}</h2>
          {section.items.map((item, i) => (
            <DetailItem
              key={i}
              icon={item.icon}
              label={item.label}
              path={item.path}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MainDetails;
