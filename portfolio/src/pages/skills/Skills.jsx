import React from 'react';
import Heading from '../../components/heading/Heading';
import Skill from './components/Skill';
import useFetch from '../../hooks/useFetch';

const Skills = () => {
    let { data } = useFetch(`*[_type == "skillType"]{
        _updatedAt,
        title,
        icon,
        type,
        backgroundColor{
            value
        }
    }`);

    let sortedSkills = data?.sort((a, b) => new Date(b._updatedAt) - new Date(a._updatedAt));

    return (
        <section className='min-h-screen flex flex-col justify-center items-center py-12' id='skills'>
            <Heading heading="Frontend, Backend and UI/UX" subHeading="My Skills" backgroundText="Skills" />

            <div className='mt-12 lg:mt-24 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12 p-4 md:px-8 lg:px-12'>
                {data && sortedSkills.map((skill, index) => (
                    <Skill skill={skill} key={index} />
                ))}
            </div>

        </section >
    );
}

export default Skills;