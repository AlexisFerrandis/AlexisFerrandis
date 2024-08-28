import React from 'react';
import Spline from '@splinetool/react-spline';

const BackgroundScene: React.FC = () => {
    const handleLoad = () => {
        console.log("Background scene loaded.");
    };

    const handleError = () => {
        console.log("Background scene didn't loaded.");
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