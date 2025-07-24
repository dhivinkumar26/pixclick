import React from 'react'
import Hero from "../components/Home/Herosection.jsx";
import Tabs from "../components/Home/TabSection.jsx";
// import RetailerSection from "../components/Home/RetailerSection.jsx";
import RetailerCarousel from "../components/Home/RetailerCarousel.jsx";






const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Tabs/>
      {/* <RetailerSection/> */}
      <RetailerCarousel/>
      
      
    </div>
  )
}

export default Homepage
