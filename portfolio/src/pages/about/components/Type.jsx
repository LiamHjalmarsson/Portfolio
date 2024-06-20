import React from 'react';
import { useTypewriter } from "react-simple-typewriter";

const Type = () => {
    let [typeEffect] = useTypewriter(
        {
            words: ["Frontend Development", "Web Development", "Web Design", "Fullstack Development", "Backend Development"],
            loop: {},
            typeSpeed: 70,
            deleteSpeed: 20,
        }
    );

    return (
        <div className='h-10 mt-8'>
            <p className='text-lg lg:text-2xl font-semibold text-red_primary'>
                {typeEffect}
            </p>
        </div>
    );
}

export default Type;
