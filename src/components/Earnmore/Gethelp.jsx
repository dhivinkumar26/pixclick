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
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    title: "EARNKARO BASICS",
    icon: <FaBookOpen className="text-4xl text-white mb-4" />,
    link: "earnkaro-basics",
  },
  {
    title: "ALL ABOUT PROFIT",
    icon: <FaRupeeSign className="text-4xl text-white mb-4" />,
    link: "all-about-profit",
  },
  {
    title: "TIPS & TRICKS",
    icon: <FaLightbulb className="text-4xl text-white mb-4" />,
    link: "tips-tricks",
  },
  {
    title: "REAL USER STORIES",
    icon: <FaUserFriends className="text-4xl text-white mb-4" />,
    link: "real-user-stories",
  },
  {
    title: "AFFILATERS",
    icon: <FaHandshake className="text-4xl text-white mb-4" />,
    link: "affiliaters",
  },
  {
    title: "CONTACT US",
    icon: <FaPhoneAlt className="text-4xl text-white mb-4" />,
    link: "contact-us",
  },
];

const Earnmore = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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
      default:
        return slug.replace(/-/g, " ");
    }
  };

  return (
    <div className="pb-10 bg-green-500 sm:bg-green-500 lg:bg-gray-100">
      {/* Breadcrumb */}
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
                <Link
                  to={`/profitshala/${pathParts[1]}`}
                  className="hover:text-gray-200"
                >
                  {getPageTitle(pathParts[1])}
                </Link>
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
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="
                  w-full h-64
                  bg-green-600 text-white
                  p-6 rounded-xl
                  border-2 border-green-700
                  shadow-md
                  flex flex-col items-center justify-center
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                "
              >
                {card.icon}
                <h2 className="text-center font-semibold text-lg">
                  {card.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Nested Routes */}
      <div className="mt-10 px-4 sm:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Earnmore;
