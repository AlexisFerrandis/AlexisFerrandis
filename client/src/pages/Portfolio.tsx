import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import facedookPreview from "../assets/preview/facedook.png"
import konsolPreview from "../assets/preview/konsol.png"
import portfolio1Preview from "../assets/preview/portfoliov1.png"
import portfolio2Preview from "../assets/preview/portfoliov2.png"
import elodiePreview from "../assets/preview/elodiepascal.png"
import srgamePreview from "../assets/preview/srgame.png"
import winelabelPreview from "../assets/preview/wineLabel.png"
import syrahgencePreview from "../assets/preview/syrahgence.png"
import lrdbPreview from "../assets/preview/lrdb.png"
import benjaminPreview from "../assets/preview/benjamin.png"
import navicellePreview from "../assets/preview/navicelle.png"
import litiniPreview from "../assets/preview/litini.png"
import ffwPreview from "../assets/preview/ffw.png"
import pokemonJs from "../assets/preview/pokemonJs.png"

import projectPreview from "../assets/preview/konsol.png"

const webProjects = [
    {
        title: 'Fight For Words',
        type: 'Application',
        preview: ffwPreview,
        technologies: ['React', 'Node.js', 'MongoDB', 'Figma'],
        link: 'https://www.fightforwords.com/'
    },
    {
        title: 'Benjamin Laigret',
        type: 'Portfolio',
        preview: benjaminPreview,
        technologies: ['React', 'SCSS', 'Gimp'],
        link: 'https://www.benjaminlaigret.fr/'
    },
    {
        title: 'La Navicelle',
        type: 'E-commerce & Website',
        preview: navicellePreview,
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        link: 'https://domainelanavicelle.com/'
    },
    {
        title: 'Pokemon JS',
        type: 'Video Game',
        preview: pokemonJs,
        technologies: ['React', 'SCSS', 'Gimp', 'Tiled'],
        link: 'https://www.pokemonjs.alexisferrandis.com/'
    },
    {
        title: 'Le Repaire de Bacchus',
        type: 'Website',
        preview: lrdbPreview,
        technologies: ['React', 'Node.js', 'MongoDB', 'SCSS'],
        link: 'https://www.lerepairedebacchus.com/'
    },
    {
        title: 'Litini',
        type: 'Website & Application',
        preview: litiniPreview,
        technologies: ['React', 'React Native', 'Beacon', 'BLE'],
        link: 'https://www.litini.alexisferrandis.com/'
    },
    {
        title: 'SRGame',
        type: 'Video Game',
        preview: srgamePreview,
        technologies: ['HTML5', 'Vanilla JS', 'Gimp'],
        link: 'https://srgame.alexisferrandis.com/'
    },
    {
        title: 'Syrahgence',
        type: 'Website',
        preview: syrahgencePreview,
        technologies: ['React', 'SCSS', 'Figma'],
        link: 'https://syrahgence.fr/'
    },
    {
        title: 'Elodie Pascal',
        type: 'Website',
        preview: elodiePreview,
        technologies: ['React', 'SCSS', 'Figma'],
        link: 'https://elodiepascal.com/'
    },
    {
        title: 'Facedook',
        type: 'Application',
        preview: facedookPreview,
        technologies: ['React', 'Node.js', 'MongoDB', 'SCSS'],
        link: 'https://github.com/AlexisFerrandis/Facedook'
    },
    {
        title: 'Wine-Label',
        type: 'Application',
        preview: winelabelPreview,
        technologies: ['TypeScript', 'QR Code', 'SCSS'],
        link: 'https://wine-label.fr/'
    },
    {
        title: 'Konsol',
        type: 'Website',
        preview: konsolPreview,
        technologies: ['HTML5', 'Vanilla JS', 'Gimp'],
        link: 'https://konsol.alexisferrandis.com/'
    },
    {
        title: 'Portfolio v2',
        type: 'Portfolio',
        preview: portfolio2Preview,
        technologies: ['React', 'SCSS', 'Figma'],
        link: 'https://v2.alexisferrandis.com/'
    },
    {
        title: 'Portfolio v1',
        type: 'Portfolio',
        preview: portfolio1Preview,
        technologies: ['React', 'SCSS'],
        link: 'https://v1.alexisferrandis.com/'
    },
];

const iotProjects = [
    {
        title: 'IoT Project 1',
        type: 'Portfolio',
        preview: projectPreview,
        technologies: ['Arduino', 'C++', 'MQTT'],
        link: 'https://example.com/web-project-1'
    },
    {
        title: 'IoT Project 2',
        type: 'Portfolio',
        preview: projectPreview,
        technologies: ['Raspberry Pi', 'Python', 'Node.js'],
        link: 'https://example.com/web-project-1'
    },
];

