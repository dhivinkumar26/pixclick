import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import OTP from './components/Login&signup/otp'
import Signup from './pages/login&signup'
import Makelinks from './pages/MakeLinkPages'
import Earnings from './pages/MyEarnings'
import Total_Earnings from './Pages/Total_Earnings'
import Report from './Pages/Report'
import Order from './Pages/Order'
import Bonus from './Pages/Bonus'




const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/otp" element={<OTP/>} />
        <Route path="/login" element={<Signup/>} />
        <Route path="/profit" element={<></>} />
        <Route path="/make-links" element={<Makelinks/>} />
         <Route path="/earnings" element={<Earnings/>} />
         <Route path="/total_earn" element={<Total_Earnings/>} />
         <Route path="/report" element={<Report/>} />
         <Route path="/order" element={<Order/>} />
         <Route path="/bonus" element={<Bonus/>} />
        <Route path="/profile" element={<></>} />
      </Routes>
      {/* <Homepage/> */}

      <Footer />
    </Router>
  )
}

export default App
