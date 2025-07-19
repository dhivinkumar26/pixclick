import React, { useState, useRef } from "react";

const OtpInput = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  // Handle backspace to go to previous input
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // Check if all digits are filled
  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 font-inter">
      <div className="w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        {/* Back arrow */}
        <div className="self-start mb-4">
          <span className="text-xl cursor-pointer">&#8592;</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
          Enter 6 digit code we have sent you
        </h1>
        <br />

        {/* Subtext */}
        <div className="flex items-center justify-between text-gray-700 mb-6">
          <span className="text-sm">Code sent to 93XXXXXX246</span>
          <button className="text-blue-600 text-sm hover:underline">
            Edit number
          </button>
        </div>
        <br />

        {/* OTP inputs */}
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="border border-green-500 rounded-md w-10 h-12 sm:w-12 sm:h-14 text-center text-xl focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          ))}
        </div>

        {/* Resend options */}
        <p className="text-center text-gray-700 text-sm mb-2">
          Haven't received the OTP?{" "}
          <button className="text-blue-600 hover:underline">Resend OTP</button>
        </p>
        <p className="text-center text-blue-600 text-sm hover:underline mb-4 cursor-pointer">
          Receive OTP on Whatsapp
        </p>
        <br />

        {/* Login using email */}
        <p className="text-center text-blue-600 text-sm hover:underline mb-6 cursor-pointer">
          Login using email
        </p>

        {/* Continue button */}
        <button
          disabled={!isOtpComplete}
          className={`${
            isOtpComplete
              ? "bg-green-600 text-white cursor-pointer hover:bg-green-700"
              : "bg-green-100 text-green-800 cursor-not-allowed"
          } font-semibold px-6 py-3 rounded-md w-full text-base sm:text-lg`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OtpInput;
