import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import signature from "../assets/signature.svg";

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="navbar" aria-label="Main Navigation" role="navigation">
            <div className="navbar__logo">
                <Link to="/" aria-label="Home" onClick={closeMenu}>
                    <img src={signature} alt="Signature Logo" />
                </Link>
            </div>
            <div className={`navbar__menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="navbar__menu-toggle-bar"></span>
                <span className="navbar__menu-toggle-bar"></span>
                <span className="navbar__menu-toggle-bar"></span>
            </div>
            <AnimatePresence>
                {(isMobile && isMenuOpen) ? (
                    <motion.ul
                        className={`navbar__links navigation open`}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={{
                            open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            closed: { opacity: 0, y: "-100%", transition: { duration: 0.5 } },
                        }}
                    >
                        {['/about', '/portfolio', '/contact'].map((path, index) => (
                            <motion.li
                                key={path}
                                className={`navbar__item ${location.pathname === path ? 'active' : ''}`}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.5 } },
                                }}
                            >
                                <Link
                                    to={path}
                                    aria-current={location.pathname === path ? 'page' : undefined}
                                    onClick={closeMenu}
                                >
                                    {path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                ) : (
                    <ul className="navbar__links navigation">
                        {['/about', '/portfolio', '/contact'].map((path) => (
                            <li key={path} className={`navbar__item ${location.pathname === path ? 'active' : ''}`}>
                                <Link to={path} aria-current={location.pathname === path ? 'page' : undefined}>
                                    {path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;