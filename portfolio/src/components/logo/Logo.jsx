import React from 'react';
import img from "../../../public/LH.png"

const Logo = () => {
    return (
        <div className='bg-stone-800 rounded-full bg-opacity-70 p-4 w-16 h-16 relative'>
            <img src={img} className='scale-110 object-cover' />
        </div>
    );
}

export default Logo;
