import React from 'react';
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
      <div style={{color: "blue"}}>
        <a href="https://balsamiq.cloud/s6di74y/pwdw20j">[WIREFRAME] 
        Contents to be added in future deployments.</a>
      </div>
      <footer style={{position: 'absolute', bottom:'1px'}}>2019 thapasya m</footer>
    </div>
  );
}

export default App;
