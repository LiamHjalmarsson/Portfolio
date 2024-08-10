import React, { useEffect, useRef, useState } from 'react';
import { urlFor } from '../../../client';

const ROTATION_RANGE = 20;

const Image = ({ img }) => {
    let ref = useRef(null);
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
        if (!isLargeScreen || !ref.current) return;
        
        let { left, top, width, height } = ref.current.getBoundingClientRect();
        
        let centerX = width / 2;
        let centerY = height / 2;
    
        let mouseX = e.clientX - left;
        let mouseY = e.clientY - top;
    
        let rY = ((mouseX - centerX) / width) * ROTATION_RANGE;
        let rX = -((mouseY - centerY) / height) * ROTATION_RANGE;
    
        ref.current.style.transform = `perspective(600px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    };

    let handleMouseLeave = () => {
        if (ref.current && isLargeScreen) {
            ref.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
        } 
    };

    return (
        <div
            className="relative flex-grow w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            style={{
                perspective: '600px',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.2s'
            }}
        >
            <img
                className="w-full h-72 object-cover opacity-80 shadow lg:hover:scale-110 transition duration-300 lg:hover:opacity-100 rounded-md"
                src={urlFor(img).width(600).url()}
                alt={img.alt}
            />
        </div>
    );
};

export default Image;
