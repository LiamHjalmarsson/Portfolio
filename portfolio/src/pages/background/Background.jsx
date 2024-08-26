import React from 'react';
import SectionHeading from '../../components/heading/Heading';
import ItemsList from './components/ItemsList';
import useFetch from '../../hooks/useFetch';
import CvButton from '../../components/elements/Cv';

const Background = () => {
    let { data } = useFetch(`*[_type == "background"]{
        type,
        positionOrDegree,
        institutionOrCompany,
        startDate,
        endDate,
        description,
        descriptions,
    }`);

    let workItems = data?.filter(item => item.type === 'work');
    let educationItems = data?.filter(item => item.type === 'education');

    return (
        <section className='min-h-[100vh] flex justify-center items-center flex-col gap-12 lg:gap-24 py-32' id='background'>
            <SectionHeading 
                title="Education and Work" 
                subtitle="My background" 
                backgroundTitle="Background" 
            />

            {
                data && (
                    <div className='flex lg:flex-row flex-col gap-12 px-6 lg:px-12'>
                        <ItemsList 
                            title="Work Experience" 
                            items={workItems} 
                        />
                        <ItemsList
                            title="Education" 
                            items={educationItems} 
                        />
                    </div>
                )
            }

            <CvButton />
        </section>
    );
}

export default Background;
