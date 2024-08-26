import React, { useEffect } from 'react';
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
import linuxIco from "../assets/ico/linux-ubuntu-148-svgrepo-com.svg";
import nextIco from "../assets/ico/nextjs-fill-svgrepo-com.svg";
import reduxIco from "../assets/ico/redux-svgrepo-com.svg";

const About: React.FC = () => {
    const technologies = [
        { name: 'HTML5', icon: html5Ico },
        { name: 'CSS3', icon: css3Ico },
        { name: 'SCSS', icon: sassIco },
        { name: 'Javascript', icon: javascriptIco },
        { name: 'TypeScript', icon: typescriptIco },
        { name: 'React', icon: reactIco },
        { name: 'Redux', icon: reduxIco },
        { name: 'NextJs', icon: nextIco },
        { name: 'NodeJs', icon: nodejsIco },
        { name: 'PHP', icon: phpIco },
        { name: 'Python', icon: pythonIco },
        { name: 'Figma', icon: figmaIco },
        { name: 'Gimp', icon: gimpIco },
        { name: 'MongoDb', icon: mongodbIco },
        { name: 'Linux', icon: linuxIco },
    ];

    useEffect(() => {
        const icons = document.querySelectorAll<HTMLImageElement>('.technology-icon');
        const filters = [
            'brightness(0) saturate(100%) invert(33%) sepia(55%) saturate(6404%) hue-rotate(260deg) brightness(94%) contrast(90%) drop-shadow(0px 4px 15px rgba(237,130,130,0.4))',
            'brightness(0) saturate(100%) invert(67%) sepia(53%) saturate(1595%) hue-rotate(309deg) brightness(104%) contrast(86%) drop-shadow(0px 4px 15px rgba(130,237,200,0.4))',
            'brightness(0) saturate(100%) invert(66%) sepia(61%) saturate(1750%) hue-rotate(212deg) brightness(103%) contrast(101%) drop-shadow(0px 4px 15px rgba(130,160,237,0.4))',
            'brightness(0) saturate(100%) invert(70%) sepia(44%) saturate(448%) hue-rotate(92deg) brightness(88%) contrast(89%) drop-shadow(0px 4px 15px rgba(237,200,130,0.4))',
            'brightness(0) saturate(100%) invert(34%) sepia(22%) saturate(5684%) hue-rotate(337deg) brightness(104%) contrast(80%) drop-shadow(0px 4px 15px rgba(130,130,237,0.4))'
        ];

        icons.forEach((icon) => {
            icon.addEventListener('mouseover', () => {
                const randomFilter = filters[Math.floor(Math.random() * filters.length)];
                icon.style.filter = randomFilter;
            });

            icon.addEventListener('mouseout', () => {
                icon.style.filter = 'brightness(0) saturate(100%) invert(98%) sepia(0%) saturate(0%) hue-rotate(170deg) brightness(86%) contrast(93%)';
            });
        });

        return () => {
            icons.forEach((icon) => {
                icon.removeEventListener('mouseover', () => { });
                icon.removeEventListener('mouseout', () => { });
            });
        };
    }, []);

    const reverseAnimations = {
        opacity: 0,
        y: 50,
        x: 50,
        transition: { duration: 0.3 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reverseAnimations}
            transition={{ duration: 0.8 }}
            className="about-container"
        >
            <h1>Alexis Ferrandis</h1>
            <div className="about-content">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reverseAnimations}
                    transition={{ duration: 1, delay: 0.1 }}
                >
                    <h2>Web Integrator</h2>
                </motion.div>

                <motion.div
                    className="about-main"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reverseAnimations}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="about-description">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50, transition: { duration: 0.8 } }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Over the past four years as a <span>freelance developer,</span> I've had the privilege of working remotely with agencies, consulting for companies, and collaborating with talented individuals to craft digital products for both business and consumer use. I take pride in creating <span>pixel-perfect,</span> <span>engaging,</span> and <span>accessible</span> digital experiences.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50, transition: { duration: 0.8 } }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Collaboration and open communication are at the <span>heart of my work</span>. I believe that understanding the unique needs of each client and team member is key to delivering solutions that truly resonate.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50, transition: { duration: 0.8 } }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            When I'm not at the computer, you'll find me building things, diving into books, spending time with my wife and cat, or exploring video games to uncover their hidden secrets.
                        </motion.p>
                    </div>

                    <motion.div
                        className="about-experience"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reverseAnimations}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <h3>Experience</h3>
                        <ul>
                            <motion.li
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50, transition: { duration: 0.8 } }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                Frontend & Backend Developer
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50, transition: { duration: 0.8 } }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                Digital Manager
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50, transition: { duration: 0.8 } }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                            >
                                Community Manager
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="about-toolkit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reverseAnimations}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <motion.div
                        className="about-skills"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reverseAnimations}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <h3>Skills</h3>
                        <ul>
                            <motion.li
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50, transition: { duration: 0.8 } }}
                                transition={{ duration: 0.8, delay: 1.3 }}
                            >
                                Agile/Scrum
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50, transition: { duration: 0.8 } }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                            >
                                Project Management
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50, transition: { duration: 0.8 } }}
                                transition={{ duration: 0.8, delay: 1.5 }}
                            >
                                Problem-Solving
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50, transition: { duration: 0.8 } }}
                                transition={{ duration: 0.8, delay: 1.6 }}
                            >
                                French & English
                            </motion.li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="about-technologies"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reverseAnimations}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <h3>Technologies</h3>
                        <ul className="technologies-list">
                            {technologies.map((tech, index) => (
                                <motion.li
                                    key={tech.name}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50, transition: { duration: 0.8 } }}
                                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                                    className="technology-item"
                                >
                                    <img src={tech.icon} alt={`${tech.name} icon`} className="technology-icon" />
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;