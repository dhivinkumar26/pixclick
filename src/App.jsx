import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
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
import MainProfile from './Pages/MainProfile'
import MyEarnings from './components/MyProfile/Money/MyEarnings'
// import RequestPayment from './components/MyProfile/Money/RequestPayment'
import PaymentHistory from './components/MyProfile/Money/PaymentHistory'
import Reports from './components/MyProfile/Reports/Reports'
import FlipKartReport from './components/MyProfile/Reports/FlipkartReport'
import MyLinksPerformance from './components/MyProfile/Reports/MyLinksPerformance'
import ProfitShare from './components/MyProfile/ExclusiveTools/ProfitShare'
import EKAffiliaters from './components/MyProfile/ExclusiveTools/EKAffiliaters'
import JoinTelegram from './components/MyProfile/ExclusiveDeals/JoinTelegram'
import HowEKWorks from './components/MyProfile/EarnKaroAcademy/HowEKWorks'
import TopEarners from './components/MyProfile/EarnKaroAcademy/TopEarners'
import ReferEarn from './components/MyProfile/EarnExtraProfit/ReferEarn'
import ReferralNetwork from './components/MyProfile/EarnExtraProfit/ReferralNetwork'
import ProfitTrack from './components/MyProfile/GetHelp/ProfitTrack'
import EmailUs from './components/MyProfile/GetHelp/EmailUs'
import AccountSettings from './components/MyProfile/More/AccountSettings'
import PrivacyPolicy from './components/MyProfile/More/PrivacyPolicy'
import Logout from './components/MyProfile/More/Logout'

import BrandForm from './components/From/BrandFrom'

const AppRoutes = () => {
  const location = useLocation()
  const hideHeaderFooter = location.pathname === '/join-our-telegram'

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/make-links" element={<Makelinks />} />

        {/* MyProfile Routes */}
        <Route path="/myprofile" element={<MainProfile />} />
        <Route path="/my-earnings" element={<MyEarnings />} />
        <Route path="/request-payment" element={<Navigate to="/my-earnings?popup=true" replace />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/flipkart-reports" element={<FlipKartReport />} />
        <Route path="/my-link-performance" element={<MyLinksPerformance />} />
        <Route path="/profit-share" element={<ProfitShare />} />
        <Route path="/ek-affiliaters" element={<EKAffiliaters />} />
        <Route path="/how-earnkaro-works" element={<HowEKWorks />} />
        <Route path="/hear-from-our-top-earners" element={<TopEarners />} />
        <Route path="/refer-earn" element={<ReferEarn />} />
        <Route path="/referral-network" element={<ReferralNetwork />} />
        <Route path="/profit-track" element={<ProfitTrack />} />
        <Route path="/email-us" element={<EmailUs />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/logout" element={<Logout />} />


        {/* Brand Form */}

        <Route path="/brand-form" element={<BrandForm />} />


        {/* Footer useful reads */}
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/anti-spam" element={<Antispam />} />

        {/* Profitshala Nested Routes */}
        <Route path="/profitshala" element={<Earnmore />}>
          <Route path="earnkaro-basics" element={<EarnkaroBasics />} />
          <Route path="all-about-profit" element={<AllAboutProfit />} />
          <Route path="tips-tricks" element={<TipsTricks />} />
          <Route path="real-user-stories" element={<RealUserStories />} />
          <Route path="affiliaters" element={<Affiliaters />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>

        {/* Dynamic category route with sidebar */}
        <Route path="/:category" element={<CategoryLayout />} />

        {/* This route must render without header/footer */}
        <Route path="/join-our-telegram" element={<JoinTelegram />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  )
}

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
