import React from 'react';

const Icon = ({ icon }) => {
    return (
        <a href={icon.url} target="_blank" rel="noopener noreferrer" className='text-3xl text-stone-800 dark:text-stone-100 hover:scale-125 transition duration-300'>
            {icon.icon}
        </a>
    );
}

export default Icon;
