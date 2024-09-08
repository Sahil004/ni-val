import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import { Helmet } from 'react-helmet';
import PrivacyPolicy from './components/PrivacyPolicy';
import Team from './components/About/Team';

// Custom hook to handle route changes
const RouteChangeHandler = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000
      once: true,
    });

    const cursor = document.querySelector('.cursor');
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');

    // Cursor movement logic
    const handleMouseMove = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    // Add class to enlarge cursor and apply blend mode on hover
    const handleMouseEnter = () => {
      cursor.classList.add('cursor-enlarge', 'cursor-blend');
    };

    // Remove class to revert cursor size and blend mode on hover out
    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-enlarge', 'cursor-blend');
    };

    // Attach event listeners to text elements
    textElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Mouse movement event
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      textElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [location]);

  return null; // This component does not render anything
};

function App() {
  return (
    <Router>
      <Helmet>
        <title>Ni-Val | Empowering Business Growth</title>
        <meta name="description" content="Ni-Val helps businesses grow through innovative lead generation and marketing strategies." />
      </Helmet>
      <RouteChangeHandler />
      <div className='cursor'></div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/lead-generation" element={<LeadGen />} />
        <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/content-marketing" element={<ContentMarketing />} />
        <Route path="/seo-optimization" element={<SeoOptimizationPage />} />
        <Route path="/social-media-leads" element={<SocialMediaLeads />} />
        <Route path="/ppc-advertising" element={<PPCAdvertising />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <Top />
    </Router>
  );
}

export default App;
