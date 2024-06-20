import React, { useState } from 'react';
import Image from './Image';
import Skills from './Skills';
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Item = ({ item }) => {
    let { title, image, skills, github, url } = item;

    return (
        <div className="flex-grow p-6 lg:p-12">
            <div className='relative flex flex-col md:flex-row justify-center items-end'>
                <Image img={image} />

                <div className='w-full lg:w-1/2 lg:max-w-96 p-6 z-10 bg-stone-800 bg-opacity-50'>
                    <h1 className='text-2xl font-semibold tracking-wider'>
                        {title}
                    </h1>
                    <Skills skills={skills} />
                    <div className='flex justify-between w-full mt-6 text-3xl font-bold'>
                        <a href={github} target="_blank" rel="noopener noreferrer" className='hover:text-red_primary duration-300 transition-colors'>
                            <FaGithub />
                        </a>
                        <a href={url} target="_blank" rel="noopener noreferrer" className='hover:text-red_primary duration-300 transition-colors'>
                            <GoArrowUpRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
