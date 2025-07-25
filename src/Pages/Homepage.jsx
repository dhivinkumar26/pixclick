import React from 'react'
import Hero from "../components/Home/Herosection.jsx";
import Tabs from "../components/Home/TabSection.jsx"
import RetailerSlider from '../components/Home/RetailerSlider.jsx';
import FinanceDeals from '../components/Home/FinanceDeals.jsx';
import Deals from '../components/Home/Deals.jsx';




const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Tabs/>
      <RetailerSlider/>
      <FinanceDeals/>
      <Deals/>
    </div>
  )
}

export default Homepage
