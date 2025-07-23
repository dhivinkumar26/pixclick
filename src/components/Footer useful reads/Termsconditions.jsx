import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10 px-4">
      <div className="bg-white shadow-md rounded-lg p-4 max-w-7xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Terms & Conditions - EarnKaro.com
        </h1>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">1. Introduction:</h2>
          <p className="text-gray-600 leading-relaxed">
            Thank you for visiting www.earnkaro.com or EarnKaro mobile application (referred to as “Platform”)- India’s #1 Affiliate Marketing Platform. 
            The Service is operated by Pouring Pounds Ltd and/or Pouring Pounds India Private Limited (“We”, “Us”, “EarnKaro” or “Our”) and includes its 
            respective legal heirs, representatives, administrators, permitted successors and assigns. By using the various services available on the 
            EarnKaro Platform (“Services”), the User (jointly and severally referred to as “You”, “Your”, “Member”, “Yourself”, “His/Her”, “Him/Her” or 
            “User”) consent to these terms, guidelines and supplemental terms provided to you for the Services that you use (collectively, “Terms”). 
            Please read the Terms as they contain the legal terms and conditions that you agree to when you use the service provided by us through the Platform.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">2. General:</h2>
          <ul className="space-y-4 list-none text-gray-600 leading-relaxed">
            <li>
              <span className="font-semibold">a.</span> The Terms, inclusive of the Privacy Policy and any other relevant terms found on the Platform, are applicable and binding on the User...
            </li>
            <li>
              <span className="font-semibold">b.</span> The headings and subheadings within these Terms are provided for convenience and identification purposes only...
            </li>
            <li>
              <span className="font-semibold">c.</span> You acknowledge that the Platform does not engage in the sale or purchase of goods/products and cannot ensure the quality...
            </li>
            <li>
              <span className="font-semibold">d.</span> We are not a party to any transactions/applications made with Retailers/banks and are not the seller or supplier...
            </li>
            <li>
              <span className="font-semibold">e.</span> We are not held accountable for the acts or failures of the Retailer or for any breach of terms...
            </li>
            <li>
              <span className="font-semibold">f.</span> Be sure to visit this page periodically to review the most recent version of the Terms/Agreement.
            </li>
            <li>
              <span className="font-semibold">g.</span> We will also notify you of material changes (if any) to these Terms by placing a pop-up on our Platform.
            </li>
            <li>
              <span className="font-semibold">h.</span> The Platform may include links to third-party and/or Retailer websites or content for your convenience...
            </li>
            <li>
              <span className="font-semibold">i.</span> While we make efforts to ensure the functionality and uptime of the Platform, we do not guarantee uninterrupted...
            </li>
            <li>
              <span className="font-semibold">j.</span> You further acknowledge and consent that you are accessing services through this Platform at your discretion and risk...
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
