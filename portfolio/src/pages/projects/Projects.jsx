import React from 'react';
import SectionHeading from '../../components/heading/Heading';
import useFetch from '../../hooks/useFetch';
import Project from './components/Project';

const Projects = () => {
    let { data } = useFetch(`*[_type == "projects"]{
        title,
        image,
        github,
        url,
        skills[]->{  
            title,
            icon
        }
    }`);

    return (
        <section className='min-h-[100vh] flex flex-col gap-12 lg:gap-24 justify-center items-center py-32' id='projects'>
            <SectionHeading
                title="Portfolio"
                subtitle="My Projects"
                backgroundTitle="Projects"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full relative max-w-7xl gap-12 px-6 md:px-8 lg:px-12">
                {
                    data && data.map((item, index) => (
                        <Project key={index} item={item} />
                    ))
                }
            </div>
        </section>
    );
}

export default Projects;
