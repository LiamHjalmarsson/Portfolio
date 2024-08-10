import React from 'react';

const Skill = ({ skill }) => {
    return (
        <div className='flex-grow flex flex-col items-center p-2 md:p-6 shadow-md bg-stone-200 dark:bg-stone-900 bg-opacity-30 dark:bg-opacity-30 rounded-xl group transition duration-300 hover:scale-105 hover:bg-red_primary hover:bg-opacity-40'>
            <div className='transition duration-300'>
                <img src={skill.icon.metadata.url} alt={skill.title} className="h-12 md:h-14 object-cover" />
            </div>
            <p 
                className='mt-4 py-0.5 px-2 rounded-full text-sm md:text-base lg:text-lg font-semibold text-gray-300d transition duration-300' 
                style={{ backgroundColor: skill.backgroundColor ? skill.backgroundColor.value : 'transparent'}}
            >
                {skill.title}
            </p>
        </div>
    );
}

export default Skill;
