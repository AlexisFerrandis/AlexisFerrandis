import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import signature from "../assets/signature.svg";

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="navbar" aria-label="Main Navigation" role="navigation">
            <div className="navbar__logo">
                <Link to="/" aria-label="Home">
                    <img src={signature} alt="Signature Logo" />
                </Link>
            </div>
            <ul className="navbar__links navigation">
                <li className={`navbar__item ${location.pathname === '/about' ? 'active' : ''}`}>
                    <Link to="/about" aria-current={location.pathname === '/about' ? 'page' : undefined}>About</Link>
                </li>
                <li className={`navbar__item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                    <Link to="/portfolio" aria-current={location.pathname === '/portfolio' ? 'page' : undefined}>Portfolio</Link>
                </li>
                <li className={`navbar__item ${location.pathname === '/contact' ? 'active' : ''}`}>
                    <Link to="/contact" aria-current={location.pathname === '/contact' ? 'page' : undefined}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;