import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import OTP from './components/Login&signup/otp'
import Signup from './Pages/login&signup'
import Makelinks from './Pages/MakeLinkPages'
import Homepage from './pages/Homepage'
import CategoryLayout from './components/CategoryLayout'

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/make-links" element={<Makelinks />} />

        {/* Dynamic category route with sidebar */}
        <Route path="/:category" element={<CategoryLayout />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
