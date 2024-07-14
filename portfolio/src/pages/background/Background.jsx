import React from 'react';
import Heading from '../../components/heading/Heading';
import Items from './components/Items';
import Cv from '../../components/elements/Cv';

let workItems = [
    {
        roll: "Internship",
        company: "Sjöbergska huset",
        fromDate: "2023-09-01",
        toDate: "2023-12-19",
        description: `
            During this period, i had the opportunity to work on various projects and tasks, using different tools, primarily Figma and Webflow. One off the more notable projects involved working on a pro-bono case for an organization.
        `,
    }
];

let educationItems = [
    {
        roll: "Mediaproducation and Processdesign",
        company: "Malmö University",
        fromDate: "2021-09-01",
        toDate: "2024-06-02",
        description: `
            I have finished a three-year bachelor's program in Media Production and Process Design, focusing on web channel development and media production. 
            The program has provided me with a solid foundation in programming and design, as well as in other areas such as management, marketing. 
            Throughout my education, I learned to create interactive and dynamic web-based channels and produce original content for print, web, and mobile platforms.
            The program equipped me with a diverse range of skills in media production and a comprehensive understanding of the media landscape, preparing me for a dynamic career in the industry.
            A highlight of my studies was the VIP course, where I worked closely with a small group of students on projects using JavaScript. 
            This experience deepened my understanding of concepts like pub-sub, state management, and component architecture.
        `,
    },
];

const Background = () => {
    return (
        <section className='min-h-[100vh] flex justify-center items-center flex-col gap-12 lg:gap-24 py-12' id='background'>
            <Heading heading="Education and Work" subHeading="My background" backgroundText="Background" />

            <div className='flex lg:flex-row flex-col gap-12 px-6 lg:px-12'>
                <Items title="Work Experience" items={workItems} />
                <Items title="Education" items={educationItems} />
            </div>

            <Cv />
        </section>
    );
}

export default Background;
