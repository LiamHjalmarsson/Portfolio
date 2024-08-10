import React from 'react';
import Skill from './Skill';

const SkillsByCategory = ({ category, skills }) => {
    return (
        <div>
            <h2 className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mb-6 text-red_primary'>{category}</h2>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8 lg:gap-10'>
                {
                    skills.map((skill, index) => (
                        <Skill skill={skill} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export default SkillsByCategory;
