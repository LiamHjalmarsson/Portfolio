import React from 'react';
import Heading from '../../components/heading/Heading';
import Items from './components/Items';
import Cv from '../../components/elements/Cv';
import useFetch from '../../hooks/useFetch';

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

    let work = data?.filter(item => item.type === 'work');
    let education = data?.filter(item => item.type === 'education');

    return (
        <section className='min-h-[100vh] flex justify-center items-center flex-col gap-12 lg:gap-24 py-32' id='background'>
            <Heading heading="Education and Work" subHeading="My background" backgroundText="Background" />

            {
                data && (
                    <div className='flex lg:flex-row flex-col gap-12 px-6 lg:px-12'>
                        <Items title="Work Experience" items={work} />
                        <Items title="Education" items={education} />
                    </div>
                )
            }

            <Cv />
        </section>
    );
}

export default Background;
