import React from 'react';

const BurgerMenu = ({ isMenuOpen, toggleMenu }) => {
    return (
        <div className="flex lg:hidden items-center justify-center w-16 h-16 z-20 order-1 p-4 rounded-full right-4" onClick={toggleMenu}>
            <div className={`h-6 text-2xl w-full transition-all duration-300 overflow-hidden flex flex-col justify-center`}>
                <span className={`block bg-red_primary h-1 w-8 mb-1 rounded-full transition-transform duration-300 ease-in-out top-0 ${isMenuOpen ? 'rotate-45 translate-y-2' : "rotate-0"}`}></span>
                <span className={`block bg-red_primary h-1 w-6 mb-1 rounded-full transition-transform duration-300 ease-in-out top-1/2 ${isMenuOpen ? '-translate-x-full' : "translate-x-0"}`}></span>
                <span className={`block bg-red_primary h-1 rounded-full transition-all duration-300 ease-in-out top-full ${isMenuOpen ? '-rotate-45 -translate-y-2 w-8' : "rotate-0 w-4"}`}></span>
            </div>
        </div>
    );
}

export default BurgerMenu;
