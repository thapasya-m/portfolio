import React from 'react';
import './header.css';

const Header = (props) => {
    return (
        <header className="header">
        {/* [TODO]----------use router dom------browser router-------------- */}
        <nav>
            <ul>
                <li>
                    <a href="/about">about me</a>
                    <span>/</span>
                </li>
                <li>
                    <a href="/projects">projects</a>
                    <span>/</span>
                </li>
                <li>
                    <a href="/skills">skills</a>
                    <span>/</span>
                </li>
                <li>
                    <a href="/contact">contact</a>
                </li>
            </ul>
        </nav>
        
      </header>
    );
}
export default Header;