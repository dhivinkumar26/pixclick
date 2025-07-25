import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Auth
import OTP from './components/Login&signup/otp';
import Signup from './pages/login&signup';

// Pages
import Homepage from './Pages/Homepage';
import Partners from './Pages/Partners';
import Makelinks from './pages/MakeLinkPages';
import CategoryLayout from './components/CategoryLayout';

//homepage
import MostPopularStores from './components/Home/MostPopularStores';



// My earnings
import Earnings from './components/Makelinks/Myearnings/Earning';
import Total_Earnings from './components/Makelinks/Myearnings/total_earning';
import Report from './components/Makelinks/Myearnings/report';
import Order from './components/Makelinks/Myearnings/order';
import Bonus from './components/Makelinks/Myearnings/bonus';

// Earnmore Nested Pages
import Earnmore from './Pages/Earnmore';
import EarnkaroBasics from './components/Earnmorechild/Earnkarobasics';
import AllAboutProfit from './components/Earnmorechild/Allaboutprofit';
import TipsTricks from './components/Earnmorechild/Tipstricks';
import RealUserStories from './components/Earnmorechild/Realuserstories';
import Affiliaters from './components/Earnmorechild/Affilaters';
import ContactUs from './components/Earnmorechild/ContactUs';

// Earnmore Grandchild Pages
import Earnmoneythroughaffiliatemarketing from './components/Earnmorechild/Earnkarobasicgrandchild/Earnmoneythroughaffiliatemarketing';
import Findavailableretailersonearnkaro from './components/Earnmorechild/Earnkarobasicgrandchild/Findavailableretailersonearnkaro';
import Changelanguageonearnkaro from './components/Earnmorechild/Earnkarobasicgrandchild/Changelanguageonearnkaro';
import Checklinkperformance from './components/Earnmorechild/Earnkarobasicgrandchild/Checklinkperformance';
import Howtocheckprofitrates from './components/Earnmorechild/Allaboutprofitgrandchild/Howtoheckprofitrates';
import Howtomakeprofitlinks from './components/Earnmorechild/Allaboutprofitgrandchild/Howtomakeprofitlinks';
import Howisyourprofittracked from './components/Earnmorechild/Allaboutprofitgrandchild/Howisyourprofittracked';
import Howtocheckyourearnedprofit from './components/Earnmorechild/Allaboutprofitgrandchild/Howtocheckyourearnedprofit';
import Howtotransfermoneytoyourbankaccount from './components/Earnmorechild/Allaboutprofitgrandchild/Howtotransfermoneytoyourbankaccount';
import Howtoreferandearnprofitforalifetime from './components/Earnmorechild/Allaboutprofitgrandchild/Howtoreferandearnprofitforalifetime';
import Howisreferralearningsdifferentfrompartnerprofitearnings from './components/Earnmorechild/Allaboutprofitgrandchild/Howisreferralearningsdifferentfrompartnerprofitearnings';

// About PixClick
import AboutHero from './components/Footer/About pixclick/AboutUs';
import FAQ from './components/Footer/About pixclick/faq';
import Blog from './components/Footer/About pixclick/blog';
import Read_more from './components/Footer/About pixclick/blog_readmore';

// Footer Useful Reads
import TermsConditions from './components/Footer/Footer useful reads/Termsconditions';
import Privacy from './components/Footer/Footer useful reads/privacy';
import Antispam from './components/Footer/Footer useful reads/Antispampolicy';

// Makelinks Sidebar Pages
import Reports from './components/Makelinks/Reports/Reports';
import ProfitTrack from './components/Makelinks/ProfitTrack/Track';
import Request from './components/Makelinks/Request/ShareMoreModal';
import History from './components/Makelinks/History/History';
import AccountSettings from './components/Makelinks/Account/AccountSettings';

