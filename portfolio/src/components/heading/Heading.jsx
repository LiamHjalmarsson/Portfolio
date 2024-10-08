import React, { useContext } from 'react';
import { MouseContext } from '../../context/mouseContext';

const SectionHeading = ({ title, subtitle, backgroundTitle }) => {
    let { setCursorType } = useContext(MouseContext);

    return (
        <div className='relative flex flex-col justify-center items-center uppercase px-6'>
            <h2 
                className='text-center text-lg sm:text-xl md:text-2xl lg:text-4xl z-10 text-red_primary font-semibold' 
                onMouseEnter={() => setCursorType("text")} 
                onMouseLeave={() => setCursorType("")}
            >
                {subtitle}
            </h2>
            <h1 
                className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest text-center z-10 mt-4' 
                onMouseEnter={() => setCursorType("text")} 
                onMouseLeave={() => setCursorType("")}
            >
                {title}
            </h1>
            <p 
                className='absolute -top-4 sm:-top-10 md:-top-12 lg:-top-14 text-4xl sm:text-6xl md:text-7xl lg:text-8xl opacity-30 text-red_primary font-bold tracking-widest' 
                style={{ textShadow: '0px 0px 6px rgb(226, 103, 72)' }}
            >
                {backgroundTitle}
            </p>
        </div>
    );
}

export default SectionHeading;
