import React, { useEffect } from 'react'; // Combine all React imports here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';
import Service from './components/Service/Service';
import About from './components/About/About';
import Contactus from './components/contact/Contactus';
import LeadGen from './components/Service/LeadGen';
import EmailMarketing from './components/Service/EmailMarketing';

import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';      // Import AOS
import ScrollToTop from './components/ScrollToTop';
import ContentMarketing from './components/Service/ContentMarketing';
import SeoOptimizationPage from './components/Service/SeoOptimization';
import SocialMediaLeads from './components/Service/SocialMediaLeadGen';
import PPCAdvertising from './components/Service/PPCAdvertising';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Animation happens only once
    });
  }, []);

  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/lead-generation" element={<LeadGen />}/>
        <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/content-marketing" element={<ContentMarketing />} />
        <Route path="/seo-optimization" element={<SeoOptimizationPage />} />
        <Route path="/social-media-leads" element={<SocialMediaLeads />} />
        <Route path="/ppc-advertising" element={<PPCAdvertising />} />
      </Routes>
      <Footer />
      <Top />
    </Router>
  );
}

export default App;
