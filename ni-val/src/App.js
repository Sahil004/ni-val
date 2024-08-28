import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <Top />
      {/* Other components go here */}
    </div>
  );
}

export default App;
