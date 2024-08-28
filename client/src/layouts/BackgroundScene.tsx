import React from 'react';
import Spline from '@splinetool/react-spline';

const BackgroundScene: React.FC = () => {
    const handleLoad = () => {
        console.log("Background scene loaded.");
    };

    const handleError = () => {
        console.log("Background scene didn't load.");
    };

    const getSceneUrl = () => {
        const width = window.innerWidth;
        const userAgent = navigator.userAgent || navigator.vendor;

        if (/android/i.test(userAgent)) {
            return "https://prod.spline.design/0HGuqYIY1jX8jWHo/scene.splinecode";
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
            return "https://prod.spline.design/0HGuqYIY1jX8jWHo/scene.splinecode";
        } else if (width <= 768) {
            return "https://prod.spline.design/0HGuqYIY1jX8jWHo/scene.splinecode";
        } else {
            return "https://prod.spline.design/BvNzRDUf4ZrwEUOA/scene.splinecode";
        }
    };

    return (
        <div className="background-scene">
            <Spline
                scene={getSceneUrl()}
                onLoad={handleLoad}
                onError={handleError}
            />
        </div>
    );
};

export default BackgroundScene;