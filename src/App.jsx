import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/Pages/Homepage'

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/profit" element={<></>} />
        <Route path="/make-links" element={<></>} />
        <Route path="/profile" element={<></>} />
      </Routes>
      <Homepage/>

      <Footer />
    </Router>
  )
}

export default App
