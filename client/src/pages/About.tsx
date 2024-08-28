import React from 'react';
import { motion } from 'framer-motion';

import { technologies } from '../utils/AboutData';

const About: React.FC = () => {

    const baseAnimation = (delay = 0, x = 0, y = 0) => ({
        initial: { opacity: 0, x, y },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: x || 50, y: y || 50, transition: { duration: 0.8 } },
        transition: { duration: 0.8, delay }
    });

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
                    {...baseAnimation(0.1)}
                >
                    <h2>Web Integrator</h2>
                </motion.div>

                <motion.div
                    className="about-main"
                    {...baseAnimation(0.5)}
                >
                    <div className="about-description">
                        <motion.p {...baseAnimation(0.7, -50)}>
                            Over the past four years as a <span>freelance developer,</span> I've had the privilege of working remotely with agencies, consulting for companies, and collaborating with talented individuals to craft digital products for both business and consumer use. I take pride in creating <span>pixel-perfect,</span> <span>engaging,</span> and <span>accessible</span> digital experiences.
                        </motion.p>
                        <motion.p {...baseAnimation(0.9, -50)}>
                            Collaboration and open communication are at the <span>heart of my work</span>. I believe that understanding the unique needs of each client and team member is key to delivering solutions that truly resonate.
                        </motion.p>
                        <motion.p {...baseAnimation(1.1, -50)}>
                            When I'm not at the computer, you'll find me building things, diving into books, spending time with my wife and cat, or exploring video games to uncover their <span>hidden secrets</span>.
                        </motion.p>
                    </div>

                    <motion.div
                        className="about-experience"
                        {...baseAnimation(0.8, 0, 50)}
                    >
                        <h3>Experience</h3>
                        <ul aria-label="List of experiences">
                            {['Frontend & Backend Developer', 'Digital Manager', 'Community Manager'].map((role, index) => (
                                <motion.li key={index} {...baseAnimation(1 + index * 0.2, -50)}>
                                    {role}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="about-toolkit"
                    {...baseAnimation(1)}
                >
                    <motion.div
                        className="about-skills"
                        {...baseAnimation(1.2, 0, 50)}
                    >
                        <h3>Skills</h3>
                        <ul aria-label="List of skills">
                            {['Agile/Scrum', 'Project Management', 'Problem-Solving', 'French & English'].map((skill, index) => (
                                <motion.li key={index} {...baseAnimation(1.3 + index * 0.1, -50)}>
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        className="about-technologies"
                        {...baseAnimation(1)}
                    >
                        <h3>Technologies</h3>
                        <ul className="technologies-list" aria-label="List of technologies">
                            {technologies.map((tech, index) => (
                                <motion.li
                                    key={tech.name}
                                    {...baseAnimation(1 + index * 0.1, 0, -50)}
                                    className="technology-item"
                                    aria-label={tech.name}
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