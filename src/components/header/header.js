import React from 'react';
import logo from '../../assets/images/logo.png'

// import './header.css';

const Header = (props) => {
    return (
        <header 
        // role="banner"
        // className="header"
        >
        {/* header */}
            {/* <a href="/">
                <img src={logo} alt="logo"/>
            </a> */}
        {/* [TODO]----------use router dom------browser router-------------- */}
        <nav>
            <ul>
                <li>
                    <a href="/">about me</a>
                    <span>/</span>
                </li>
                <li>
                    <a href="/">projects</a>
                    <span>/</span>
                </li>
                <li>
                    <a href="/">skills</a>
                    <span>/</span>
                </li>
                <li>
                    <a href="/">contact</a>
                </li>
            </ul>
        </nav>
        
      </header>
    );
}
export default Header;