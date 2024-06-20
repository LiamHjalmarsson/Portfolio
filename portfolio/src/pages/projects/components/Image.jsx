import React, { useRef } from 'react';
import { urlFor } from '../../../client';

const ROTATION_RANGE = 20;

const Image = ({ img }) => {
    const ref = useRef(null);

    let handleMouseMove = (e) => {
        if (!ref.current) return;
        
        let { left, top, width, height } = ref.current.getBoundingClientRect();
        
        let centerX = width / 2;
        let centerY = height / 2;
    
        let mouseX = e.clientX - left;
        let mouseY = e.clientY - top;
    
        let rY = ((mouseX - centerX) / width) * ROTATION_RANGE;
        let rX = -((mouseY - centerY) / height) * ROTATION_RANGE;
    
        ref.current.style.transform = `perspective(500px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    };

    let handleMouseLeave = () => {
        if (ref.current) {
            ref.current.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
        }
    };

    return (
        <div
            className="relative flex-grow w-full lg:max-w-[500px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            style={{
                perspective: '500px',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.2s'
            }}
        >
            <img
                className="w-full h-72 object-cover opacity-80 lg:hover:scale-125 transition duration-300 lg:hover:opacity-100"
                src={urlFor(img).width(600).url()}
                alt={img.alt}
            />
        </div>
    );
};

export default Image;
