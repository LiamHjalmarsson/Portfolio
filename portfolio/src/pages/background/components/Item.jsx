import React, { useState, useRef, useEffect } from 'react';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Item = ({ item, cursorChangeHandler }) => {
    let [open, setOpen] = useState(false);
    let [height, setHeight] = useState(0);
    let contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [open]);

    let openHandler = () => {
        setOpen(!open);
    };

    return (
        <div className='' onMouseEnter={() => cursorChangeHandler("text")} onMouseLeave={() => cursorChangeHandler("")}>
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
            <div className={`overflow-hidden transition-all duration-1000`} style={{ height: open ? `${height}px` : '80px' }}>
                <p ref={contentRef} className='text-base leading-relaxed'>
                    {item.description}
                </p>
            </div>
            <div className='flex justify-end items-end mt-2'>
                {!open && (
                    <div className='p-2 hover:scale-125 transition duration-300 text-xl font-bold bg-red_primary text-stone-900 rounded-full ' onClick={openHandler}>
                        <SlArrowDown />
                    </div>
                )}
                {open && (
                    <div className='p-2 hover:scale-125 transition duration-300 text-xl font-bold bg-red_primary text-stone-900 rounded-full ' onClick={openHandler}>
                        <SlArrowUp/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Item;
