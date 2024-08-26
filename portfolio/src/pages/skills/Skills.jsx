import React from 'react';
import SectionHeading from '../../components/heading/Heading';
import useFetch from '../../hooks/useFetch';
import SkillsByCategory from './components/SkillsCategory';

const categorizeSkills = (skills) => {
    let categories = ['Frontend', 'Backend', 'UI/UX and other'];

    return categories.reduce((acc, category) => {
        acc[category] = skills.filter(skill => skill.type === category && skill.showSkill);
        return acc;
    }, {});

};

const Skills = () => {
    let { data } = useFetch(`*[_type == "skillType"]{
        _updatedAt,
        title,
        icon,
        type,
        showSkill,
        backgroundColor{
            value
        }
    }`);

    let sortedSkills = data?.sort((a, b) => new Date(b._updatedAt) - new Date(a._updatedAt));
    let skillCategories = categorizeSkills(sortedSkills || []);

    return (
        <section className='min-h-screen flex flex-col justify-center items-center py-32 px-4 md:px-8 lg:px-12' id='skills'>
            <SectionHeading 
                title="My Skills" 
                subtitle="Frontend, Backend, UI/UX & More" 
                backgroundTitle="Skills" 
            />
            <div className='w-full max-w-7xl mt-12 flex flex-col gap-12'>
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <SkillsByCategory category={category} skills={skills} key={category} />
                ))}
            </div>
        </section>
    );
}

export default Skills;