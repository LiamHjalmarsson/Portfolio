import React, { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Link = ({ link, close }) => {
    return (
        <ScrollLink
            className='relative px-4 max-lg:pl-6 lg:px-6 2xl:px-12 py-4 w-full bg-stone-800 border border-red_primary max-lg:skew-x-6 hover:scale-110 lg:rounded-tr-full max-lg:border-l-0 lg:rounded-bl-full hover:bg-red_primary transition duration-300 hover:text-stone-900 font-bold shadow-red_primary uppercase tracking-wider text-sm'
            to={link}
            duration={500}
            smooth={true}
            onClick={close ? close : () => { }}
            activeClass="active"
            spy={true}
            offset={0}
            activeStyle={{ background: "#ff4b57", color: "#292524", boxShadow: "0px 0px 6px 2px #ff4b57" }}
        >
            <span className='relative z-10'>
                {link}
            </span>
        </ScrollLink>
    );
}

export default Link;