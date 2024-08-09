import React from 'react';
import Item from './Item';

const Items = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full relative max-w-7xl gap-12 px-6 md:px-8 lg:px-12">
            {
                items.map((item, index) => (
                    <Item key={index} item={item} />
                ))
            }
        </div>
    );
}

export default Items;