// MyProfile Pages
import MainProfile from './Pages/MainProfile';
import RequestPayment from './components/MyProfile/Money/RequestPayment';
import FlipKartReport from './components/MyProfile/Reports/FlipkartReport';
import MyLinksPerformance from './components/MyProfile/Reports/MyLinksPerformance';
import ProfitShare from './components/MyProfile/ExclusiveTools/ProfitShare';
import EKAffiliaters from './components/MyProfile/ExclusiveTools/EKAffiliaters';
import JoinTelegram from './components/MyProfile/ExclusiveDeals/JoinTelegram';
import HowEKWorks from './components/MyProfile/EarnKaroAcademy/HowEKWorks';
import TopEarners from './components/MyProfile/EarnKaroAcademy/TopEarners';
import ReferEarn from './components/MyProfile/EarnExtraProfit/ReferEarn';
import ReferralNetwork from './components/MyProfile/EarnExtraProfit/ReferralNetwork';
import EmailUs from './components/MyProfile/GetHelp/EmailUs';
import PrivacyPolicy from './components/MyProfile/More/PrivacyPolicy';
import Logout from './components/MyProfile/More/Logout';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/make-links" element={<Makelinks />} />

        {/* My earnings additional pages */}
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/total_earn" element={<Total_Earnings />} />
        <Route path="/report" element={<Report />} />
        <Route path="/order" element={<Order />} />
        <Route path="/bonus" element={<Bonus />} />

        {/* Earnmore Nested & Grandchild Routes */}
        <Route path="/profitshala" element={<Earnmore />}>
          <Route path="earnkaro-basics" element={<EarnkaroBasics />}>
            <Route path="how-to-earn-money-through-affiliate-marketing" element={<Earnmoneythroughaffiliatemarketing />} />
            <Route path="how-to-find-retailers-on-earnkaro" element={<Findavailableretailersonearnkaro />} />
            <Route path="how-to-check-link-performance" element={<Checklinkperformance />} />
            <Route path="how-to-change-language" element={<Changelanguageonearnkaro />} />
          </Route>
          <Route path="all-about-profit" element={<AllAboutProfit />}>
            <Route path="how-to-check-profit-rates" element={<Howtocheckprofitrates />} />
            <Route path="how-to-make-profit-links" element={<Howtomakeprofitlinks />} />
            <Route path="how-is-your-profit-tracked" element={<Howisyourprofittracked />} />
            <Route path="how-to-check-your-earned-profit" element={<Howtocheckyourearnedprofit />} />
            <Route path="how-to-transfer-money-to-your-bank-account" element={<Howtotransfermoneytoyourbankaccount />} />
            <Route path="how-to-refer-and-earn-profit-for-a-lifetime" element={<Howtoreferandearnprofitforalifetime />} />
            <Route path="how-is-referral-earnings-different-from-partner-profit-earnings" element={<Howisreferralearningsdifferentfrompartnerprofitearnings />} />
          </Route>
          <Route path="tips-tricks" element={<TipsTricks />} />
          <Route path="real-user-stories" element={<RealUserStories />} />
          <Route path="affiliaters" element={<Affiliaters />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>

        {/* Makelinks Sidebar Pages */}
        <Route path="/my-earnings" element={<Earnings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profit-track" element={<ProfitTrack />} />
        <Route path="/request" element={<Request />} />
        <Route path="/payment-history" element={<History />} />
        <Route path="/account-settings" element={<AccountSettings />} />

        {/* MyProfile Pages */}
        <Route path="/myprofile" element={<MainProfile />} />
        <Route path="/request-payment" element={<RequestPayment />} />
        <Route path="/flipkart-report" element={<FlipKartReport />} />
        <Route path="/my-links-performance" element={<MyLinksPerformance />} />
        <Route path="/profit-share" element={<ProfitShare />} />
        <Route path="/ek-affiliaters" element={<EKAffiliaters />} />
        <Route path="/join-telegram" element={<JoinTelegram />} />
        <Route path="/how-ek-works" element={<HowEKWorks />} />
        <Route path="/top-earners" element={<TopEarners />} />
        <Route path="/refer-earn" element={<ReferEarn />} />
        <Route path="/referral-network" element={<ReferralNetwork />} />
        <Route path="/email-us" element={<EmailUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/logout" element={<Logout />} />

        {/* About PixClick */}
        <Route path="/about" element={<AboutHero />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/read/:id" element={<Read_more />} />

        {/* Footer Useful Reads */}
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/anti-spam" element={<Antispam />} />

        {/* Dynamic category page */}
        <Route path="/:category" element={<CategoryLayout />} />

        <Route path='/most-popular-stores' element={<MostPopularStores />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
