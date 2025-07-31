import React from 'react'
import Hero from "../components/Home/Herosection.jsx";
import Tabs from "../components/Home/TabSection.jsx"
import RetailerSlider from '../components/Home/RetailerSlider.jsx';
import FinanceDeals from '../components/Home/FinanceDeals.jsx';
import Deals from '../components/Home/Deals.jsx';
import TopDeals from '../components/Home/TopDeals.jsx';
import Shopsy from '../components/Home/Shopsy.jsx';
import Flipkart from '../components/Home/Flipkart.jsx';
import BestFashion from '../components/Home/BestFashion.jsx';
import NewEarn from '../components/Home/NewEarn.jsx';
import PersonalCare from '../components/Home/PersonalCare.jsx';




const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Tabs/>
      <RetailerSlider/>
      <FinanceDeals/>
      <Deals/>
      <TopDeals/>
      <Shopsy/>
      <Flipkart/>
      <BestFashion/>
      <NewEarn/>
      <PersonalCare/>
    </div>
  )
}

export default Homepage
