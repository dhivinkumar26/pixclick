import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Auth
import OTP from './components/Login&signup/otp';
import Signup from './Pages/login&signup';

// Pages
import Homepage from './Pages/Homepage';
import Partners from './Pages/Partners';
import Makelinks from './Pages/MakeLinkPages';
import CategoryLayout from './components/CategoryLayout';
import MostPopularStores from './components/Home/MostPopularStores';

// Makelinks Sidebar Pages
import Earnings from './components/Makelinks/Myearnings/Earning';
import Total_Earnings from './components/Makelinks/Myearnings/total_earning';
import Report from './components/Makelinks/Myearnings/report';
import Order from './components/Makelinks/Myearnings/order';
import Bonus from './components/Makelinks/Myearnings/bonus';
import Reports from './components/Makelinks/Reports/Reports'; // This was duplicated, kept the one with 'Reports'
import ProfitTrack from './components/Makelinks/ProfitTrack/Track';
import Request from './components/Makelinks/Request/ShareMoreModal';
import History from './components/Makelinks/History/History';
import AccountSettings from './components/Makelinks/Account/AccountSettings';

// MyProfile Pages
import MainProfile from './Pages/MainProfile';
import PaymentHistory from './components/MyProfile/Money/PaymentHistory';
import FlipKartReport from './components/MyProfile/Reports/FlipkartReport';
import MyLinksPerformance from './components/MyProfile/Reports/MyLinksPerformance';
import ProfitShare from './components/MyProfile/ExclusiveTools/ProfitShare';
import EKAffiliaters from './components/MyProfile/ExclusiveTools/EKAffiliaters';
import JoinTelegram from './components/MyProfile/ExclusiveDeals/JoinTelegram';
import HowEKWorks from './components/MyProfile/EarnKaroAcademy/HowEKWorks';
import TopEarners from './components/MyProfile/EarnKaroAcademy/TopEarners';
import ReferEarn from './components/MyProfile/EarnExtraProfit/ReferEarn';
import ReferralNetwork from './components/MyProfile/EarnExtraProfit/ReferralNetwork';
import ProfitTrackProfile from './components/MyProfile/GetHelp/ProfitTrack';
import EmailUs from './components/MyProfile/GetHelp/EmailUs';
import AccountSettingsProfile from './components/MyProfile/More/AccountSettings';
import Logout from './components/MyProfile/More/Logout';
import Goto from './components/MyProfile/ExclusiveTools/goto_profit';
import Profit_Affiliaters from './Pages/EKAffiliaters';

// Earnmore Nested & Grandchild Pages
import Earnmore from './Pages/Earnmore';
import EarnkaroBasics from './components/Earnmorechild/Earnkarobasics';
import AllAboutProfit from './components/Earnmorechild/Allaboutprofit';
import TipsTricks from './components/Earnmorechild/Tipstricks';
import RealUserStories from './components/Earnmorechild/Realuserstories';
import Affiliaters from './components/Earnmorechild/Affilaters';
import ContactUs from './components/Earnmorechild/Contactus';
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
import Howtofindexclusivedealsontheappdaily from './components/Earnmorechild/Tipstricksgrandchild/Howtofindexclusivedealsontheappdaily';
import Howotmakegooddeallinkspart1 from './components/Earnmorechild/Tipstricksgrandchild/Howtomakegooddeallinkspart1';
import Howtomakegooddeallinkspart2 from './components/Earnmorechild/Tipstricksgrandchild/Howtomakegooddeallinkspart2';
import Differenttipstoshareprofitlinks from './components/Earnmorechild/Tipstricksgrandchild/Differenttipstoshareprofitlinks';
import Howtogrownetworkandearnmoreprofit from './components/Earnmorechild/Tipstricksgrandchild/Howtogrownetworkandearnmoreprofit';
import Dosanddontstoavoidmissingprofit from './components/Earnmorechild/Tipstricksgrandchild/Dosanddontstoavoidmissingprofit';
import Watchsahiltalkabouthisexperiencewithearnkaro from "./components/Earnmorechild/Realuserstoriesgrandchild/Watchsahiltalkabouthisexperiencewithearnkaro";
import Souravakaeagletektalksabouthisfinancialgrowthwithearnkaro from "./components/Earnmorechild/Realuserstoriesgrandchild/Souravakaeagletektalksabouthisfinancialgrowthwithearnkaro";
import Getinspiredbyprabhusearnkarojourney from "./components/Earnmorechild/Realuserstoriesgrandchild/Getinspiredbyprabhusearnkarojourney";
import Listentoabdulsfinanceearningsviaearnkaro from "./components/Earnmorechild/Realuserstoriesgrandchild/Listentoabdulsfinanceearningsviaearnkaro";
import Watchabhilashrecounthisearnkarojourney from "./components/Earnmorechild/Realuserstoriesgrandchild/Watchabhilashrecounthisearnkarojourney";
import Listentorajsinspiringearnkarojourney from "./components/Earnmorechild/Realuserstoriesgrandchild/Listentorajsinspiringearnkarojourney";
import Whatisekaffiliaters from "./components/Earnmorechild/Affilatersgrandchild/Whatisekaffiliaters";
import Howtosetupthetelegramautoforwarderbot from "./components/Earnmorechild/Affilatersgrandchild/Howtosetupthetelegramautoforwarderbot";
import Howtoautomatetelegramchannelforautoposting from "./components/Earnmorechild/Affilatersgrandchild/Howtoautomatetelegramchannelforautoposting";
import Howtoautomatewhatsappgroupsforautoposting from "./components/Earnmorechild/Affilatersgrandchild/Howtoautomatewhatsappgroupsforautoposting";
import Howtogetyourownflipkarttag from "./components/Earnmorechild/Affilatersgrandchild/Howtogetyourownflipkarttag";
import Howtosyncyouramazontagwithekaffiliaters from "./components/Earnmorechild/Affilatersgrandchild/Howtosyncyouramazontagwithekaffiliaters";

