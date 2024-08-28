import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <nav className="footer" aria-label="Footer Navigation" role="navigation">
            <ul className="footer__links">
                <span>&bull;</span>
                <li className="footer__item">
                    <a href="/public/media/files/gtcs.pdf" target="_blank" rel="noopener noreferrer">
                        {t('footer.gtcs')}
                    </a>
                </li>
                <span>&bull;</span>
                <li className="footer__item">
                    <a href="/public/media/files/cv.pdf" target="_blank" rel="noopener noreferrer">
                        {t('footer.cv')}
                    </a>
                </li>
                <span>&bull;</span>
                <li className="footer__item cp">
                    <Link to="/">
                        {t('footer.copyright', { year: currentYear })}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Footer;