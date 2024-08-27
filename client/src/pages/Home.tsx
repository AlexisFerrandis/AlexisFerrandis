import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import githubIco from "../assets/ico/github.svg";
import linkedinIco from "../assets/ico/linkedin.svg";
import dribbleIco from "../assets/ico/dribble.svg";
import codepenIco from "../assets/ico/codepen.svg";
import emailIco from "../assets/ico/envelope-solid.svg";

const Home: React.FC = () => {

    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setOffset({ x: x * 0.06, y: y * 0.06 });
    };

    const handleMouseLeave = () => {
        setOffset({ x: 0, y: 0 });
    };

    const baseVariants = (delay = 0) => ({
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
    });

    const socialLinks = [
        { href: "https://codepen.io/alexisferrandis", img: codepenIco, alt: "Codepen" },
        { href: "https://github.com/AlexisFerrandis/", img: githubIco, alt: "Github" },
        { href: "https://www.linkedin.com/in/alexis-ferrandis-5b5343106/", img: linkedinIco, alt: "Linkedin" },
        { href: "https://dribbble.com/alexisBabajko", img: dribbleIco, alt: "Dribble" },
        { href: "mailto:contact@alexisferrandis.com", img: emailIco, alt: "Email" }
    ];

    return (
        <motion.section className="home"
            initial="hidden"
            animate="visible"
        >
            <motion.div className='hero' variants={baseVariants(0.2)}>
                <h1>
                    Alexis
                    <br />
                    <span>Ferrandis</span>
                </h1>
                <motion.div
                    className="parallax-circle-container"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ transform: `translateY(${-80}px)` }}
                >
                    <div
                        className="circle"
                        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
                    >
                        <Link to="/portfolio">
                            <div
                                className="circle-text"
                                style={{ transform: `translate(${offset.x * 2}px, ${offset.y * 2}px)` }}
                            >
                                <span className="arrow">⟶<br /></span>
                                <span>Show<br /></span>
                                <span>Portfolio</span>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className='social' variants={baseVariants(0.6)}>
                <ul>
                    {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                <img src={link.img} alt={link.alt} />
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.section>
    );
};

export default Home;