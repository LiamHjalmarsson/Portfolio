import React from 'react';
import Heading from '../../components/heading/Heading';
import Items from './components/items';
import useFetch from '../../hooks/useFetch';

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
        <section className='min-h-[100vh] flex flex-col gap-12 lg:gap-24 justify-center items-center py-12' id='projects'>
            <Heading heading="Portfolio" subHeading="My Projects" backgroundText="Projects" />

            {
                data && <Items items={data} />
            }
        </section>
    );
}

export default Projects;
