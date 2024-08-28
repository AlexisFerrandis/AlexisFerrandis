import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="not-found" role="alert">
            <h1>404 - Page Not Found</h1>
            <h3>
                <Link to="/" aria-label="Return to the main page">
                    Return to <span>main page</span>
                </Link>
            </h3>
        </div>
    );
};

export default NotFound;