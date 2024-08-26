import React, { useContext } from 'react';
import Item from './Item';
import { MouseContext } from '../../../context/mouseContext';

const ItemsList = ({ title, items }) => {
    let { setCursorType } = useContext(MouseContext);

    return (
        <div className='max-w-xl flex-grow lg:px-6'>
            <h2 
                className='text-2xl lg:text-4xl mb-4 lg:mb-8 text-red_primary font-semibold tracking-wide' 
                onMouseEnter={() => setCursorType("text")} 
                onMouseLeave={() => setCursorType("")}
            >
                {title}
            </h2>
            {
                items.map((item, index) => (
                    <Item 
                        key={index} 
                        item={item} 
                        cursorChangeHandler={setCursorType} 
                    />
                ))
            }
        </div>
    );
}

export default ItemsList;
