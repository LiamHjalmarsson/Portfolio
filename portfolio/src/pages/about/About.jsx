import React, { useContext } from 'react';
import SectionHeading from '../../components/heading/Heading';
import img from "/liam.png";
import TypeWriter from './components/TypeWriter';
import { Link } from 'react-scroll';
import CvButton from '../../components/elements/Cv';
import Sidebar from '../../components/sidebar/Sidebar';
import { MouseContext } from '../../context/mouseContext';
import HighlighText from './components/HighlighText';


const About = () => {
    let { setCursorType } = useContext(MouseContext);

    return (
        <section className='min-h-screen flex flex-col justify-center items-center relative pb-12 pt-24 lg:pt-40' id='about'>

            <div className='flex flex-wrap w-full gap-12 lg:gap-24 justify-center items-center max-lg:flex-grow'>
                <div className="h-full p-4">
                    <div className='p-2 border border-red_primary border-opacity-60 rounded-full'>
                        <div className='p-2 border border-red_primary border-opacity-80 rounded-full relative'>
                            <img src={img} alt="Liam Hjalmarsson - Frontend Developer with Media Technology Background" className="lg:max-w-80 lg:max-h-80 max-h-64 h-full max-w-64 w-full object-cover rounded-full" />
                            <span className="absolute m-2 inset-0 bg-gradient-to-r from-red_primary to-stone-200 dark:to-stone-800 opacity-60 rounded-full"></span>
                        </div>
                    </div>
                </div>

                <div className='w-full max-w-2xl text-center px-6 lg:px-12'>
                    <SectionHeading 
                        title="I'm Liam Hjalmarsson" 
                        subtitle="About Me" 
                        backgroundTitle="about" 
                    />
                    <TypeWriter />
                    <p 
                        className='text-sm lg:text-base text-stone-800 dark:text-stone-100 mt-4 leading-relaxed mb-12' 
                        onMouseEnter={() => setCursorType("text")} 
                        onMouseLeave={() => setCursorType("")}
                    >
                        I am a passionate <HighlighText>junior Frontend Developer</HighlighText> with a <HighlighText>Bachelor's degree in Media Technology</HighlighText>.
                        I have a big interest in UI/UX design, but my passion lies in Frontend development. Transforming ideas into user-friendly and visually appealing web designs.
                        My skill set includes <HighlighText>HTML, CSS, JavaScript, React, and more</HighlighText>.
                        I am always looking for opportunities to enhance my skill set, whether it's <HighlighText>building projects or connecting</HighlighText>
                    </p>
                    <CvButton />
                </div>
            </div>

            <Link
                className='my-12 bottom-10 xl:absolute'
                to="skills"
                duration={500}
                smooth={true}
            >
                <span 
                    className='w-6 h-10 border-2 border-red_primary rounded-full flex justify-center items-start' 
                    onMouseEnter={() => setCursorType("button")} 
                    onMouseLeave={() => setCursorType("")}
                >
                    <span className='w-1.5 h-2.5 bg-red_primary rounded-full mt-1'></span>
                </span>
            </Link>

            <Sidebar />
        </section >
    );
}

export default About;
