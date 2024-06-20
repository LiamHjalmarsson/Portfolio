import React, { useContext } from 'react';
import Icon from './Icon';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MouseContext } from '../../context/mouseContext';

let icons = [
    {
        icon: <FaGithub />,
        url: "https://github.com/LiamHjalmarsson",
    },
    {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/liam-hjalmarsson-710505231",
    },
];

const Icons = () => {
    let { cursorChangeHandler } = useContext(MouseContext);

    return (
        <ul className='p-4 bg-red_primary transition-colors duration-300 flex flex-row xl:flex-col gap-8' onMouseEnter={() => cursorChangeHandler("icon")} onMouseLeave={() => cursorChangeHandler("")}>
            {
                icons.map((icon, index) => (
                    <li key={index}>
                        <Icon key={index} icon={icon} />
                    </li>
                ))
            }
        </ul>
    );
}

export default Icons;
