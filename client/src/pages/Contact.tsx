import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import githubIco from "../assets/ico/github.svg";
import linkedinIco from "../assets/ico/linkedin.svg";
import dribbleIco from "../assets/ico/dribble.svg";
import codepenIco from "../assets/ico/codepen.svg";
import emailIco from "../assets/ico/envelope-solid.svg";
import ParticlesCanvas from '../layouts/ParticlesCanvas';

const Notification: React.FC<{ message: string, type: 'success' | 'error', onClose: () => void }> = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`notification ${type}`}
            role="alert"
            aria-live="assertive"
        >
            {message.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </motion.div>
    );
};

const Contact: React.FC = () => {
    const { t } = useTranslation();

    const apiUrl = import.meta.env.VITE_API_URL;
    const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

    const handleCloseNotification = () => {
        setNotification(null);
    };

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors = {
            name: formData.name === '',
            email: formData.email === '',
            message: formData.message === ''
        };

        setErrors(newErrors);

        if (newErrors.name || newErrors.email || newErrors.message) {
            const errorFields = document.querySelectorAll('.form-group.error');
            errorFields.forEach((field) => {
                const htmlField = field as HTMLElement;
                htmlField.classList.remove('error');
                void htmlField.offsetWidth;
                htmlField.classList.add('error');
            });
        }

        if (!newErrors.name && !newErrors.email && !newErrors.message) {
            try {
                const formDataEncoded = new URLSearchParams();
                formDataEncoded.append("name", formData.name);
                formDataEncoded.append("company", formData.company);
                formDataEncoded.append("email", formData.email);
                formDataEncoded.append("message", formData.message);

                const response = await fetch(`${apiUrl}/send_mail.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formDataEncoded.toString()
                });

                const result = await response.json();
                if (result.status === "success") {
                    setNotification({
                        message: t('contact.notifications.success'),
                        type: 'success'
                    });
                    setFormData({ name: '', company: '', email: '', message: '' });
                } else {
                    setNotification({
                        message: t('contact.notifications.error'),
                        type: 'error'
                    });
                }
            } catch (error) {
                console.error('Erreur lors de l\'envoi du formulaire:', error);
                setNotification({
                    message: t('contact.notifications.error'),
                    type: 'error'
                });
            }
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
                {notification && (
                    <Notification
                        message={notification.message}
                        type={notification.type}
                        onClose={handleCloseNotification}
                    />
                )}
            </AnimatePresence>
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
                    {t('contact.title')}
                </motion.h1>
                <motion.h2 {...baseAnimation(0.1, -50)}>
                    {t('contact.subtitle')}
                </motion.h2>
                <motion.div
                    className="social-links"
                    {...baseAnimation(0.7, 0, 20)}
                >
                    {[
                        { href: "mailto:alexisferrandis@protonmail.com", img: emailIco, alt: t('contact.socialLinks.email'), delay: 0.8 },
                        { href: "https://github.com/AlexisFerrandis/", img: githubIco, alt: t('contact.socialLinks.github'), delay: 0.9 },
                        { href: "https://www.linkedin.com/in/alexis-ferrandis-5b5343106/", img: linkedinIco, alt: t('contact.socialLinks.linkedin'), delay: 1 },
                        { href: "https://dribbble.com/alexisBabajko", img: dribbleIco, alt: t('contact.socialLinks.dribble'), delay: 1.1 },
                        { href: "https://codepen.io/alexisferrandis", img: codepenIco, alt: t('contact.socialLinks.codepen'), delay: 1.2 }
                    ].map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            {...baseAnimation(link.delay, 0, 20, 0.2)}
                            aria-label={`Visit ${link.alt}`}
                        >
                            <img src={link.img} alt={link.alt} />
                        </motion.a>
                    ))}
                </motion.div>
                <motion.form
                    onSubmit={handleSubmit}
                    className="contact-form"
                    {...baseAnimation(0.2, 50)}
                    aria-describedby="form-error"
                >
                    {[
                        { id: "name", label: t('contact.form.name'), type: "text", placeholder: t('contact.form.namePlaceholder'), error: errors.name, delay: 0.3 },
                        { id: "company", label: t('contact.form.company'), type: "text", placeholder: t('contact.form.companyPlaceholder'), delay: 0.4 },
                        { id: "email", label: t('contact.form.email'), type: "email", placeholder: t('contact.form.emailPlaceholder'), error: errors.email, delay: 0.5 },
                        { id: "message", label: t('contact.form.message'), placeholder: t('contact.form.messagePlaceholder'), textarea: true, error: errors.message, delay: 0.6 }
                    ].map((field, index) => (
                        <motion.div
                            key={index}
                            className={`form-group ${field.error ? 'error' : ''}`}
                            {...baseAnimation(field.delay, 0, 10, 0.3)}
                            aria-live="polite"
                        >
                            <label htmlFor={field.id}>{field.label}</label>
                            {field.textarea ? (
                                <textarea
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    value={formData[field.id as keyof typeof formData]}
                                    onChange={handleChange}
                                    aria-invalid={field.error}
                                    aria-describedby={field.error ? `${field.id}-error` : undefined}
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
                                    aria-invalid={field.error}
                                    aria-describedby={field.error ? `${field.id}-error` : undefined}
                                    required={field.id !== 'company'}
                                />
                            )}
                            {field.error && (
                                <span id={`${field.id}-error`} className="error-message">
                                    {t(`contact.form.errors.${field.id}`)}
                                </span>
                            )}
                        </motion.div>
                    ))}
                    <motion.button
                        type="submit"
                        className="submit-btn"
                        {...baseAnimation(0.7, 0, 10, 0.4)}
                        whileTap={{ scale: 0.98 }}
                    >
                        {t('contact.form.submitButton')}
                    </motion.button>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default Contact;