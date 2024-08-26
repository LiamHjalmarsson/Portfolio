import React, { useContext } from 'react';
import { MouseContext } from '../../../context/mouseContext';

const ContactDetail = ({ detail }) => {
    let { setCursorType } = useContext(MouseContext);

    return (
        <div className='mb-6 lg:mb-12 flex gap-6 items-center'>
            {detail.icon}
            <div
                onMouseEnter={() => setCursorType("text")}
                onMouseLeave={() => setCursorType("")}
            >
                <h2 className='text-xl max-lg:font-semibold mb-2'>
                    {detail.title}
                </h2>
                <a href={detail.href}>
                    {detail.info}
                </a>
            </div>
        </div>
    );
}

export default ContactDetail;
