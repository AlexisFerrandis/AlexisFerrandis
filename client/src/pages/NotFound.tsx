import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="not-found" role="alert">
            <h1>{t('notFound.title')}</h1>
            <h3>
                <Link to="/" aria-label={t('notFound.linkLabel')}>
                    <span>{t('notFound.linkText')}</span>
                </Link>
            </h3>
        </div>
    );
};

export default NotFound;