import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10 px-4">
      <div className="bg-white shadow-md rounded-lg p-4 max-w-7xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Anti-Spam Policy</h1>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">1. Introduction:</h2>
          <p className="text-gray-600 leading-relaxed">
            We commit that we shall not send you any unsolicited emails or other communications 
            other than those described on our Terms & Conditions and Privacy Policy. We shall not 
            share, sell or rent your details to any other companies or third parties. You have 
            the option of subscribing or unsubscribing to our monthly newsletters from our emails.
            <br /><br />
            All our members are expected to conduct their accounts without spamming our partner 
            merchants or members of public. If we get complaints from our partner merchants about 
            members who are spamming them in any way, we will terminate the offending members' 
            account immediately.
            <br /><br />
            If it is brought to our attention that any of our members is sending unsolicited 
            emails or spamming in any way, we will take this seriously and investigate the issue, 
            which may lead to suspension of the relevant member's account or a complete ban of 
            that member from our entire network of websites.
          </p>
        </div>

        {/* Section 2 (example) */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">2. How to report abuse:</h2>
          <p className="text-gray-600 leading-relaxed">
            If you believe you have received unsolicited communication from one of our members, 
            please contact our support team at support@example.com with details. We take every 
            complaint seriously and will investigate promptly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
