// ProfilePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './ProfileHeader';
import Card from './Card';
import CardItem from './CardItem';

function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 pb-8"> {/* Overall background and padding */}
      {/* Breadcrumb Section */}
      <div className="container mx-auto pt-4 pl-4 text-sm text-gray-600">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-1">/</span>
        <span>Profile</span>
      </div>

      {/* User Header Section */}
      <Header />

      {/* Main Content Grid with All Card Sections */}
      <div className="container mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Money Section Card */}
        <Card title="Money">
          <CardItem icon="₹" text="My Earnings" />
          <CardItem icon="🧾" text="Request Payment" />
          <CardItem icon="🕒" text="Payment History" />
        </Card>

        {/* Reports Section Card */}
        <Card title="Reports">
          <CardItem icon="📈" text="Reports" />
          <CardItem icon="📦" text="Flipkart Reports" />
          <CardItem icon="🔗" text="My Link Performance" />
        </Card>

        {/* Exclusive Tools Section Card */}
        <Card title="Exclusive Tools">
          <CardItem icon="✅" text="Profit Share" />
          <CardItem icon="🤝" text="EK Affiliaters" />
        </Card>

        {/* Exclusive Deals Section Card */}
        <Card title="Exclusive Deals">
          <CardItem icon="📢" text="Join Our Telegram" />
        </Card>

        {/* EarnKaro Academy Section Card */}
        <Card title="EarnKaro Academy">
          <CardItem icon="💡" text="How EarnKaro Works?" />
          <CardItem icon="🏆" text="Hear From Our Top Earners" />
        </Card>

        {/* Earn Extra Profit Section Card */}
        <Card title="Earn Extra Profit">
          <CardItem icon="💰" text="Refer & Earn" />
          <CardItem icon="🌐" text="Referral Network" />
        </Card>

        {/* Get Help Section Card */}
        <Card title="Get Help">
          <CardItem icon="❓" text="Profit Didn't Track?" />
          <CardItem icon="📧" text="Email Us" />
        </Card>

        {/* More Section Card */}
        <Card title="More">
          <CardItem icon="⚙️" text="Account Settings" />
          <CardItem icon="📄" text="Terms & Conditions" />
          <CardItem icon="🔒" text="Privacy Policy" />
          <CardItem icon="➡️" text="Logout" />
        </Card>
      </div>
    </div>
  );
}

export default ProfilePage;