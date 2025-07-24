import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import OTP from './components/Login&signup/otp'

import Signup from './Pages/login&signup'
import Makelinks from './Pages/MakeLinkPages'
import Earnmore from './Pages/Earnmore'
import Homepage from './Pages/Homepage'
import Partners from './Pages/Partners'
import CategoryLayout from './components/CategoryLayout'

import EarnkaroBasics from "./components/Earnmorechild/Earnkarobasics"
import AllAboutProfit from "./components/Earnmorechild/Allaboutprofit"
import TipsTricks from "./components/Earnmorechild/Tipstricks"
import RealUserStories from "./components/Earnmorechild/Realuserstories"
import Affiliaters from "./components/Earnmorechild/Affilaters"
import ContactUs from "./components/Earnmorechild/ContactUs"

import TermsConditions from './components/Footer useful reads/Termsconditions'
import Privacy from "./components/Footer useful reads/privacy"
import Antispam from "./components/Footer useful reads/Antispampolicy"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/make-links" element={<Makelinks />} />

        {/* My earnings additional pages */}
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/total_earn" element={<Total_Earnings />} />
        <Route path="/report" element={<Report />} />
        <Route path="/order" element={<Order />} />
        <Route path="/bonus" element={<Bonus />} />

        {/* Earnmore Nested & Grandchild Routes */}
        <Route path="/profitshala" element={<Earnmore />}>
          <Route path="earnkaro-basics" element={<EarnkaroBasics />}>
            <Route path="how-to-earn-money-through-affiliate-marketing" element={<Earnmoneythroughaffiliatemarketing />} />
            <Route path="how-to-find-retailers-on-earnkaro" element={<Findavailableretailersonearnkaro />} />
            <Route path="how-to-check-link-performance" element={<Checklinkperformance />} />
            <Route path="how-to-change-language" element={<Changelanguageonearnkaro />} />
          </Route>
          <Route path="all-about-profit" element={<AllAboutProfit />} />
          <Route path="tips-tricks" element={<TipsTricks />} />
          <Route path="real-user-stories" element={<RealUserStories />} />
          <Route path="affiliaters" element={<Affiliaters />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>

        {/* Makelinks Sidebar Pages */}
        <Route path="/my-earnings" element={<MyEarnings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profit-track" element={<ProfitTrack />} />
        <Route path="/request" element={<Request />} />
        <Route path="/payment-history" element={<History />} />
        <Route path="/account-settings" element={<AccountSettings />} />

        {/* MyProfile Pages */}
        <Route path="/myprofile" element={<MainProfile />} />
        <Route path="/request-payment" element={<RequestPayment />} />
        <Route path="/flipkart-report" element={<FlipKartReport />} />
        <Route path="/my-links-performance" element={<MyLinksPerformance />} />
        <Route path="/profit-share" element={<ProfitShare />} />
        <Route path="/ek-affiliaters" element={<EKAffiliaters />} />
        <Route path="/join-telegram" element={<JoinTelegram />} />
        <Route path="/how-ek-works" element={<HowEKWorks />} />
        <Route path="/top-earners" element={<TopEarners />} />
        <Route path="/refer-earn" element={<ReferEarn />} />
        <Route path="/referral-network" element={<ReferralNetwork />} />
        <Route path="/email-us" element={<EmailUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/logout" element={<Logout />} />

        {/* About PixClick */}
        <Route path="/about" element={<AboutHero />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        {/* updated dynamic read page */}
        <Route path="/read/:id" element={<Read_more />} />

        {/* Footer Useful Reads */}
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/anti-spam" element={<Antispam />} />

        {/* Dynamic category page */}
        <Route path="/:category" element={<CategoryLayout />} />

        <Route path="/most-popular-stores" element={<MostPopularStores />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
