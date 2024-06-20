import React from 'react';
import Item from './Item';

const Items = ({ items }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center items-center w-full px-6 lg:px-12 relative">
            {
                items.map((item, index) => (
                    <Item key={index} item={item} />
                ))
            }
        </div>
    );
}

export default Items;
