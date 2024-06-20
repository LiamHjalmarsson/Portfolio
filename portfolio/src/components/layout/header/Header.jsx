import React, { useState } from 'react';
import Logo from '../../logo/Logo';
import Links from './Links';
import Burger from './Burger';

const Header = () => {
    let [open, setOpen] = useState(false);

    let burgerMenu = () => {
        setOpen(!open);
    }

    return (
        <header className='absolute lg:fixed w-full text-stone-100 z-20 bg-transparent'>
            <nav className='bg-transparent px-6 2xl:px-12 gap-12 py-4 lg:py-6 2xl:py-8 flex justify-between items-center'>
                <Logo />

                <Links open={open} openHandler={burgerMenu} />

                <Burger open={open} menuHandler={burgerMenu} />
            </nav>
        </header>
    );
}

export default Header;
