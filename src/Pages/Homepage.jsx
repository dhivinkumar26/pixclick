import React from 'react'
import Hero from "../components/Home/Herosection.jsx";
import Tabs from "../components/Home/TabSection.jsx"
import RetailerSlider from '../components/Home/RetailerSlider.jsx';




const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Tabs/>
      <RetailerSlider/>
    </div>
  )
}

export default Homepage
