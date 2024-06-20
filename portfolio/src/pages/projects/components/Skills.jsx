import React from 'react';

const Skills = ({ skills }) => {
    return (
        <ul className='flex flex-wrap justify-start gap-2 mt-4'>
            {skills.map((skill, index) => (
                <li key={index} className='inline-block text-xs font-bold uppercase px-4 py-2 bg-stone-900 text-red_primary tracking-widest rounded-full shadow-md'>
                    {skill.title}
                </li>
            ))}
        </ul>
    );
}

export default Skills;
