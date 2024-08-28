import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <nav className="footer" aria-label="Footer Navigation" role="navigation">
            <ul className="footer__links">
                <li className="footer__item">
                    <a href="/public/media/files/gtcs.pdf" target="_blank" rel="noopener noreferrer">gtcs</a>
                </li>
                <span>&bull;</span>
                <li className="footer__item">
                    <a href="/public/media/files/cv.pdf" target="_blank" rel="noopener noreferrer">cv</a>
                </li>
                <span>&bull;</span>
                <li className="footer__item">
                    <Link to="/">© alexis ferrandis {currentYear}</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Footer;