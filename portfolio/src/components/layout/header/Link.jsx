import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Link = ({ link, close }) => {
    let [isActive, setIsActive] = useState(false);

    return (
        <ScrollLink
            className={`w-2/3 lg:w-fit relative lg:px-2 transition duration-300 text-center font-bold py-4 uppercase tracking-wider text-sm group hover:text-red_primary ${isActive ? 'text-red_primary' : 'text-stone-800 dark:text-stone-100'}`}
            to={link}
            duration={300}
            smooth={true}
            onClick={close ? close : () => { }}
            spy={true}
            offset={0}
            activeStyle={{}}
            onSetActive={() => setIsActive(true)}
            onSetInactive={() => setIsActive(false)}
        >
            <div
                className={`absolute -top-0 left-0 w-full h-0.5 bg-red_primary transform transition-transform duration-300 ease-in-out 
                    ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                style={{ transformOrigin: 'left' }}
            ></div>
            {link}
            <div
                className={`absolute -bottom-0 left-0 w-full h-0.5 bg-red_primary transform transition-transform duration-300 ease-in-out 
                    ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                style={{ transformOrigin: 'left' }}
            ></div>
        </ScrollLink>
    );
}

export default Link;
