import React, { useContext } from 'react';
import Link from './Link';
import { MouseContext } from '../../context/mouseContext';

let links = ["about", "skills", "projects", "background", "contact"];

const Links = ({ isMenuOpen, closeMenu }) => {
    let { setCursorType } = useContext(MouseContext);

    return (
        <>
            {/* Desktop */}
            <div className={`lg:flex hidden flex-grow justify-between items-center`}>
                <div className='flex-grow flex justify-end items-center'>
                    <ul className='flex w-fit items-center justify-center gap-12 rounded-full bg-opacity-70 px-12 py-4'>
                        {
                            links.map((link, index) => (
                                <li 
                                    key={index} 
                                    onMouseEnter={() => setCursorType("link")} 
                                    onMouseLeave={() => setCursorType("")} 
                                    className='group relative flex items-center'
                                >
                                    <Link link={link} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* Mobile */}
            <div className={`lg:hidden fixed inset-0 transition-all duration-500 bg-stone-200 dark:bg-stone-900 ${isMenuOpen ? 'bg-opacity-60 dark:bg-opacity-60' : 'bg-opacity-0 dark:bg-opacity-0 pointer-events-none'}`} onClick={closeMenu}>
                <ul className={`h-full absolute flex-col flex justify-between py-32 bg-stone-200 shadow-md dark:bg-stone-800 transition-all duration-500 ${isMenuOpen ? 'w-1/2' : 'w-0 delay-75'}`}>
                    {
                        links.map((link, index) => (
                            <li key={index} className={`flex justify-center items-center transition-all duration-500 relative ${isMenuOpen ? 'w-full' : 'w-0 pr-0 opacity-0'}`}>
                                <Link link={link} closeMenu={closeMenu} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default Links;
