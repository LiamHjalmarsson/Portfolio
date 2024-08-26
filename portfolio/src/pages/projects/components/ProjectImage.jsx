import React, { useEffect, useRef, useState } from 'react';
import { urlFor } from '../../../client';

const ROTATION_LIMIT = 20;

const ProjectImage = ({ img }) => {
    let imageRef = useRef(null);
    let [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        let checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    let handleMouseMove = (e) => {
        if (!isLargeScreen || !imageRef.current) return;

        let { left, top, width, height } = imageRef.current.getBoundingClientRect();

        let mouseX = e.clientX - left;
        let mouseY = e.clientY - top;

        let rotateY = ((mouseX - width / 2) / width) * ROTATION_LIMIT;
        let rotateX = -((mouseY - height / 2) / height) * ROTATION_LIMIT;

        imageRef.current.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    let handleMouseLeave = () => {
        if (imageRef.current && isLargeScreen) {
            imageRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }
    };

    return (
        <div
            className="relative flex-grow w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={imageRef}
            style={{
                perspective: '600px',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.2s'
            }}
        >
            <img
                className="w-full h-72 object-cover opacity-80 shadow duration-300 lg:hover:scale-105 transition-all lg:hover:opacity-100"
                src={urlFor(img).width(600).url()}
                alt={img.alt}
            />
        </div>
    );
};

export default ProjectImage;
