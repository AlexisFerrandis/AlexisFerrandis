import React from 'react';
import Spline from '@splinetool/react-spline';

const BackgroundScene: React.FC = () => {
    const handleLoad = () => {
        console.log("Hello you 😊");
    };

    const handleError = () => {
        console.log("It didn't work 🥲");
    };

    return (
        <div className='background-scene'>
            <Spline
                scene="https://prod.spline.design/BvNzRDUf4ZrwEUOA/scene.splinecode"
                onLoad={handleLoad}
                onError={handleError}
            />
        </div>
    );
};

export default BackgroundScene;