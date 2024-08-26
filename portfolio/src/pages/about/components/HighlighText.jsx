import React from 'react';

const HighlighText = ({ children }) => {
    return (
        <span className='text-red_primary font-semibold'>
            {children}
        </span>
    );
}

export default HighlighText;
