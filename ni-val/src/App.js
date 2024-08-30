import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';
import Service from './components/Service/Service';
import About from './components/About/About';
import Contactus from './components/contact/Contactus';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contactus />}/>
      </Routes>
      <Footer />
      <Top />
    </Router>
  );
}

export default App;
