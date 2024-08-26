import React, { useState } from 'react';
import ProjectImage from './ProjectImage';
import ProjectSkills from './ProjectSkills';
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Project = ({ item }) => {
    let { title, image, skills, github, url } = item;

    return (
        <div className="flex-grow h-full">
            <div className='relative flex flex-col justify-center items-end'>
                <ProjectImage img={image} />

                <div className='max-lg:absolute max-lg:h-full flex justify-between flex-col w-full p-6 z-10 bg-stone-100 dark:bg-stone-800 bg-opacity-40 dark:bg-opacity-50'>
                    <div className='flex justify-between gap-4 flex-wrap text-red_primary'>
                        <h1 className='text-2xl font-bold tracking-wider'>
                            {title}
                        </h1>
                        <div className='flex gap-4 text-3xl font-bold'>
                            <a 
                                href={github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='hover:text-red_primary duration-300 transition-colors'
                            >
                                <FaGithub />
                            </a>
                            <a 
                                href={url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='hover:text-red_primary duration-300 transition-colors'
                            >
                                <GoArrowUpRight />
                            </a>
                        </div>
                    </div>
                    <ProjectSkills skills={skills} />
                </div>
            </div>
        </div>
    );
}

export default Project;
