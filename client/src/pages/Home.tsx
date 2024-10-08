import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import githubIco from "../assets/ico/github.svg";
import linkedinIco from "../assets/ico/linkedin.svg";
import dribbleIco from "../assets/ico/dribble.svg";
import codepenIco from "../assets/ico/codepen.svg";
import emailIco from "../assets/ico/envelope-solid.svg";

const Home: React.FC = () => {
    const { t } = useTranslation();

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
        { href: "https://github.com/AlexisFerrandis/", img: githubIco, alt: t('home.social.github') },
        { href: "https://www.linkedin.com/in/alexis-ferrandis-5b5343106/", img: linkedinIco, alt: t('home.social.linkedin') },
        { href: "https://dribbble.com/alexisBabajko", img: dribbleIco, alt: t('home.social.dribble') },
        { href: "https://codepen.io/alexisferrandis", img: codepenIco, alt: t('home.social.codepen') },
        { href: "mailto:alexisferrandis@protonmail.com", img: emailIco, alt: t('home.social.email') }
    ];

    return (
        <motion.section className="home"
            initial="hidden"
            animate="visible"
        >
            <motion.div className='hero' variants={baseVariants(0.2)}>
                <h1>
                    {t('home.name')}
                    <br />
                    <span>{t('home.surname')}</span>
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
                        <Link to="/portfolio" aria-label={t('home.showPortfolio')}>
                            <div
                                className="circle-text"
                                style={{ transform: `translate(${offset.x * 2}px, ${offset.y * 2}px)` }}
                            >
                                <span className="arrow">⟶<br /></span>
                                <span>{t('home.showPortfolio').split(' ')[0]}<br /></span>
                                <span>{t('home.showPortfolio').split(' ')[1]}</span>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className='social' variants={baseVariants(0.6)}>
                <ul>
                    {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.alt}>
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