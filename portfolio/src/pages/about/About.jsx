import React, { useContext } from 'react';
import Heading from '../../components/heading/Heading';
import img from "/liam.png";
import Type from './components/Type';
import { Link } from 'react-scroll';
import Cv from '../../components/elements/Cv';
import Sidebar from '../../components/sidebar/Sidebar';
import { MouseContext } from '../../context/mouseContext';
import Mark from './components/Mark';


const About = () => {
    let { cursorChangeHandler } = useContext(MouseContext);

    return (
        <section className='min-h-screen flex flex-col justify-center items-center relative pb-12 pt-24' id='about'>
            <div className='flex flex-wrap w-full gap-12 lg:gap-24 justify-center items-center max-lg:flex-grow'>
                <div className="relative h-full">
                    <img src={img} alt="Liam Hjalmarsson - Frontend Developer with Media Technology Background" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red_primary to-stone-800 opacity-60"></div>
                </div>

                <div className='w-full max-w-2xl text-center px-6 lg:px-12'>
                    <Heading heading="I'm Liam Hjalmarsson" subHeading="About Me" backgroundText="about" />
                    <Type />
                    <p className='text-sm lg:text-base text-stone-300 mt-4 leading-relaxed mb-12' onMouseEnter={() => cursorChangeHandler("text")} onMouseLeave={() => cursorChangeHandler("")}>
                        I am a passionate <Mark>junior Frontend Developer</Mark> with a <Mark>Bachelor's degree in Media Technology</Mark>.
                        I have a big interest in UI/UX design, but my passion lies in Frontend development. Transforming ideas into user-friendly and visually appealing web designs.
                        My skill set includes <Mark>HTML, CSS, JavaScript, React, and more</Mark>.
                        I am always looking for opportunities to enhance my skill set, whether it's <Mark>building projects or connecting</Mark>
                    </p>
                    <Cv />
                </div>
            </div>

            <Link
                className='my-12 bottom-10 xl:absolute'
                to="skills"
                duration={500}
                smooth={true}
            >
                <div className='w-6 h-10 border-2 border-red_primary rounded-full flex justify-center items-start' onMouseEnter={() => cursorChangeHandler("button")} onMouseLeave={() => cursorChangeHandler("")}>
                    <div className='w-1.5 h-2.5 bg-red_primary rounded-full mt-1'></div>
                </div>
            </Link>

            <Sidebar />

        </section >
    );
}

export default About;
