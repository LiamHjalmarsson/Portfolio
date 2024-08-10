import React, { useContext } from 'react';
import Link from './Link';
import { MouseContext } from '../../../context/mouseContext';

let links = ["about", "skills", "projects", "background", "contact"];

const Links = ({ open, openHandler }) => {
    let { cursorChangeHandler } = useContext(MouseContext);

    return (
        <>
            <div className={`lg:flex hidden flex-grow justify-between items-center`}>
                <div className='flex-grow flex justify-end items-center'>
                    <ul className='flex w-fit items-center justify-center gap-12 rounded-full bg-opacity-70 px-12 py-4'>
                        {
                            links.map((link, index) => (
                                <li key={index} onMouseEnter={() => cursorChangeHandler("link")} onMouseLeave={() => cursorChangeHandler("")} className='group relative flex items-center'>
                                    <Link link={link} />
                                    {/* <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-red_primary transition-all duration-300 group-hover:w-full'></div> */}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className={`lg:hidden fixed inset-0 transition-all duration-500 bg-stone-200 dark:bg-stone-900 ${open ? 'bg-opacity-60 dark:bg-opacity-60' : 'bg-opacity-0 dark:bg-opacity-0 pointer-events-none'}`} onClick={openHandler}>
                <ul className={`h-full absolute flex-col flex justify-between py-32 bg-stone-200 shadow-md dark:bg-stone-800 transition-all duration-500 ${open ? 'w-1/2' : 'w-0 delay-75'}`}>
                    {
                        links.map((link, index) => (
                            <li key={index} className={`flex justify-center items-center transition-all duration-500 relative ${open ? 'w-full' : 'w-0 pr-0 opacity-0'}`}>
                                <Link link={link} close={openHandler} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default Links;
