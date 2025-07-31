import React from "react";
import { FaSearch } from "react-icons/fa";
import TopCornerImg from "../../../assets/HowEKWorks/top-corner.png";


const testimonials = [
  {
    title: "Watch Sahil talk about his experience with EarnKaro",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Sourav AKA Eagle Tek talks about his financial growth with EarnKaro",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Get inspired by Prabhu's EarnKaro journey",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Listen to Abdul's finance earnings via EarnKaro",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Watch Abhilash recount his EarnKaro journey",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Listen to Raj's inspiring EarnKaro journey",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Watch how CJ & Sanjana increased their EarnKaro earnings",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Watch Aviral & Aagam tell us about their earning journey via EarnKaro",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Nikhil changed his life with the help of EarnKaro. Watch how!",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Watch how Ashish, a student, earns via EarnKaro",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Watch Sonal Bagga, a housewife, earn ₹15,000 from home",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Watch Kartikey, a college student, make ₹10,000 monthly",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Priya tells the secret to earn pocket money by promoting and placing Grocery orders.",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "EarnKaro chat show guest Rishav talks to us about why he loves using EarnKaro",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "How to become a successful affiliate marketer with EarnKaro?",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Sanat earns ₹30,000 just by using EarnKaro smartly. Watch how!",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
  {
    title: "Saikumar tells us his secrets to earn a stable income. Watch now to learn.",
    linkText: "Read Answer →",
    videoUrl: "https://www.youtube.com/embed/qPk6d6Hn7RY",
  },
];

const TopEarners = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-8">
      {/* Breadcrumb */}
      <div className="bg-green-600 text-white px-8 py-5 text-sm sm:text-base font-medium relative z-10">
        <span>Home / Get Help / Real User Stories</span>
      </div>

      {/* Search Box - Overlapping */}
      <div className="w-full sm:px-8 -mt-2 relative z-20">
        <div className="bg-white shadow-md rounded-md flex items-center px-4 py-3 mx-auto">
          <FaSearch className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full outline-none text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 mt-8 max-w-7xl mx-auto">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col relative"
          >
            <div className="z-1 py-2 px-2 rounded-xl relative shadow-xl">
              <img src={TopCornerImg} alt="img" className="z-0 bg-no-repeat bg-cover bg-center absolute right-0 top-0 rounded-xl" />

              <div className="text-gray-800 text-base wrap py-2 sm:text-2xl font-semibold">
                {item.title}
              </div>
              <a
                href="#"
                className="text-red-500 text-sm sm:text-base font-medium mb-4"
              >
                {item.linkText}
              </a>
            </div>

            <div className="aspect-w-16 h-[250px]">
              <iframe
                className="w-full h-full rounded-md"
                src={item.videoUrl}
                title={`testimonial-${idx}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopEarners;
