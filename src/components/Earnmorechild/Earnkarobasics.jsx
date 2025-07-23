import React from "react";
import { Link } from "react-router-dom";

const Earnkarobasics = () => {
  const helpData = [
    {
      title: "How to earn money through affiliate marketing?",
      videoUrl: "https://www.youtube.com/embed/HYJznS2H8Cg?si=yz19iMR1d6Rjs1-E",
      linkTo: "/profitshala/earnkaro-basics",
    },
    {
      title: "How to find available retailers on EarnKaro?",
      videoUrl: "https://www.youtube.com/embed/wnZ0Crref4A?si=Tkq3JhjEV3F0ZnrF", 
      linkTo: "/profitshala/all-about-profit",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {helpData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Text Section */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <Link
                to={item.linkTo}
                className="text-red-500 font-medium hover:underline inline-flex items-center gap-1"
              >
                Read Answer →
              </Link>
            </div>

            {/* Video Section */}
            <div className="w-full">
              <iframe
                className="w-full aspect-video"
                src={item.videoUrl}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earnkarobasics ;

