import React from 'react';
import { Link } from 'react-router-dom';

const Notfound: React.FC = () => {

    return (
        <div className={"not-found"}>
            <h1>404</h1>
            <h3><Link to="/">Return on <span>main page</span></Link></h3>
        </div>
    );
};

export default Notfound;