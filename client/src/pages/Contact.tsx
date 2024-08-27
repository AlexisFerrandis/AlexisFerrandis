import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import githubIco from "../assets/ico/github.svg";
import linkedinIco from "../assets/ico/linkedin.svg";
import dribbleIco from "../assets/ico/dribble.svg";
import codepenIco from "../assets/ico/codepen.svg";
import emailIco from "../assets/ico/envelope-solid.svg";
import ParticlesCanvas from '../layouts/ParticlesCanvas';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name as keyof typeof errors]) {
            setErrors({ ...errors, [name]: false });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors = {
            name: formData.name === '',
            email: formData.email === '',
            message: formData.message === ''
        };

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.email && !newErrors.message) {
            console.log('Form Data:', formData);
            // submit here
        }
    };

    const baseAnimation = (delay = 0, x = 0, y = 0, duration = 0.6) => ({
        initial: { opacity: 0, x, y },
        animate: { opacity: 1, x: 0, y: 0 },
        transition: { duration, ease: "easeOut", delay }
    });

    return (
        <div className='contact-wrapper'>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <ParticlesCanvas />
                </motion.div>
            </AnimatePresence>
            <motion.div
                className="contact-container"
                {...baseAnimation(0, 0, 20, 0.5)}
            >
                <motion.h1 {...baseAnimation(0, -50)}>
                    Contact
                </motion.h1>
                <motion.h2 {...baseAnimation(0.1, -50)}>
                    Let's keep in touch!
                </motion.h2>
                <motion.div
                    className="social-links"
                    {...baseAnimation(0.7, 0, 20)}
                >
                    {[
                        { href: "mailto:contact@alexisferrandis.com", img: emailIco, alt: "Email", delay: 0.8 },
                        { href: "https://github.com/AlexisFerrandis/", img: githubIco, alt: "Github", delay: 0.9 },
                        { href: "https://www.linkedin.com/in/alexis-ferrandis-5b5343106/", img: linkedinIco, alt: "Linkedin", delay: 1 },
                        { href: "https://dribbble.com/alexisBabajko", img: dribbleIco, alt: "Dribble", delay: 1.1 },
                        { href: "https://codepen.io/alexisferrandis", img: codepenIco, alt: "Codepen", delay: 1.2 }
                    ].map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            {...baseAnimation(link.delay, 0, 20, 0.2)}
                        >
                            <img src={link.img} alt={link.alt} />
                        </motion.a>
                    ))}
                </motion.div>
                <motion.form
                    onSubmit={handleSubmit}
                    className="contact-form"
                    {...baseAnimation(0.2, 50)}
                >
                    {[
                        { id: "name", label: "Name", type: "text", placeholder: "Name", error: errors.name, delay: 0.3 },
                        { id: "company", label: "Company", type: "text", placeholder: "Company (optional)", delay: 0.4 },
                        { id: "email", label: "Email", type: "email", placeholder: "Email", error: errors.email, delay: 0.5 },
                        { id: "message", label: "Message", placeholder: "Message", textarea: true, error: errors.message, delay: 0.6 }
                    ].map((field, index) => (
                        <motion.div
                            key={index}
                            className={`form-group ${field.error ? 'error' : ''}`}
                            {...baseAnimation(field.delay, 0, 10, 0.3)}
                        >
                            <label htmlFor={field.id}>{field.label}</label>
                            {field.textarea ? (
                                <textarea
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    value={formData[field.id as keyof typeof formData]}
                                    onChange={handleChange}
                                    required
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    value={formData[field.id as keyof typeof formData]}
                                    onChange={handleChange}
                                    required={field.id !== 'company'}
                                />
                            )}
                        </motion.div>
                    ))}
                    <motion.button
                        type="submit"
                        className="submit-btn"
                        {...baseAnimation(0.7, 0, 10, 0.4)}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send
                    </motion.button>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default Contact;