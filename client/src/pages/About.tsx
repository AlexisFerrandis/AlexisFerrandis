import React from 'react';
import { motion } from 'framer-motion';

import typescriptIco from "../assets/ico/typescript-icon-svgrepo-com.svg";
import mongodbIco from "../assets/ico/mongodb-svgrepo-com.svg";
import gimpIco from "../assets/ico/gimp-svgrepo-com.svg";
import figmaIco from "../assets/ico/figma-svgrepo-com.svg";
import pythonIco from "../assets/ico/python-127-svgrepo-com.svg";
import phpIco from "../assets/ico/php-16-svgrepo-com.svg";
import nodejsIco from "../assets/ico/nodejs-svgrepo-com.svg";
import reactIco from "../assets/ico/react-svgrepo-com.svg";
import javascriptIco from "../assets/ico/js-brands-solid.svg";
import sassIco from "../assets/ico/sass-brands-solid.svg";
import css3Ico from "../assets/ico/css3-alt-brands-solid.svg";
import html5Ico from "../assets/ico/html5-brands-solid.svg";

const About: React.FC = () => {
    const technologies = [
        { name: 'HTML5', icon: html5Ico },
        { name: 'CSS3', icon: css3Ico },
        { name: 'SCSS', icon: sassIco },
        { name: 'Javascript', icon: javascriptIco },
        { name: 'TypeScript', icon: typescriptIco },
        { name: 'React', icon: reactIco },
        { name: 'NodeJs', icon: nodejsIco },
        { name: 'PHP', icon: phpIco },
        { name: 'Python', icon: pythonIco },
        { name: 'Figma', icon: figmaIco },
        { name: 'Gimp', icon: gimpIco },
        { name: 'MongoDb', icon: mongodbIco },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-container"
        >
            <h1>Alexis Ferrandis</h1>
            <div className="about-content">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h3>Web Integrator</h3>
                </motion.div>

                <div className="about-description">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        Over the past four years as a freelance developer, I've had the privilege of working remotely with agencies, consulting for companies, and collaborating with talented individuals to craft digital products for both business and consumer use.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        I take pride in creating pixel-perfect, engaging, and accessible digital experiences. Driven by empathy and naturally curious, I am always striving to hone my skills and deliver even better results.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 2 }}
                    >
                        When I'm not at the computer, you'll find me building things, diving into books, spending time with my wife and cat, or exploring video games to uncover their hidden secrets.
                    </motion.p>
                </div>

                <div className='about-skills'>
                    <motion.div
                        className="about-experience"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2.5 }}
                    >
                        <h4>Experience</h4>
                        <ul>
                            <motion.li
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 3 }}
                            >
                                Frontend & Backend Developer
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 3.2 }}
                            >
                                Digital Manager
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 3.4 }}
                            >
                                Community Manager
                            </motion.li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="about-technology"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 3.5 }}
                    >
                        <h4>Technology</h4>
                        <ul className="technology-list">
                            {technologies.map((tech, index) => (
                                <motion.li
                                    key={tech.name}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 4 + index * 0.2 }}
                                    className="technology-item"
                                >
                                    <img src={tech.icon} alt={`${tech.name} icon`} className="technology-icon" />
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;