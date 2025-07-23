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
import MainProfile from './Pages/MainProfile'

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/make-links" element={<Makelinks />} />

        {/* MyProfile Routes */}
        <Route path="/myprofile" element={<MainProfile/>} />

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
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
