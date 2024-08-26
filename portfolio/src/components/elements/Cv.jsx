import React, { useContext, useState } from 'react';
import { MouseContext } from '../../context/mouseContext';

const CvButton = () => {
    let { setCursorType } = useContext(MouseContext);
    let [downloaded, setDownloaded] = useState(false);

    return (
        <div className='my-2 lg:my-4'>
            <a
                className='group relative px-8 py-3 border-2 border-red_primary font-bold text-lg tracking-wider rounded-b-full rounded-tr-full overflow-hidden'
                href='/Cv.pdf'
                download="/Cv.pdf"
                onMouseEnter={() => setCursorType("button")}
                onMouseLeave={() => setCursorType("")}
                onClick={() => setDownloaded(true)}
            >
                <span
                    className={`absolute top-0 bottom-0 left-0 w-1/2 bg-red_primary rounded-b-full rounded-tr-full transition-all duration-500 ease-in-out group-hover:w-[101%] ${downloaded ? "w-[101%]" : ""}`}
                ></span>
                <span className='relative z-10'>
                    Download CV
                </span>
            </a>
        </div>
    );
}

export default CvButton;