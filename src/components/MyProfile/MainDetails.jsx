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

// Helper to convert label to URL-friendly path
const generatePath = (label) =>
  "/" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const DetailItem = ({ icon: Icon, label }) => (
  <Link to={generatePath(label)} className="no-underline">
    <div className="flex items-center rounded-xl border border-gray-300 py-2 hover:bg-gray-50 transition">
      <Icon className="text-green-600 text-2xl font-semibold w-12 h-12 p-2 bg-gray-200 rounded-full mx-5" />
      <span className="px-3 text-lg font-semibold text-gray-700">{label}</span>
      <FaGreaterThan className="text-green-600 ml-auto mr-5 text-xl" />
    </div>
  </Link>
);

const MainDetails = () => {
  const detailSections = [
    {
      title: "Money",
      items: [
        { icon: LuIndianRupee, label: "My Earnings" },
        { icon: CiWallet, label: "Request Payment" },
        { icon: LuHistory, label: "Payment History" },
      ],
    },
    {
      title: "Reports",
      items: [
        { icon: SlGraph, label: "Reports" },
        { icon: IoMdPaper, label: "Flipkart Reports" },
        { icon: MdOutlineInsertLink, label: "My Link Performance" },
      ],
    },
    {
      title: "Exclusive Tools",
      items: [
        { icon: FaRegShareFromSquare, label: "Profit Share" },
        { icon: SiStackbit, label: "EK Affiliaters" },
      ],
    },
    {
      title: "Exclusive Deals",
      items: [{ icon: TbBrandTelegram, label: "Join Our Telegram" }],
    },
    {
      title: "EarnKaro Academy",
      items: [
        { icon: TbBookmarkQuestion, label: "How EarnKaro Works?" },
        { icon: FaRegStar, label: "Hear From Our Top Earners" },
      ],
    },
    {
      title: "Earn Extra Profit",
      items: [
        { icon: MdOutlinePersonAddAlt, label: "Refer & Earn" },
        { icon: FaPeopleGroup, label: "Referral Network" },
      ],
    },
    {
      title: "Get Help",
      items: [
        { icon: LuScanSearch, label: "Profit Didn't Track?" },
        { icon: MdAttachEmail, label: "Email Us" },
      ],
    },
    {
      title: "More",
      items: [
        { icon: IoSettingsOutline, label: "Account Settings" },
        { icon: PiNoteDuotone, label: "Terms & Conditions" },
        { icon: LuLockKeyholeOpen, label: "Privacy Policy" },
        { icon: MdLogout, label: "Logout" },
      ],
    },
  ];

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {detailSections.map((section, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-300 rounded-2xl shadow p-5 flex flex-col gap-5"
        >
          <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
          {section.items.map((item, i) => (
            <DetailItem key={i} icon={item.icon} label={item.label} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MainDetails;