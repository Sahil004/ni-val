import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import Counters from './components/Counters';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Aboutus />
      <Counters />
      {/* Other components go here */}
    </div>
  );
}

export default App;
