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
      </Routes>
      <Footer />
      <Top />
    </Router>
  );
}

export default App;
