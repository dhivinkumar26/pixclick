import React from "react";
import { FaLink, FaCog, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    icon: <FaLink size={50} className="text-green-600" />,
    title: "STEP 1",
    description: [
      "Link your Telegram and WhatsApp",
      "channels to EK Affiliaters"
    ],
  },
  {
    icon: <FaCog size={50} className="text-green-600" />,
    title: "STEP 2",
    description: [
      "Set up the Telegram bots",
      "and other features"
    ],
  },
  {
    icon: <FaMoneyBillWave size={50} className="text-green-600" />,
    title: "STEP 3",
    description: [
      "Sit back, relax &",
      "watch your Profit increase!"
    ],
  },
];

const EkAffiliatersSteps = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-42 mx-auto"> {/* Adjusted padding */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"> {/* Adjusted heading size and margin */}
        How EK Affiliaters <span className="text-green-600">Works?</span>
      </h2>
      <br className="block lg:hidden" /> {/* Hide <br/> on larger screens */}

      {/* Main content: steps and video */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
        {/* Left Steps */}
        <div className="relative flex flex-col gap-10 sm:gap-14 w-full lg:w-auto"> {/* Adjusted gap and added width for mobile */}
          {/* Vertical Line */}
          <div className="absolute left-9 sm:left-10 top-2 bottom-0 w-0.5 bg-gray-300 z-0" /> {/* Adjusted left position for mobile */}

          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 sm:gap-8 relative z-10"> {/* Adjusted gap for mobile */}
              {/* Icon container */}
              <div className="bg-white shadow-md rounded-full p-3 sm:p-4 border border-green-200 relative z-10"> {/* Adjusted padding for mobile icon */}
                {step.icon}
              </div>

              {/* Step text */}
              <div>
                <h3 className="font-bold text-base sm:text-lg">{step.title}</h3> {/* Adjusted title size */}
                <div className="text-gray-600 font-semibold text-base sm:text-lg leading-snug"> {/* Adjusted description size */}
                  {step.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Video */}
        <div className="w-full lg:w-1/2 shadow-xl rounded-lg overflow-hidden mt-8 lg:mt-0"> {/* Added margin top for mobile */}
          <iframe
            className="w-full h-52 sm:h-64 md:h-80 lg:h-86" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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