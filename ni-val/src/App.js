import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';
import Service from './components/Service/Service';
import Aboutus from './components/Home/Aboutus';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
      <Footer />
      <Top />
    </Router>
  );
}

export default App;