// About PixClick
import AboutHero from './components/Footer/About pixclick/AboutUs';
import FAQ from './components/Footer/About pixclick/faq';
import Blog from './components/Footer/About pixclick/blog';
import Read_more from './components/Footer/About pixclick/blog_readmore';

// Footer Useful Reads
import TermsConditions from './components/Footer/Footer useful reads/Termsconditions';
import Privacy from './components/Footer/Footer useful reads/privacy';
import Antispam from './components/Footer/Footer useful reads/Antispampolicy';

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
        <Route path="/most-popular-stores" element={<MostPopularStores />} />

        {/* Makelinks Sidebar */}
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/total_earn" element={<Total_Earnings />} />
        <Route path="/reports" element={<Reports />} /> {/* Corrected to Reports */}
        <Route path="/order" element={<Order />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/my-earnings" element={<Earnings />} /> {/* Duplicate, but kept if explicitly needed */}
        <Route path="/profit-track" element={<ProfitTrack />} />
        <Route path="/request" element={<Request />} />
        <Route path="/payment-history" element={<History />} />
        <Route path="/account-settings" element={<AccountSettings />} />

        {/* MyProfile Pages */}
        <Route path="/myprofile" element={<MainProfile />} />
        <Route path="/request-payment" element={<Navigate to="/my-earnings?popup=true" replace />} />
        <Route path="/payment-history-profile" element={<PaymentHistory />} />
        <Route path="/flipkart-report" element={<FlipKartReport />} />
        <Route path="/my-links-performance" element={<MyLinksPerformance />} />
        <Route path="/profit-share" element={<ProfitShare />} />
        <Route path="/ek-affiliaters" element={<EKAffiliaters />} />
        <Route path="/join-telegram" element={<JoinTelegram />} />
        <Route path="/how-ek-works" element={<HowEKWorks />} />
        <Route path="/top-earners" element={<TopEarners />} />
        <Route path="/refer-earn" element={<ReferEarn />} />
        <Route path="/referral-network" element={<ReferralNetwork />} />
        <Route path="/profit-track-profile" element={<ProfitTrackProfile />} />
        <Route path="/email-us" element={<EmailUs />} />
        <Route path="/account-settings-profile" element={<AccountSettingsProfile />} />
        <Route path="/privacy-policy" element={<Privacy />} /> {/* Using the Privacy component from Footer Useful Reads */}
        <Route path="/logout" element={<Logout />} />
        <Route path="/goto" element={<Goto />} />
        <Route path="/EKA" element={<Profit_Affiliaters />} />

        {/* Earnmore Nested & Grandchild Routes */}
        <Route path="/profitshala" element={<Earnmore />}>
          <Route path="earnkaro-basics" element={<EarnkaroBasics />}>
            <Route path="how-to-earn-money-through-affiliate-marketing" element={<Earnmoneythroughaffiliatemarketing />} />
            <Route path="how-to-find-retailers-on-earnkaro" element={<Findavailableretailersonearnkaro />} />
            <Route path="how-to-check-link-performance" element={<Checklinkperformance />} />
            <Route path="how-to-change-language" element={<Changelanguageonearnkaro />} />
          </Route>

          <Route path="all-about-profit" element={<AllAboutProfit />} >
            <Route path="how-to-check-profit-rates" element={<Howtocheckprofitrates/>}/>
            <Route path="how-to-make-profit-links" element ={<Howtomakeprofitlinks/>}/>
            <Route path="how-is-your-profit-tracked" element ={<Howisyourprofittracked/>}/>
            <Route path="how-to-check-your-earned-profit" element={<Howtocheckyourearnedprofit/>}/>
            <Route path="how-to-transfer-money-to-your-bank-account" element={<Howtotransfermoneytoyourbankaccount/>}/>
            <Route path="how-to-refer-and-earn-profit-for-a-lifetime" element={<Howtoreferandearnprofitforalifetime/>}/>
            <Route path="how-is-referral-earnings-different-from-partner-profit-earnings" element={<Howisreferralearningsdifferentfrompartnerprofitearnings/>}/>
          </Route>

          <Route path="tips-tricks" element={<TipsTricks />} >
            <Route path="how-to-find-exclusive-deals-on-the-app-daily" element={<Howtofindexclusivedealsontheappdaily/>}/>
            <Route path="how-to-make-good-deal-links-part-1" element={<Howotmakegooddeallinkspart1/>}/>
            <Route path="how-to-make-good-deal-links-part-2" element={<Howtomakegooddeallinkspart2/>}/>
            <Route path="different-tips-to-share-profit-links" element={<Differenttipstoshareprofitlinks/>}/>
            <Route path="how-to-grow-network-and-earn-more-profit" element={<Howtogrownetworkandearnmoreprofit/>}/>
            <Route path="dos-and-donts-to-avoid-missing-profit" element={<Dosanddontstoavoidmissingprofit/>}/>
          </Route>

          <Route path="real-user-stories" element={<RealUserStories />} >
            <Route path="Watch-sahil-talk-about-his-experience-with-earnKaro" element={<Watchsahiltalkabouthisexperiencewithearnkaro/>}/>
            <Route path="Sourav-aka-eagle-tek-talks-about-his-financial-growth-with-earnKaro" element={<Souravakaeagletektalksabouthisfinancialgrowthwithearnkaro/>}/>
            <Route path="Get-inspired-by-prabhus-earnKaro-journey" element={<Getinspiredbyprabhusearnkarojourney/>}/>
            <Route path="Listen-to-abduls-finance-earnings-via-earnkaro" element={<Listentoabdulsfinanceearningsviaearnkaro/>}/>
            <Route path="Watch-abhilash-recount-his-earnKkaro-journey" element={<Watchabhilashrecounthisearnkarojourney/>}/>
            <Route path="Listen-to-rajs-inspiring-earnkaro-journey" element={<Listentorajsinspiringearnkarojourney/>}/>
          </Route>

          <Route path="affiliaters" element={<Affiliaters />} >
            <Route path="What-is-ek-affiliaters" element={<Whatisekaffiliaters/>}/>
            <Route path="How-to-set-up-the-telegram-auto-forwarder-bot" element={<Howtosetupthetelegramautoforwarderbot/>}/>
            <Route path="How-to-automate-telegram-channel-for-auto-posting" element={<Howtoautomatetelegramchannelforautoposting/>}/>
            <Route path="How-to-automate-whatsapp-groups-for-auto-posting" element={<Howtoautomatewhatsappgroupsforautoposting/>}/>
            <Route path="How-to-get-your-own-flipkart-tag" element={<Howtogetyourownflipkarttag/>}/>
            <Route path="How-to-sync-your-amazon-tag-with-ek-affiliaters" element={<Howtosyncyouramazontagwithekaffiliaters/>}/>
          </Route>
          
          <Route path="contact-us" element={<ContactUs />} />
        </Route>

        {/* About PixClick */}
        <Route path="/about" element={<AboutHero />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/read/:id" element={<Read_more />} />

        {/* Footer Useful Reads */}
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/anti-spam" element={<Antispam />} />

        {/* Dynamic Category */}
        <Route path="/:category" element={<CategoryLayout />} />

        {/* This route must render without header/footer */}
        <Route path="/join-our-telegram" element={<JoinTelegram />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;