import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { webProjects, iotProjects, techColors } from '../utils/PortfolioData';

const ProjectShowcase: React.FC<{ projects: typeof webProjects }> = ({ projects }) => {
    const projectVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index: number) => ({
            opacity: 1,
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
                    aria-label={`View project ${project.title}`}
                >
                    <motion.div className="project-card">
                        <img src={project.preview} alt={`${project.title} preview`} className="project-preview" />
                        <h3 className="project-title">{project.title}</h3>
                        <h5 className="project-type">{project.type}</h5>
                        <div className="project-technologies">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="technology-badge"
                                    style={{ color: techColors[tech as keyof typeof techColors] || '#ccc' }}
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
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, setOffset: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setOffset({ x: x * 0.15, y: y * 0.15 });
    };

    const handleMouseLeave = (setOffset: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>) => {
        setOffset({ x: 0, y: 0 });
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

    const renderTab = (tab: 'Web' | 'IoT', offset: { x: number, y: number }, onMouseMove: React.MouseEventHandler<HTMLDivElement>, onMouseLeave: React.MouseEventHandler<HTMLDivElement>) => (
        <motion.div
            className="parallax-circle-container"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={() => handleTabClick(tab)}
            style={{ transform: `translateY(${-80}px)` }}
            role="tab"
            aria-selected={selectedTab === tab}
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleTabClick(tab)}
        >
            <div
                className="circle"
                style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
            >
                <div
                    className="circle-text"
                    style={{ transform: `translate(${offset.x * 2}px, ${offset.y * 2}px)` }}
                >
                    <span className="arrow">{tab}</span>
                </div>
            </div>
        </motion.div>
    );

    const handleTabClick = (tab: 'Web' | 'IoT') => {
        setSelectedTab(tab);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="portfolio-container"
            role="tabpanel"
            aria-labelledby={selectedTab === 'Web' ? 'web-tab' : 'iot-tab'}
        >
            <h1>Portfolio</h1>
            <div className="tabs" role="tablist" aria-label="Portfolio Categories">
                {renderTab('Web', offset, (e) => handleMouseMove(e, setOffset), () => handleMouseLeave(setOffset))}
                {renderTab('IoT', offset, (e) => handleMouseMove(e, setOffset), () => handleMouseLeave(setOffset))}
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
                        id="web-tab"
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
                        id="iot-tab"
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