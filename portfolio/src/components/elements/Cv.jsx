import React, { useContext, useState } from 'react';
import { MouseContext } from '../../context/mouseContext';

const Cv = () => {
    let { cursorChangeHandler } = useContext(MouseContext);
    let [download, setDownload] = useState(false);

    return (
        <div className='my-2 lg:my-4'>
            <a
                className={`relative px-8 py-3 border-2 border-red_primary font-bold text-lg tracking-wider rounded-b-full rounded-tr-full transition 
                lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:top-0 lg:before:w-1/2 lg:before:bg-red_primary lg:before:duration-500 lg:before:rounded-b-full lg:before:rounded-tr-full lg:hover:before:w-full
                ${download ? "before:w-full" : ""}
                `}
                href='/Cv.pdf'
                download="/Cv.pdf"
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