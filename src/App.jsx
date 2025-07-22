import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import OTP from './components/Login&signup/otp'
import Signup from './pages/login&signup'
import Makelinks from './pages/MakeLinkPages'
import Earnmore from './Pages/Earnmore'
import Homepage from './Pages/Homepage'
import Partners from './Pages/Partners'


import EarnkaroBasics from "./components/Earnmorechild/Earnkarobasics"
import AllAboutProfit from "./components/Earnmorechild/Allaboutprofit"
import TipsTricks from "./components/Earnmorechild/Tipstricks"
import RealUserStories from "./components/Earnmorechild/Realuserstories"
import Affiliaters from "./components/Earnmorechild/Affilaters"
import ContactUs from "./components/Earnmorechild/ContactUs"



const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/otp" element={<OTP/>} />
        <Route path="/login" element={<Signup/>} />
        <Route path="/partners" element={<Partners />} />

        
        
        <Route path="/make-links" element={<Makelinks/>} />
        <Route path="/profile" element={<></>} />
        <Route path="/profitshala" element={<Earnmore />}>
          <Route path="earnkaro-basics" element={<EarnkaroBasics />} />
          <Route path="all-about-profit" element={<AllAboutProfit />} />
          <Route path="tips-tricks" element={<TipsTricks />} />
          <Route path="real-user-stories" element={<RealUserStories />} />
          <Route path="affiliaters" element={<Affiliaters />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
       
      </Routes>
      {/* <Homepage/> */}

      <Footer />
    </Router>
  )
}

export default App
