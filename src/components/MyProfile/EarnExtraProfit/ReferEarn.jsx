import React, { useState } from 'react';

const ReferralPage = () => {
  const referralLink = "https://earnKaro.com?r=4516964&fname=Mayakannan+C";
  const [email, setEmail] = useState('');
  const [showReferralLinkSection, setShowReferralLinkSection] = useState(true); // New state for visibility

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink)
      .then(() => {
        alert('Referral link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleSendInvite = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Invite sent to: ${email} (This is a dummy action)`);
      setEmail(''); // Clear the input after sending
    } else {
      alert('Please enter an email ID.');
    }
  };

  const handleSocialShare = (platform) => {
    let shareUrl = '';
    const text = `Chance to Earn Extra! Invite Your Friends To EarnKaro. Share your invite link & earn 10% of the Profit your friends make - FOREVER! My referral link: ${referralLink}`;

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}&quote=${encodeURIComponent(text)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(text)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Green Section */}
      <div className="bg-green-600 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#26af47' }}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M-10 0 L110 0 L110 20 L-10 20 Z" fill="currentColor" opacity="0.1"/>
            <circle cx="10" cy="50" r="8" fill="currentColor" opacity="0.15"/>
            <rect x="30" y="10" width="12" height="12" fill="currentColor" transform="rotate(30 36 16)" opacity="0.1"/>
            <path d="M50 70 L60 60 L70 70 L60 80 Z" fill="currentColor" opacity="0.15"/>
            <circle cx="90" cy="30" r="10" fill="currentColor" opacity="0.1"/>
            <ellipse cx="25" cy="85" rx="15" ry="8" fill="currentColor" transform="rotate(15 25 85)" opacity="0.1"/>
            <path d="M75 10 L85 0 L95 10 L85 20 Z" fill="currentColor" opacity="0.1"/>
            <rect x="5" y="5" width="20" height="20" fill="currentColor" transform="rotate(45 15 15)" opacity="0.15"/>
            <path d="M-5 60 L105 60 L105 70 L-5 70 Z" fill="currentColor" opacity="0.1"/>
            <circle cx="80" cy="90" r="7" fill="currentColor" opacity="0.12"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-2">
            Chance to Earn Extra!
          </h1>
          <p className="text-xl mb-4">
            Invite Your Friends To EarnKaro
          </p>
          <p className="text-lg mb-10">
            Share your invite link & earn 10% of the Profit your friends make - <span className="font-bold">FOREVER!</span>
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="relative -mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl border  border-gray-200">
          {/* Button to toggle visibility */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowReferralLinkSection(!showReferralLinkSection)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md text-sm"
            >
              {showReferralLinkSection ? 'Hide Referral Link Section' : 'Show Referral Link Section'}
            </button>
          </div>

          {/* Your Referral link section - Conditional Rendering */}
          {showReferralLinkSection && (
            <div className="mb-8">
              <label htmlFor="referral-link" className="block text-gray-700 text-base font-medium mb-2">
                Your Referral link
              </label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center border border-gray-300 rounded-md overflow-hidden">
                <input
                  type="text"
                  id="referral-link"
                  readOnly
                  value={referralLink}
                  className="flex-grow p-3 text-gray-800 bg-gray-50 focus:outline-none text-sm sm:text-base"
                />
                <button
                  onClick={handleCopyLink}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-b-md sm:rounded-none sm:rounded-r-md transition-colors duration-200 text-sm whitespace-nowrap"
                  style={{ backgroundColor: '#26af47' }}
                >
                  COPY LINK
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-start">
            {/* Invite By Email */}
            <div>
              <h3 className="text-gray-700 text-base font-medium mb-3">Invite By Email</h3>
              <form onSubmit={handleSendInvite} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter Your Friends' Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 text-sm"
                  style={{ backgroundColor: '#26af47' }}
                >
                  SEND INVITE
                </button>
              </form>
            </div>

            {/* OR separator */}
            <div className="flex items-center justify-center md:flex-col md:h-full">
              <span className="text-gray-400 font-bold text-lg">OR</span>
            </div>

            {/* Invite By Social Media */}
            <div>
              <h3 className="text-gray-700 text-base font-medium mb-3">Invite By Social Media</h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleSocialShare('facebook')}
                  className="w-full flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 justify-center text-sm"
                  style={{ backgroundColor: '#3b5998' }}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.5 14 6 15 6H17V2.22C16.35 2.15 15.5 2.08 14.71 2C11.91 2 10 3.61 10 7V9.5H7V13.5H10V22H14V13.5Z" />
                  </svg>
                  Facebook
                </button>
                <button
                  onClick={() => handleSocialShare('telegram')}
                  className="w-full flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 justify-center text-sm"
                  style={{ backgroundColor: '#0088cc' }}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.48 8.02C17.39 7.42 16.39 7.05 15.68 7.37L7.33 10.66C6.63 10.94 6.66 11.33 7.21 11.5L9.6 12.28L14.73 9.29C15.08 9.09 15.42 9.21 15.15 9.47L11.38 13.06L11.08 16.29C11.23 16.5 11.45 16.59 11.69 16.59C11.85 16.59 12.01 16.53 12.16 16.4L12.78 15.93L15.34 17.84C15.82 18.15 16.14 18.04 16.42 17.45C17.06 16.16 18.06 11.66 18.2 10.29C18.3 9.46 17.78 8.44 17.48 8.02Z" />
                  </svg>
                  Telegram
                </button>
                <button
                  onClick={() => handleSocialShare('whatsapp')}
                  className="w-full flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 justify-center text-sm"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.58 15.31 3.33 16.8L2.06 22.04L7.35 20.76C8.84 21.5 10.46 21.91 12.04 21.91C17.5 21.91 21.95 17.46 21.95 12.04C21.95 6.58 17.5 2 12.04 2ZM17.68 16.22C17.36 16.89 16.63 17.38 15.92 17.5C15.09 17.65 14.28 17.78 13.43 17.78C12.44 17.78 11.45 17.67 10.45 17.39C8.42 16.74 6.84 15.09 6.22 13.04C5.95 12.07 5.86 11.08 5.86 10.09C5.86 9.17 6.13 8.27 6.58 7.42C6.73 7.15 7.02 6.84 7.35 6.66C7.54 6.56 7.73 6.48 7.91 6.38C8.27 6.22 8.52 6.13 8.78 6.13C9.09 6.13 9.38 6.22 9.68 6.33C9.97 6.45 10.22 6.63 10.49 6.82L10.9 7.27C11.19 7.6 11.49 7.84 11.78 8.09C12.07 8.33 12.36 8.58 12.63 8.78C12.92 8.97 13.16 9.17 13.45 9.36C13.74 9.56 13.99 9.77 14.28 9.97L14.73 10.36C15.02 10.63 15.28 10.87 15.54 11.11C15.8 11.36 16.09 11.6 16.38 11.82C16.66 12.07 16.92 12.33 17.18 12.6C17.45 12.87 17.69 13.16 17.91 13.43L18.2 13.72C18.45 14.02 18.66 14.28 18.78 14.54L18.84 14.75C18.89 14.94 18.92 15.13 18.92 15.34C18.92 15.66 18.81 15.92 18.63 16.14L17.68 16.22Z" />
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;