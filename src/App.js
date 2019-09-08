import React from 'react';
import './App.css';
import Header from './components/header/header';
// import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
    <Header />
    <div>
      <div className="image-wrapper">
        <div className="image left-face"></div>
        <div className="mid-line"></div>
        <div className="image right-face"></div>
      </div>
    </div>
      
    {/* <Footer /> */}
    </div>
  );
}

export default App;
