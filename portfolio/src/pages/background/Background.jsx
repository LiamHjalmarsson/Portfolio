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
        description: "During this period, i had the opportunity to work on various projects and tasks, using different tools, primarily Figma and Webflow. One off the more notable projects involved working on a pro-bono case for an organization.",
    }
];

let educationItems = [
    {
        roll: "Mediaproducation and Processdesign",
        company: "Malmö University",
        fromDate: "2021-09-01",
        toDate: "2024-06-02",
        description: "During this period, i had the opportunity to work on various projects and tasks, using different tools, primarily Figma and Webflow. One off the more notable projects involved working on a pro-bono case for an organization.",
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
