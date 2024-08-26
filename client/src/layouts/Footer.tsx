import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <nav className={"footer"}>
            <ul className="footer__links">
                <li className={`footer__item ${location.pathname === '/about' ? 'active' : ''}`}>
                    <Link to="/about">gtcs</Link>
                </li>
                <span>&bull;</span>
                <li className={`footer__item ${location.pathname === '/about' ? 'active' : ''}`}>
                    <Link to="/about">cv</Link>
                </li>
                <span>&bull;</span>
                <li className={`footer__item ${location.pathname === '/about' ? 'active' : ''}`}>
                    <Link to="/about">© alexis ferrandis {currentYear}</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Footer;