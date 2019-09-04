import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="">
        {/* [TODO]--------------use router dom------browser router-------------- */}
        <ul style={{display: "flex", justifyContent:"space-around"}}>
          <li>about me</li>
          <li>projects</li>
          <li>skills</li>
          <li>contact me</li>
        </ul>
      </header>

      <footer style={{position: 'absolute', bottom:'1px'}}>2019 thapasya m</footer>
    </div>
  );
}

export default App;
