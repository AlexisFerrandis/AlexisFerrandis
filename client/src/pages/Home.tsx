import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import githubIco from "../assets/ico/github.svg";
import linkedinIco from "../assets/ico/linkedin.svg";
import dribbleIco from "../assets/ico/dribble.svg";

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

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
    };

    const socialVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
    };

    return (
        <motion.section className="home"
            initial="hidden"
            animate="visible"
        >
            <motion.div className='hero' variants={textVariants}>
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
            <motion.div className='social' variants={socialVariants}>
                <ul>
                    <li>
                        <a href="https://github.com/AlexisFerrandis/" target="_blank" rel="noopener noreferrer">
                            <img src={githubIco} alt="Github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/alexis-ferrandis-5b5343106/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIco} alt="Linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/alexisBabajko" target="_blank" rel="noopener noreferrer">
                            <img src={dribbleIco} alt="Dribble" />
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/alexisBabajko" target="_blank" rel="noopener noreferrer">
                            Mail ?
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/alexisBabajko" target="_blank" rel="noopener noreferrer">
                            Code Pen ?
                        </a>
                    </li>
                </ul>
            </motion.div>
        </motion.section>
    );
};

export default Home;