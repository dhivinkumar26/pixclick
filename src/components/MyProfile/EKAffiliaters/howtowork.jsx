import React from "react";
import { FaLink, FaCog, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    icon: <FaLink size={30} className="text-green-600" />,
    title: "STEP 1",
    description: "Link your Telegram and WhatsApp channels to EK Affiliaters",
  },
  {
    icon: <FaCog size={30} className="text-green-600" />,
    title: "STEP 2",
    description: "Set up the Telegram bots and other features",
  },
  {
    icon: <FaMoneyBillWave size={30} className="text-green-600" />,
    title: "STEP 3",
    description: "Sit back, relax & watch your Profit increase!",
  },
];

const EkAffiliatersSteps = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        How EK Affiliaters <span className="text-green-600">Works?</span>
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Steps */}
        <div className="flex flex-col gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-white shadow-md rounded-full p-4 border border-gray-200">
                {step.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image/Video */}
        <div className="w-full lg:w-1/2 shadow-xl rounded-lg overflow-hidden">
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="What is EK Affiliaters?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EkAffiliatersSteps;
