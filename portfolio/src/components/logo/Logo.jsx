import React from 'react';
import img from "/lhLogo.png"

const Logo = () => {
    return (
        <div className='p-4 w-16 h-16 relative'>
            <img src={img} className='scale-110 object-cover' alt='Logo of Liam Hjalmarssons initialize' />
        </div>
    );
}

export default Logo;
