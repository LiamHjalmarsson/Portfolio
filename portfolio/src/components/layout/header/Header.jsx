import React, { useState } from 'react';
import Logo from '../../logo/Logo';
import Links from './Links';
import Burger from './Burger';
import Theme from './Theme';

const Header = () => {
    let [open, setOpen] = useState(false);

    let burgerMenu = () => {
        setOpen(!open);
    };

    return (
        <header className='fixed w-full text-stone-800 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 z-20 shadow max-lg:py-4'>
            <nav className='bg-transparent px-6 2xl:px-12 gap-12 flex justify-between items-center'>
                <Logo />

                <Links open={open} openHandler={burgerMenu} />

                <div className='flex gap-4 items-center'>
                    <Theme />
                    <Burger open={open} menuHandler={burgerMenu} />
                </div>
            </nav>
        </header>
    );
};

export default Header;
