import React from 'react';

const Icon = ({ icon }) => {
    return (
        <li>
            <a
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className='text-3xl text-stone-800 dark:text-stone-100'
            >
                {icon.icon}
            </a>
        </li>
    );
}

export default Icon;
