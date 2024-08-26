import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import signature from "../assets/signature.svg";

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <img src={signature} alt="Signature Logo" />
                </Link>
            </div>
            <ul className="navbar__links navigation">
                {/* <li className={`navbar__item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                </li> */}
                <li className={`navbar__item ${location.pathname === '/about' ? 'active' : ''}`}>
                    <Link to="/about">About</Link>
                </li>
                <li className={`navbar__item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className={`navbar__item ${location.pathname === '/contact' ? 'active' : ''}`}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;