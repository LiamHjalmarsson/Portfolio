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
        url: "https://www.linkedin.com/in/liamhjalmarsson",
    },
];

const SocialIcons = () => {
    let { setCursorType } = useContext(MouseContext);

    return (
        <ul 
            className='p-4 bg-red_primary flex flex-row xl:flex-col gap-8 shadow-lg' 
            onMouseEnter={() => setCursorType("icon")} 
            onMouseLeave={() => setCursorType("")}
        >
            {
                icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))
            }
        </ul>
    );
}

export default SocialIcons;
