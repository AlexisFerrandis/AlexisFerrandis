import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <nav className="footer" aria-label="Footer Navigation" role="navigation">
            <ul className="footer__links">
                <li className="footer__item">
                    <span>&bull;</span>
                    <a href="./media/files/gtcs.pdf" target="_blank" rel="noopener noreferrer">
                        {t('footer.gtcs')}
                    </a>
                </li>
                <li className="footer__item">
                    <span>&bull;</span>
                    <a href="./media/files/cv.pdf" target="_blank" rel="noopener noreferrer">
                        {t('footer.cv')}
                    </a>
                </li>
                <li className="footer__item cp">
                    <span>&bull;</span>
                    <Link to="/">
                        {t('footer.copyright', { year: currentYear })}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Footer;