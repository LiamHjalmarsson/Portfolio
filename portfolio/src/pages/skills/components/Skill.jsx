import React from 'react';

const Skill = ({ skill }) => {
    return (
        <div className='flex flex-col items-center p-4 md:p-6 lg:p-8 bg-stone-900 bg-opacity-30 rounded-xl group transition duration-300 hover:scale-105 hover:bg-red_primary hover:bg-opacity-30'>
            <div className='transition duration-300'>
                <img src={skill.icon.metadata.url} alt={skill.title} className="h-16 object-cover" />
            </div>
            <p className='mt-4 text-base lg:text-lg font-semibold text-gray-300d transition duration-300'>
                {skill.title}
            </p>
        </div>
    );
}

export default Skill;
