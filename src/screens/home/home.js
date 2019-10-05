import React from 'react';
// import './App.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Home() {
  return (
    <main className="App">
      <Header />
        <section className="hero">
          <div className="image-wrapper">
            <div className="image left-face"></div>
            <div className="mid-line"></div>
            <div className="image right-face"></div>
          </div>
        </section>
      <Footer />
    </main>
  );
}

export default Home;
