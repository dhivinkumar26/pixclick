import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Tipstricks = () => {
  const location = useLocation();

  // ✅ Check if it's a grandchild route
  const isGrandchild = location.pathname !== "/profitshala/tips-tricks";

  const helpData = [
    {
      title: "How To Find Exclusive Deals On The App Daily",
      videoUrl: "https://www.youtube.com/embed/HYJznS2H8Cg?si=yz19iMR1d6Rjs1-E",
      linkTo: "/profitshala/tips-tricks/how-to-find-exclusive-deals-on-the-app-daily",
    },
    {
      title: "How To Make Good Deal Links - Part 1",
      videoUrl: "https://www.youtube.com/embed/wnZ0Crref4A?si=Tkq3JhjEV3F0ZnrF",
      linkTo: "/profitshala/tips-tricks/how-to-make-good-deal-links-part-1",
    },
    {
      title: " How To Make Good Deal Links - Part 2",
      videoUrl: "https://www.youtube.com/embed/_qEBGhVj4wI?si=KTR16vhSwqXV3XHT" , 
      linkTo: "/profitshala/tips-tricks/how-to-make-good-deal-links-part-2",
    },
    {
      title: "Different Tips to Share Profit Links",
      videoUrl: "https://www.youtube.com/embed/Fr0irwBLZsk?si=J6y1uhqXj9Ifr2hy",
      linkTo: "/profitshala/tips-tricks/different-tips-to-share-profit-links",
    },
       {
      title: "How to grow network and earn more profit?",
      videoUrl: "https://www.youtube.com/embed/Fr0irwBLZsk?si=J6y1uhqXj9Ifr2hy",
      linkTo: "/profitshala/tips-tricks/how-to-grow-network-and-earn-more-profit",
    },
       {
      title: "Do's and Don'ts to avoid missing Profit?",
      videoUrl: "https://www.youtube.com/embed/Fr0irwBLZsk?si=J6y1uhqXj9Ifr2hy",
      linkTo: "/profitshala/tips-tricks/dos-and-donts-to-avoid-missing-profit",
    },
      
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-10">
      {/* ✅ Show grandchild route page only */}
      {isGrandchild ? (
        <Outlet />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {helpData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <Link
                  to={item.linkTo}
                  className="text-red-500 font-medium hover:underline inline-flex items-center gap-1"
                >
                  Read Answer →
                </Link>
              </div>
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
      )}
    </div>
  );
};

export default Tipstricks ;
