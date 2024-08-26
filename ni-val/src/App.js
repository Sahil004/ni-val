import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Aboutus />
      {/* Other components go here */}
    </div>
  );
}

export default App;
