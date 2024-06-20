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
                    <ul className='flex w-fit items-center justify-center gap-12 bg-stone-800 rounded-full bg-opacity-70 px-12 py-6'>
                        {
                            links.map((link, index) => (
                                <li key={index} onMouseEnter={() => cursorChangeHandler("link")} onMouseLeave={() => cursorChangeHandler("")} className='flex'> 
                                    <Link link={link} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className={`lg:hidden h-screen w-full left-0 fixed transition-all duration-0 ease-in ${open ? 'top-0  bg-opacity-60' : 'bg-opacity-0 top-[-100vh] delay-700'} bg-stone-900`} onClick={openHandler}>
                <ul className={`h-full absolute flex-col flex justify-between py-32 bg-stone-800 transition-all duration-500 ${open ? 'w-1/2' : 'w-0 delay-75'}`}>
                    {
                        links.map((link, index) => (
                            <li key={index} className={`flex justify-center items-center transition-all duration-500 relative ${open ? 'w-3/4' : 'w-0 pr-0 opacity-0'}`}>
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
