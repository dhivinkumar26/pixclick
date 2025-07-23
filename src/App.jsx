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

// Shibu branch pages
import Earnings from './pages/MyEarnings';
import Total_Earnings from './Pages/Total_Earnings';
import Report from './Pages/Report';
import Order from './Pages/Order';
import Bonus from './Pages/Bonus';

// Earnmore Nested Pages
import Earnmore from './Pages/Earnmore';
import EarnkaroBasics from './components/Earnmorechild/Earnkarobasics';
import AllAboutProfit from './components/Earnmorechild/Allaboutprofit';
import TipsTricks from './components/Earnmorechild/Tipstricks';
import RealUserStories from './components/Earnmorechild/Realuserstories';
import Affiliaters from './components/Earnmorechild/Affilaters';
import ContactUs from './components/Earnmorechild/ContactUs';

// Footer Useful Reads
import TermsConditions from './components/Footer useful reads/Termsconditions';
import Privacy from './components/Footer useful reads/privacy';
import Antispam from './components/Footer useful reads/Antispampolicy';

// Makelinks Sidebar Pages
import MyEarnings from './components/Makelinks/Myearnings/Earning';
import Reports from './components/Makelinks/Reports/Reports';
import ProfitTrack from './components/Makelinks/ProfitTrack/Track';
import Request from './components/Makelinks/Request/ShareMoreModal';
import History from './components/Makelinks/History/History';
import AccountSettings from './components/Makelinks/Account/AccountSettings';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {/* 🔹 Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/make-links" element={<Makelinks />} />

        {/* 🔹 Shibu branch additional pages */}
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/total_earn" element={<Total_Earnings />} />
        <Route path="/report" element={<Report />} />
        <Route path="/order" element={<Order />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/profile" element={<></>} /> {/* Empty placeholder */}

        {/* 🔹 Footer - Legal Pages */}
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/anti-spam" element={<Antispam />} />

        {/* 🔹 Earnmore Nested Routes */}
        <Route path="/profitshala" element={<Earnmore />}>
          <Route path="earnkaro-basics" element={<EarnkaroBasics />} />
          <Route path="all-about-profit" element={<AllAboutProfit />} />
          <Route path="tips-tricks" element={<TipsTricks />} />
          <Route path="real-user-stories" element={<RealUserStories />} />
          <Route path="affiliaters" element={<Affiliaters />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>

        {/* 🔹 Sidebar (Makelinks) Pages */}
        <Route path="/my-earnings" element={<MyEarnings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profit-track" element={<ProfitTrack />} />
        <Route path="/request" element={<Request />} />
        <Route path="/payment-history" element={<History />} />
        <Route path="/account-settings" element={<AccountSettings />} />

        {/* 🔹 Dynamic category page */}
        <Route path="/:category" element={<CategoryLayout />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
