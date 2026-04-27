import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// Page Imports (will create these next)
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import OrderNow from './pages/OrderNow.jsx';
import Catering from './pages/Catering.jsx';
import Reserve from './pages/Reserve.jsx';
import Testimonials from './pages/Testimonials.jsx';
import OurStory from './pages/OurStory.jsx';
import Contact from './pages/Contact.jsx';
import Location from './pages/Location.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Terms from './pages/Terms.jsx';
import FAQ from './pages/FAQ.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-sandal flex flex-col font-poppins text-text-primary">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order-now" element={<OrderNow />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
