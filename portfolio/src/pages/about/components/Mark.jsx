import React from 'react';

const Mark = ({ children }) => {
    return (
        <span className='text-red_primary font-bold'>
            {children}
        </span>
    );
}

export default Mark;
