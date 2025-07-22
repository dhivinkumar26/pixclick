import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaRupeeSign,
  FaLightbulb,
  FaUserFriends,
  FaHandshake,
  FaPhoneAlt,
} from "react-icons/fa";

const cards = [
  {
    title: "EARNKARO BASICS",
    icon: <FaBookOpen className="text-4xl text-green-600 mb-4" />,
    link: "/earnkaro-basics",
  },
  {
    title: "ALL ABOUT PROFIT",
    icon: <FaRupeeSign className="text-4xl text-green-600 mb-4" />,
    link: "/all-about-profit",
  },
  {
    title: "TIPS & TRICKS",
    icon: <FaLightbulb className="text-4xl text-yellow-500 mb-4" />,
    link: "/tips-tricks",
  },
  {
    title: "REAL USER STORIES",
    icon: <FaUserFriends className="text-4xl text-blue-500 mb-4" />,
    link: "/real-user-stories",
  },
  {
    title: "AFFILATERS",
    icon: <FaHandshake className="text-4xl text-purple-500 mb-4" />,
    link: "/affiliaters",
  },
  {
    title: "CONTACT US",
    icon: <FaPhoneAlt className="text-4xl text-red-500 mb-4" />,
    link: "/contact-us",
  },
];

const Earnmore = () => {
  return (
    <div className>
      {/* Breadcrumb */}
      <div className="text-sm text-white bg-green-500 p-6">
        <Link to="/" className= "font-bold">
          Home
        </Link>{" "}
        / <span className="text-white-700">GetHelp</span>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="p-3 w-full p-2 border rounded-md shadow-sm focus:outline-none"
        />
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-4 py-2">
        {cards.map((card, index) => (
          <Link
            to={card.link}
            key={index}
            className="min-w-[100px] min-h-[200px] bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition"
          >
            {card.icon}
            <h2 className="text-center font-semibold text-lg">{card.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Earnmore;