const techColors: { [key: string]: string } = {
    'HTML5': 'hsl(145, 45%, 55%)',
    'Vanilla JS': 'hsl(210, 75%, 60%)',
    'React': 'hsl(204, 100%, 50%)',
    'Node.js': 'hsl(45, 75%, 60%)',
    'MongoDB': 'hsl(145, 45%, 55%)',
    'Next.js': 'hsl(272, 100%, 80%)',
    'TypeScript': 'hsl(272, 100%, 80%)',
    'SCSS': 'hsl(0, 75%, 60%)',
    'Figma': 'hsl(272, 100%, 80%)',
    'Gimp': 'hsl(272, 76%, 57%)',
    'QR Code': 'hsl(45, 100%, 60%)',
    'React Native': 'hsl(35, 70%, 58%)',
    'Beacon': 'hsl(272, 76%, 57%)',
    'BLE': 'hsl(0, 75%, 60%)',
    'Tiled': 'hsl(145, 45%, 55%)',


    'Arduino': 'hsl(204, 100%, 50%)',
    'C++': 'hsl(210, 75%, 60%)',
    'MQTT': 'hsl(45, 100%, 60%)',
    'Raspberry Pi': 'hsl(120, 75%, 60%)',
    'Python': 'hsl(45, 75%, 60%)',
};

const ProjectShowcase: React.FC<{ projects: typeof webProjects }> = ({ projects }) => {
    const projectVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index: number) => ({
            opacity: 1,
            // scale: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 },
        }),
    };

    return (
        <motion.div className="project-showcase-container">
            {projects.map((project, index) => (
                <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="project-card-link"
                    variants={projectVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                // whileHover={{ scale: 1.05 }}
                >
                    <motion.div className="project-card">
                        <img src={project.preview} alt={`${project.title} preview`} className="project-preview" />
                        <h3 className="project-title">{project.title}</h3>
                        <h5 className='project-type'>{project.type}</h5>
                        <div className="project-technologies">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="technology-badge"
                                    style={{ color: techColors[tech] || '#ccc' }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.a>
            ))}
        </motion.div>
    );
};

const Portfolio: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<'Web' | 'IoT'>('Web');
    const [offsetWeb, setOffsetWeb] = useState({ x: 0, y: 0 });
    const [offsetIoT, setOffsetIoT] = useState({ x: 0, y: 0 });

    const handleTabClick = (tab: 'Web' | 'IoT') => {
        setSelectedTab(tab);
    };

    const handleMouseMoveWeb = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setOffsetWeb({ x: x * 0.15, y: y * 0.15 });
    };

    const handleMouseLeaveWeb = () => {
        setOffsetWeb({ x: 0, y: 0 });
    };

    const handleMouseMoveIoT = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setOffsetIoT({ x: x * 0.15, y: y * 0.15 });
    };

    const handleMouseLeaveIoT = () => {
        setOffsetIoT({ x: 0, y: 0 });
    };

    const tabContentVariants = {
        hidden: (direction: number) => ({
            opacity: 0,
            x: direction > 0 ? 50 : -50,
        }),
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2 },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="portfolio-container"
        >
            <h1>PORTFOLIO</h1>
            <div className="tabs">
                <motion.div
                    className="parallax-circle-container"
                    onMouseMove={handleMouseMoveWeb}
                    onMouseLeave={handleMouseLeaveWeb}
                    onClick={() => handleTabClick('Web')}
                    style={{ transform: `translateY(${-80}px)` }}
                >
                    <div
                        className="circle"
                        style={{ transform: `translate(${offsetWeb.x}px, ${offsetWeb.y}px)` }}
                    >
                        <div
                            className="circle-text"
                            style={{ transform: `translate(${offsetWeb.x * 2}px, ${offsetWeb.y * 2}px)` }}
                        >
                            <span className="arrow">Web</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="parallax-circle-container"
                    onMouseMove={handleMouseMoveIoT}
                    onMouseLeave={handleMouseLeaveIoT}
                    onClick={() => handleTabClick('IoT')}
                    style={{ transform: `translateY(${-80}px)` }}
                >
                    <div
                        className="circle"
                        style={{ transform: `translate(${offsetIoT.x}px, ${offsetIoT.y}px)` }}
                    >
                        <div
                            className="circle-text"
                            style={{ transform: `translate(${offsetIoT.x * 2}px, ${offsetIoT.y * 2}px)` }}
                        >
                            <span className="arrow">IoT</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <AnimatePresence mode="wait">
                {selectedTab === 'Web' ? (
                    <motion.div
                        key="Web"
                        custom={-1}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabContentVariants}
                    >
                        <h2>Web Projects</h2>
                        <ProjectShowcase projects={webProjects} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="IoT"
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabContentVariants}
                    >
                        <h2>IoT Projects</h2>
                        <ProjectShowcase projects={iotProjects} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Portfolio;