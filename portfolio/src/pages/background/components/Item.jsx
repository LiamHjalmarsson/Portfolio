import React, { useState, useRef, useEffect } from 'react';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { PortableText } from '@portabletext/react';

const portableTextComponents = {
    marks: {
        strong: ({ children }) => <strong className="text-red_primary font-semibold">{children}</strong>,
    },
};

const Item = ({ item, cursorChangeHandler }) => {
    let [isOpen, setIsOpen] = useState(false);
    let [height, setHeight] = useState(0);
    let contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [open]);

    let isOpenHandler = () => setIsOpen(prev => !prev);

    return (
        <div
            className='mb-12'
            onMouseEnter={() => cursorChangeHandler("text")}
            onMouseLeave={() => cursorChangeHandler("")}
        >
            <h4 className='text-lg lg:text-2xl mb-2 lg:mb-4'>
                {item.positionOrDegree}
            </h4>

            <div className='mb-4 lg:mb-8 flex justify-between items-center'>
                <h5 className='text-base lg:text-lg text-red_primary'>
                    {item.institutionOrCompany}
                </h5>
                <p className='text-xs pr-4'>
                    {item.startDate} / {item.endDate}
                </p>
            </div>

            <div className={`overflow-hidden transition-all duration-1000`} style={{ height: isOpen ? `${height}px` : '130px' }}>
                <div ref={contentRef} className='text-base leading-relaxed flex flex-col gap-4 transition-colors duration-0'>
                    <PortableText value={item.descriptions} components={portableTextComponents} />
                </div>
            </div>

            <div className='flex justify-end items-end m-2'>
                <button className='p-2 hover:scale-125 transition duration-300 text-xl font-bold bg-red_primary text-stone-900 rounded-full' onClick={isOpenHandler}>
                    
                    {
                        isOpen && <SlArrowUp /> || <SlArrowDown />
                    }
                </button>
            </div>
        </div>
    );
};

export default Item;