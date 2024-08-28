import React, { useEffect, useRef, useState } from 'react';

const MouseFollower: React.FC = () => {
    const followerRef = useRef<HTMLDivElement>(null);
    const [hoverEffect, setHoverEffect] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    const mousePosition = useRef({ x: 0, y: 0 });
    const followerPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const checkIfMobile = () => {
            const mobileDevice = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
            setIsMobile(mobileDevice);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        if (isMobile) {
            return;
        }

        const moveFollower = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };

        const animateFollower = () => {
            if (followerRef.current) {
                const { x: mouseX, y: mouseY } = mousePosition.current;
                const { x: followerX, y: followerY } = followerPosition.current;

                const dx = mouseX - followerX;
                const dy = mouseY - followerY;

                followerPosition.current.x += dx * 0.1;
                followerPosition.current.y += dy * 0.1;

                followerRef.current.style.top = `${followerPosition.current.y}px`;
                followerRef.current.style.left = `${followerPosition.current.x}px`;
            }
            requestAnimationFrame(animateFollower);
        };

        const applyHoverEffect = (el: HTMLElement, effect: string) => {
            el.addEventListener('mouseenter', () => setHoverEffect(effect));
            el.addEventListener('mouseleave', () => setHoverEffect(''));
        };

        const addHoverEffects = () => {
            document.querySelectorAll('a, .project-card-link').forEach(el => {
                applyHoverEffect(el as HTMLElement, 'hover-link');
            });

            document.querySelectorAll('img, .technology-icon').forEach(el => {
                applyHoverEffect(el as HTMLElement, 'hover-image');
            });

        };

        addHoverEffects();
        window.addEventListener('mousemove', moveFollower);
        requestAnimationFrame(animateFollower);

        const observer = new MutationObserver(() => {
            addHoverEffects();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveFollower);
            observer.disconnect();
        };
    }, [isMobile]);

    return <div className={`mouse-follower ${hoverEffect}`} ref={followerRef} />;
};

export default MouseFollower;