import React from 'react';

const Item = ({ item, cursorChangeHandler }) => {
    return (
        <div className='mb-12' onMouseEnter={() => cursorChangeHandler("text")} onMouseLeave={() => cursorChangeHandler("")}>
            <h4 className='text-lg lg:text-2xl mb-2 lg:mb-4'>
                {item.roll}
            </h4>
            <div className='mb-4 lg:mb-8 flex justify-between items-center'>
                <h5 className='text-base lg:text-lg text-red_primary'>
                    {item.company}
                </h5>
                <p className='text-xs pr-4'>
                    {item.fromDate} / {item.toDate}
                </p>
            </div>
            <p className='text-base leading-relaxed'>
                {item.description}
            </p>
        </div>
    );
}

export default Item;
