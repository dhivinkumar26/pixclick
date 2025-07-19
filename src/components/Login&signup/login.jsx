import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    // Main container: Centers content vertically and horizontally, adds responsive padding
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-12 font-inter">
      {/* Content wrapper: Constrains max width on larger screens and centers content within */}
      <div className="w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        {/* Back arrow */}
        <div className="self-start mb-4">
          <span className="text-xl cursor-pointer">&#8592;</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">Login or signup</h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-sm">We will send an SMS to verify</p>
<br />
        {/* Input */}
        <div className="relative mb-6">
          <label
            htmlFor="phone-email-input"
            className="absolute -top-2 left-3 bg-white px-1 text-gray-600 text-xs sm:text-sm rounded"
          >
            Enter phone or email
          </label>
          <input
            id="phone-email-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-green-500 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600 transition-all text-base"
            aria-label="Enter phone or email"
          />
        </div>

        {/* Divider text */}
        <p className="text-center text-gray-500 my-4 text-sm sm:text-base">Or continue with social account</p>

        {/* Google button */}
        <div className="flex justify-center mb-6">
          <button
            className="flex items-center justify-center border border-gray-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Continue with Google"
          >
            <FcGoogle className="text-1xl sm:text-2xl" />
          </button>
        </div>

        {/* Terms */}
        <p className="text-left text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed">
          By continuing, you agree to PixClick's{" "}
          <a href="#" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" aria-label="Terms and Conditions">
            terms & conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" aria-label="Privacy Policy">
            privacy policy
          </a>
        </p>
<br />
        {/* Continue button */}
        <button className="bg-green-600 text-white font-semibold cursor-pointer px-6 py-2 rounded-md w-full hover:bg-green-700 transition-colors text-base sm:text-lg shadow-md">
          Continue
        </button>
      </div>
    </div>
  );
};

export default App;