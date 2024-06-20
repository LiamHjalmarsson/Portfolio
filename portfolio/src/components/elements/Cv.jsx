import React, { useContext, useEffect, useState } from 'react';
import { MouseContext } from '../../context/mouseContext';

const Cv = () => {
    let { cursorChangeHandler } = useContext(MouseContext);
    let [download, setDownload] = useState(false);

    useEffect(() => {

    }, []);
    
    return (
        <div className='my-2 lg:my-4'>
            <a
                className={`relative px-8 py-3 border-2 border-red_primary font-bold text-lg tracking-wider rounded-b-full rounded-tr-full transition 
                before:absolute before:bottom-0 before:left-0 before:top-0 before:w-1/2 before:bg-red_primary before:duration-500 before:rounded-b-full before:rounded-tr-full hover:before:w-full
                ${download ? "before:w-full" : ""}
                `}
                href='/Cv.pdf'
                download="Cv.pdf"
                onMouseEnter={() => cursorChangeHandler("button")}
                onMouseLeave={() => cursorChangeHandler("")}
                onClick={() => setDownload(true)}
            >
                <span className=' relative z-10'>
                    Download CV
                </span>
            </a>
        </div>
    );
}

export default Cv;
