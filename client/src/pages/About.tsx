import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

import { technologies } from '../utils/AboutData';

const About: React.FC = () => {
    const { t } = useTranslation();

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
            <h1>{t('about.title')}</h1>
            <div className="about-content">
                <motion.div
                    className="about-header"
                    {...baseAnimation(0.1)}
                >
                    <h2>{t('about.header')}</h2>
                </motion.div>

                <motion.div
                    className="about-main"
                    {...baseAnimation(0.5)}
                >
                    <div className="about-description">
                        <motion.p {...baseAnimation(0.7, -50)}>
                            <Trans
                                i18nKey="about.description.part1"
                                components={[<span key="1" />, <span key="2" />, <span key="3" />, <span key="4" />, <span key="5" />]}
                            />
                        </motion.p>
                        <motion.p {...baseAnimation(0.9, -50)}>
                            <Trans
                                i18nKey="about.description.part2"
                                components={[<span key="1" />, <span key="2" />]}
                            />
                        </motion.p>
                        <motion.p {...baseAnimation(1.1, -50)}>
                            <Trans
                                i18nKey="about.description.part3"
                                components={[<span key="1" />, <span key="2" />]}
                            />
                        </motion.p>
                    </div>

                    <motion.div
                        className="about-experience"
                        {...baseAnimation(0.8, 0, 50)}
                    >
                        <h3>{t('about.experience.title')}</h3>
                        <ul aria-label="List of experiences">
                            {(t('about.experience.list', { returnObjects: true }) as string[]).map((role, index) => (
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
                        <h3>{t('about.skills.title')}</h3>
                        <ul aria-label="List of skills">
                            {(t('about.skills.list', { returnObjects: true }) as string[]).map((skill, index) => (
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
                        <h3>{t('about.technologies.title')}</h3>
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