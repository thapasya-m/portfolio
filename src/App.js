import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import image1 from './assets/images/image.png';

function App() {
  return (
    <div className="App">
    <Header />
      <div className="main" style={{color: "blue"}}>
        <div className="image-wrapper">
          <img src={image1} alt="thats me"/>
        </div>
        {/* <a href="https://balsamiq.cloud/s6di74y/pwdw20j">[WIREFRAME] 
        Contents to be added in future deployments.</a> */}
      </div>
    <Footer />
    </div>
  );
}

export default App;
