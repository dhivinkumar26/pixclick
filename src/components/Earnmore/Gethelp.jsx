import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaBookOpen,
  FaRupeeSign,
  FaLightbulb,
  FaUserFriends,
  FaHandshake,
  FaPhoneAlt,
  FaSearch,
} from "react-icons/fa";

const cards = [
  {
    title: "EARNKARO BASICS",
    icon: <FaBookOpen className="text-4xl text-green-600 mb-4" />,
    link: "earnkaro-basics",
  },
  {
    title: "ALL ABOUT PROFIT",
    icon: <FaRupeeSign className="text-4xl text-green-600 mb-4" />,
    link: "all-about-profit",
  },
  {
    title: "TIPS & TRICKS",
    icon: <FaLightbulb className="text-4xl text-yellow-500 mb-4" />,
    link: "tips-tricks",
  },
  {
    title: "REAL USER STORIES",
    icon: <FaUserFriends className="text-4xl text-blue-500 mb-4" />,
    link: "real-user-stories",
  },
  {
    title: "AFFILATERS",
    icon: <FaHandshake className="text-4xl text-purple-500 mb-4" />,
    link: "affiliaters",
  },
  {
    title: "CONTACT US",
    icon: <FaPhoneAlt className="text-4xl text-red-500 mb-4" />,
    link: "contact-us",
  },
];

const Earnmore = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const getPageTitle = (slug) => {
    switch (slug) {
      case "profitshala":
        return "Get Help";
      case "earnkaro-basics":
        return "EarnKaro Basics";
      case "all-about-profit":
        return "All About Profit";
      case "tips-tricks":
        return "Tips & Tricks";
      case "real-user-stories":
        return "Real User Stories";
      case "affiliaters":
        return "Affiliaters";
      case "contact-us":
        return "Contact Us";
      case "how-to-find-retailers-on-earnkaro":
        return "How to find available retailers on EarnKaro?";
      case "how-to-earn-money-through-affiliate-marketing":
        return "How to earn money through affiliate marketing?";
      case "how-to-check-link-performance":
        return "How to check link performance?";
      case "how-to-change-language":
        return "How to change language on EarnKaro?";
      case "how-to-check-profit-rates":
        return "How to check profit rates?";
      case "how-to-make-profit-links":
        return "How to make profit links?";
      case "how-is-your-profit-tracked":
        return "How is your profit tracked?";
      case "how-to-check-your-earned-profit":
        return "How to check your earned profit?";
      case "how-to-transfer-money-to-your-bank-account":
        return "How to transfer money to your bank account?";
      case "how-to-refer-and-earn-profit-for-a-lifetime":
        return "How to refer and earn profit for a lifetime?";
      case "how-is-referral-earnings-different-from-partner-profit-earnings":
        return "How is referral earnings different from partner profit earnings?";
      default:
        return slug.replace(/-/g, " ");
    }
  };

  return (
    <div className="pb-10 bg-green-500 sm:bg-green-500 lg:bg-gray-100">
      {/* ✅ Updated Breadcrumb */}
      <div className="relative">
        <div className="bg-gradient-to-b from-green-400 to-green-600 p-6 hidden sm:block">
          <div className="text-white font-bold text-lg space-x-1">
            <Link to="/" className="hover:text-gray-200">Home</Link>

            {pathParts[0] === "profitshala" && (
              <>
                <span>/</span>
                <Link to="/profitshala" className="hover:text-gray-200">
                  {getPageTitle("profitshala")}
                </Link>
              </>
            )}

            {pathParts[1] && (
              <>
                <span>/</span>
                <Link to={`/profitshala/${pathParts[1]}`} className="hover:text-gray-200">
                  {getPageTitle(pathParts[1])}
                </Link>
              </>
            )}

            {pathParts.length >= 3 && (
              <>
                <span>/</span>
                <span>{getPageTitle(pathParts[2])}</span>
              </>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="block md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-full md:mt-[-1.5rem] w-full md:w-[80%] lg:w-[60%] mx-auto mt-4 px-4">
          <div className="relative shadow-lg rounded-xl overflow-hidden bg-white">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <FaSearch className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full pl-12 pr-4 py-4 text-gray-700 rounded-xl focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      {location.pathname === "/profitshala" && (
        <div className="pt-15 px-4 sm:px-8 mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {cards.map((card, index) => (
              <Link
                to={card.link}
                key={index}
                className="w-full h-64 bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-xl transition"
              >
                {card.icon}
                <h2 className="text-center font-semibold text-lg">{card.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Render nested subpages here */}
      <div className="mt-10 px-4 sm:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Earnmore;
