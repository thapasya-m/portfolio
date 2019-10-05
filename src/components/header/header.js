import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

// import './header.css';

const Header = (props) => {
    return (
        <header
        // role="banner"
        // className="header"
        >
        <nav>
            <ul>
                <li>
                    <Link to="/about-me">about me</Link>
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