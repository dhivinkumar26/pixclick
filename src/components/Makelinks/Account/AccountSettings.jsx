import React, { useState } from 'react';

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [fullName, setFullName] = useState('Kathir Vel');
  const [email, setEmail] = useState('nskxxxxxx12@gmail.com');
  const [mobile, setMobile] = useState('93XXXXXX40');
  const [receiveEmail, setReceiveEmail] = useState(true);

  return (
    <div className="max-w-5xl mx-auto mt-10 mb-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <div className="flex border-b pb-4 space-x-8 text-lg font-medium">
          <div
            className={`cursor-pointer ${activeTab === 'personal' ? 'text-green-600 border-b-2 border-green-600 pb-1' : 'hover:text-green-600'}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Details
          </div>
          <div
            className={`cursor-pointer ${activeTab === 'password' ? 'text-green-600 border-b-2 border-green-600 pb-1' : 'hover:text-green-600'}`}
            onClick={() => setActiveTab('password')}
          >
            Change Password
          </div>
          <div
            className={`cursor-pointer ${activeTab === 'language' ? 'text-green-600 border-b-2 border-green-600 pb-1' : 'hover:text-green-600'}`}
            onClick={() => setActiveTab('language')}
          >
            Choose Language
          </div>
        </div>

        {activeTab === 'personal' && (
          <>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-500 mb-2">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-500 mb-2">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded px-4 py-2 bg-gray-100"
                    readOnly
                  />
                  <span className="absolute right-3 top-2 text-green-600 cursor-pointer">✏️</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-500 mb-2">Mobile Number</label>
                <div className="flex border rounded items-center">
                  <span className="px-3 text-gray-600 border-r">+91</span>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full px-3 py-2"
                  />
                  <span className="px-3 text-green-600 cursor-pointer">✏️</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center">
              <input
                type="checkbox"
                checked={receiveEmail}
                onChange={(e) => setReceiveEmail(e.target.checked)}
                className="mr-2"
              />
              <label>Receive email when I get referral earning</label>
            </div>

            <div className="mt-6 text-red-600 font-semibold cursor-pointer">Delete my account</div>

            <div className="mt-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                SAVE CHANGES
              </button>
            </div>
          </>
        )}

        {activeTab === 'password' && (
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-500 mb-2">Current Password</label>
              <input type="password" className="w-full border rounded px-4 py-2" />
            </div>
            <div>
              <label className="block text-gray-500 mb-2">New Password</label>
              <input type="password" className="w-full border rounded px-4 py-2" />
            </div>
            <div>
              <label className="block text-gray-500 mb-2">Confirm Password</label>
              <input type="password" className="w-full border rounded px-4 py-2" />
            </div>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              UPDATE PASSWORD
            </button>
          </div>
        )}

        {activeTab === 'language' && (
          <div className="mt-6">
            <label className="block text-gray-500 mb-2">Select Language</label>
            <select className="w-full border rounded px-4 py-2">
              <option value="en">English</option>
              <option value="ta">Tamil</option>
              <option value="hi">Hindi</option>
              <option value="ml">Malayalam</option>
            </select>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              SAVE LANGUAGE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;
