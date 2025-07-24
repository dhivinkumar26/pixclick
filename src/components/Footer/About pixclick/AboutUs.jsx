import React from "react";
import foundersImage from "./../../../assets/Footer/f11.jpg";
import kalaariLogo from "./../../../assets/Footer/f4.png";
import tataImg from "./../../../assets/Footer/f5.jpeg";

import rohanImg from "./../../../assets/Footer/f6.jpeg";
import swatiImg from "./../../../assets/Footer/f9.jpg";
import mkImg from "./../../../assets/Footer/f3.jpeg";
import team1 from "./../../../assets/Footer/f10.jpg";
import team2 from "./../../../assets/Footer/f8.avif";
import team3 from "./../../../assets/Footer/f7.jpg";
import team4 from "./../../../assets/Footer/f1.jpg";

const timelineData = [
  {
    title: "JULY '19: OFF TO A GREAT START",
    description:
      "Built strategic tie ups with Myntra, Flipkart & Nykaa\nRaised investment from several VC firms",
    icon: "🚀",
    color: "bg-blue-500",
  },
  {
    title: "SEPTEMBER '19: EXCLUSIVE TOOL FOR MEGA AFFILIATES",
    description:
      "Created a new functionality called Magic Tool\nTremendously reduced time & effort for Affiliates sharing deals",
    icon: "🛠️",
    color: "bg-green-600",
  },
  {
    title: "OCTOBER '19: HARDWORK LED TO SUCCESS",
    description:
      "Paid over 1 Cr+ to our loyal users\nOn-boarded 50+ shopping sites across Fashion, Beauty, Electronics, Medicines etc.",
    icon: "🔥",
    color: "bg-red-500",
  },
  {
    title: "SEPTEMBER '20: WE BECAME A HIT",
    description:
      "Established new headquarters in Sector 44, Gurgaon\nCelebrated our achievement with the EarnKaro family of over 1 Million users",
    icon: "🏢",
    color: "bg-gray-800",
  },
  {
    title: "OCTOBER '20: HIP HIP HURRAY",
    description:
      "Became the 1st Indian Affiliate Marketing App\nTied up with 150+ Shopping Sites, offering highly competitive Profit Rates",
    icon: "🎉",
    color: "bg-green-700",
  },
  {
    title: "MARCH '22: SUCCESS KEPT US GOING",
    description:
      "Hit 2 Million loyal users who promoted major shopping sites to make a living\nProduct-level reconstruction & revamps made for better user experience",
    icon: "🚀",
    color: "bg-rose-500",
  },
  {
    title: "JUNE '22: AS EXCLUSIVE AS IT GETS",
    description:
      "Built an exclusive tool that lets EarnKaro users share their Affiliate Earnings\nConverting more buyers with 'sharing is caring' formula",
    icon: "🔒",
    color: "bg-black",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white w-full">
      {/* Founders Image */}
      <div className="flex justify-center items-center p-4 md:p-10">
        <img
          src={foundersImage}
          alt="Founders"
          className="w-full max-w-5xl object-contain rounded-lg"
        />
      </div>

      {/* Quote */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
          “We are India’s #1 Affiliate Marketing Platform”
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Founded by Swati & Rohan Bhargava in July 2019, EarnKaro is a
          deal-sharing platform partnered with 200+ Shopping Sites across
          various categories like Fashion, Beauty, Grocery, OTC Medicines,
          Electronics & Credit Cards. Backed by Late Mr. Ratan Tata & some of
          India's leading VC firms – Kalaari Capital & Korea Investment
          Partners, we cater to 20L+ registered users sharing deals across
          e-commerce sites like Flipkart, Myntra, Axis Bank, Mamaearth, Beardo
          & more.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-white">
        <h3 className="text-center text-xl font-semibold mb-12 text-gray-800">
          Follow Our Achievements
        </h3>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-300 h-full z-0"></div>
          <div className="space-y-16 relative z-10">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } w-full`}
              >
                {index % 2 !== 0 && <div className="hidden md:block w-1/2"></div>}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div
                    className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center text-xl shadow-md`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div
                  className={`bg-white shadow-lg p-5 rounded-lg w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <h4 className="font-bold text-sm md:text-base mb-2 text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
                {index % 2 === 0 && <div className="hidden md:block w-1/2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investors */}
      <section className="bg-[#f5f5f5] py-10 px-4 flex justify-center mt-3">
        <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-900">
            OUR INVESTORS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
            <div className="flex flex-col items-center px-6 py-8 text-center">
              <img src={kalaariLogo} alt="Kalaari" className="h-20 mb-4" />
              <h3 className="font-semibold text-lg">Kalaari Capital</h3>
              <p className="text-sm text-gray-600 mb-2">
                India's Leading Venture Capital Firm
              </p>
              <p className="text-sm text-gray-700">
                Invested $3.4 Million as Series 'A' Funding making EarnKaro
                India's 1st VC-funded deal-sharing site helping reinforce our
                position as the strongest player in the Affiliate Marketing
                segment.
              </p>
            </div>
            <div className="flex flex-col items-center px-6 py-8 text-center">
              <h3 className="font-bold text-md leading-tight text-gray-900">
                Korea Investment
                <br />
                <span className="font-normal">Partners Co., Ltd.</span>
              </h3>
              <h4 className="font-semibold mt-2 text-gray-800">
                Korea Investment Partners
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                A Leading Venture Capital Firm
              </p>
              <p className="text-sm text-gray-700">
                Invested $10 Million in Series 'B' Funding to help EarnKaro grow
                in new avenues and become a household name.
              </p>
            </div>
            <div className="flex flex-col items-center px-6 py-8 text-center">
              <img
                src={tataImg}
                alt="Ratan Tata"
                className="h-20 w-20 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-900">
                Late Ratan Tata
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Former Chairman, Tata Group
              </p>
              <p className="text-sm text-gray-700">
                Invested & helped reinforce EarnKaro's position as the strongest
                player in the deal-hungry Affiliate Marketing industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="bg-[#f5f5f5] py-10 px-4">
        <div className="max-w-7xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-900">
            THE CORE TEAM
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div>
              <img src={rohanImg} alt="Rohan" className="w-full h-56 object-cover rounded-md mb-2" />
              <h3 className="font-semibold text-sm">Rohan Bhargava</h3>
              <p className="text-xs text-gray-600 mb-1">Co Founder</p>
              <p className="text-xs text-gray-700">
                A qualified CA and alum of London School of Economics, Rohan has worked with hedge
                funds like Aladdin Capital. Over 8 years of experience handling $1B in assets.
              </p>
            </div>

            <div>
              <img src={swatiImg} alt="Swati" className="w-full h-56 object-cover rounded-md mb-2" />
              <h3 className="font-semibold text-sm">Swati Bhargava</h3>
              <p className="text-xs text-gray-600 mb-1">Co Founder</p>
              <p className="text-xs text-gray-700">
                LSE alum, ex-Investment Banker at Goldman Sachs. Co-founded Pouring Pounds in 2011,
                EarnKaro in 2019.
              </p>
            </div>

            <div>
              <img src={mkImg} alt="MK" className="w-full h-56 object-cover rounded-md mb-2" />
              <h3 className="font-semibold text-sm">MK Arumainathan</h3>
              <p className="text-xs text-gray-600 mb-1">CTO</p>
              <p className="text-xs text-gray-700">
                Over 15 years in tech. Formerly at HCL. Now leads technical strategy at EarnKaro.
              </p>
            </div>
          </div>

          {/* Collage Section */}
          <div className="grid grid-cols-12 gap-4 mb-10">
            <div className="col-span-12 md:col-span-6">
              <img src={team1} alt="Team 1" className="rounded-md w-full h-full object-cover" />
            </div>
            <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4">
              <img src={team2} alt="Team 2" className="rounded-md w-full h-40 md:h-48 object-cover" />
              <img src={team3} alt="Team 3" className="rounded-md w-full h-40 md:h-48 object-cover" />
              <div className="col-span-2">
                <img src={team4} alt="Team 4" className="rounded-md w-full h-40 md:h-48 object-cover mt-4" />
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-700 text-center leading-relaxed">
            EarnKaro is a deal-sharing platform where users share Profit Links. Users earn real money
            by sharing links with buyers and transferring profits to their bank account. Backed by
            Late Ratan Tata, we bring the best Affiliate Marketing experience. <br /><br />
            Join Free → Share Deals → Get Orders → Earn Money → Transfer to Bank. <br /><br />
            Discover sales across groceries, medicines, fashion, electronics & more. Earn from home.
            With EarnKaro, <strong>#KamaiPakkiHai</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
