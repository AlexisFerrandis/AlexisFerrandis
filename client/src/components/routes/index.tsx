import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import BackgroundScene from '../../layouts/BackgroundScene';
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Portfolio from "../../pages/Portfolio";
import Contact from "../../pages/Contact";

const RoutesIndex = () => {
    const location = useLocation();

    const pageVariants = {
        initial: {
            opacity: 0,
            x: "100vw",
            scale: 0.9
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 120,
                damping: 20,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        },
        out: {
            opacity: 0,
            x: "-100vw",
            scale: 0.95,
            transition: {
                duration: 0.8,
                type: "tween",
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        },
        back: {
            x: ["0vw", "10vw", "-100vw"],
            scale: [1, 0.95, 0.95],
            opacity: [1, 1, 0],
            transition: {
                duration: 0.8,
                times: [0, 0.2, 1],
                ease: "easeInOut"
            }
        }
    };

    return (
        <main className="main-app">
            <BackgroundScene />
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="back"
                                variants={pageVariants}
                                className='content'
                            >
                                <Home />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="back"
                                variants={pageVariants}
                                className='content'
                            >
                                <About />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/portfolio"
                        element={
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="back"
                                variants={pageVariants}
                                className='content'
                            >
                                <Portfolio />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="back"
                                variants={pageVariants}
                                className='content'
                            >
                                <Contact />
                            </motion.div>
                        }
                    />
                </Routes>
            </AnimatePresence>
            <Footer />
        </main>
    );
};

export default RoutesIndex;