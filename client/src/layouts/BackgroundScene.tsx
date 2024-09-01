import React, { Suspense } from 'react';

import backgroundPreview from '../assets/preview/portfolio.png';

const LazySpline = React.lazy(() => import('@splinetool/react-spline'));

const BackgroundScene: React.FC = () => {
    const handleLoad = () => {
        console.log('Background scene loaded.');
    };

    const handleError = () => {
        console.log("Background scene didn't load.");
    };

    const renderContent = () => {
        const width = window.innerWidth;
        const userAgent = navigator.userAgent || navigator.vendor;

        if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) || width <= 768) {
            return <img src={backgroundPreview} className='mobile-background' alt="Mobile Background" />;
        } else {
            return (
                <Suspense fallback={<div>Loading scene...</div>}>
                    <LazySpline
                        scene="https://prod.spline.design/BvNzRDUf4ZrwEUOA/scene.splinecode"
                        onLoad={handleLoad}
                        onError={handleError}
                    />
                </Suspense>
            );
        }
    };

    return <div className="background-scene">{renderContent()}</div>;
};

export default BackgroundScene;