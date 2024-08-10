import React, { useContext } from 'react';
import Item from './Item';
import { MouseContext } from '../../../context/mouseContext';

const Items = ({ title, items }) => {
    let { cursorChangeHandler } = useContext(MouseContext);

    return (
        <div className='max-w-xl flex-grow lg:px-6'>
            <h2 className='text-2xl lg:text-4xl mb-4 lg:mb-8 text-red_primary font-semibold tracking-wide' onMouseEnter={() => cursorChangeHandler("text")} onMouseLeave={() => cursorChangeHandler("")}>
                {title}
            </h2>
            {
                items.map((item, index) => (
                    <Item key={index} item={item} cursorChangeHandler={cursorChangeHandler} />
                ))
            }
        </div>
    );
}

export default Items;
