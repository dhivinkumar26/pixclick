import React from "react";
import dashboardImage from "./../../../assets/EKAffiliaters/header1.png"; // replace with your uploaded image

export default function AffiliatersHero() {
  return (
    <div className="bg-white w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-12">
      {/* Left text & button */}
      <div className="flex-1 text-center md:text-left space-y-2">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
          Unlock <br />The Most{" "}
          <span className="text-green-600 font-bold">Powerful <br />
          Deal-Sharing Tool</span>
        </h1>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md shadow hover:bg-green-700 transition">
          Go To EK Affiliaters
        </button>
      </div>

      {/* Right image */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-8">
        <img
          src={dashboardImage}
          alt="Affiliaters dashboard"
          className="w-full max-w-xl mx-auto rounded shadow"
        />
      </div>
    </div>
  );
}
