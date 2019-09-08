import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
    <Header />
      
      <div className="image-wrapper">
        <div className="left-face"></div>
        <div className="mid-line"></div>
        <div className="right-face"></div>
      </div>
      
    <Footer />
    </div>
  );
}

export default App;
