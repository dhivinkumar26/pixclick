import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import OTP from './components/Login&signup/otp'
<<<<<<< HEAD
import Signup from './pages/login&signup'
import Makelinks from './pages/MakeLinkPages'
import Earnmore from './components/Pages/Earnmore'
=======
import Signup from './Pages/login&signup'
import Makelinks from './Pages/MakeLinkPages'
import Homepage from './Pages/Homepage'
import Partners from './Pages/Partners'
>>>>>>> Mayakannan



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
<<<<<<< HEAD
        <Route path="/profile" element={<></>} />
        <Route path="/profitshala" element={<Earnmore/>} />
=======
       
>>>>>>> Mayakannan
      </Routes>
      {/* <Homepage/> */}

      <Footer />
    </Router>
  )
}

export default App
