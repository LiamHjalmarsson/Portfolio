import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const checkTheme = () => {
    let theme = localStorage.getItem('theme');
    return theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

const Theme = () => {
    let [isDarkMode, setIsDarkMode] = useState(checkTheme());

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    let toggleTheme = () => {
        let newTheme = isDarkMode ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className={`
                relative w-20 h-10 rounded-full justify-between flex items-center
                ${isDarkMode ? 'bg-stone-900' : 'bg-stone-200'} transition-colors duration-300 bg-opacity-30 shadow-md
            `}
        >
            <span
                className={`
                    mx-1 cursor-pointer absolute w-7 h-7 bg-stone-100 rounded-full shadow-md transition-transform duration-300 transform
                    ${isDarkMode ? 'translate-x-[155%]' : 'translate-x-0'}
                `}
            ></span>
            <span className="relative z-10 w-full flex items-center justify-between px-2">
                <MdLightMode className={`text-xl ${isDarkMode ? 'text-gray-500' : 'text-yellow-500'}`} />
                <MdDarkMode className={`text-xl ${isDarkMode ? 'text-blue-500' : 'text-gray-500'}`} />
            </span>
        </button>
    );
}

export default Theme;
