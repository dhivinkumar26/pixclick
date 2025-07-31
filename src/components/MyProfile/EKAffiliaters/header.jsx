import React from "react";
import dashboardImage from "./../../../assets/EKAffiliaters/header1.png"; // replace with your uploaded image

export default function AffiliatersHero() {
  return (
    <div className="bg-white w-full flex flex-col md:flex-row items-center justify-center pl-8 md:pl-42 py-16">
      {/* Left text & button */}
      <div className="flex-1 text-center md:text-left space-y-2 order-2 md:order-none mt-8 md:mt-0">
        <h1 className="text-3xl sm:text-4xl text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
          Unlock <br />The Most{" "}
          <span className="text-green-600 font-bold">Powerful <br className="sm:hidden"/>
          Deal-Sharing Tool</span>
        </h1>
        <button className="mt-6 sm:mt-4 bg-green-600 text-white px-8 sm:px-6 py-3 sm:py-2 rounded-md shadow hover:bg-green-700 transition duration-300 ease-in-out text-lg sm:text-base">
          Go To EK Affiliaters
        </button>
      </div>

      {/* Right image */}
      <div className="flex-1 order-1 md:order-none md:ml-8">
        <img
          src={dashboardImage}
          alt="Affiliaters dashboard"
          className="max-w-full sm:max-w-xl md:max-w-2xl h-auto mx-auto rounded shadow-lg"
        />
      </div>
    </div>
  );
}