import React, { useContext } from 'react';
import SectionHeading from '../../components/heading/Heading';
import Form from './components/Form';
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { MouseContext } from '../../context/mouseContext';

const Contact = () => {
    let { setCursorType } = useContext(MouseContext);

    return (
        <section className='relative min-h-[100vh] flex flex-col justify-center items-center pt-12 pb-6' id='contact'>
            <div className='flex-grow flex justify-center items-center'>
                <div className='flex flex-col px-4 lg:flex-row flex-grow gap-12 lg:gap-24 max-w-5xl mx-auto relative'>
                    <div className='flex flex-col justify-between lg:h-96'>
                        <SectionHeading
                            title="Let's Get in Touch"
                            subtitle="Contact Me"
                            backgroundTitle="Contact"
                        />
                        <div className='max-lg:mt-12 px-6'>
                            <div className='mb-6 lg:mb-12 flex gap-6 items-center '>
                                <FaPhoneAlt className='text-2xl lg:text-5xl text-red_primary' />
                                <div 
                                    onMouseEnter={() => setCursorType("text")} 
                                    onMouseLeave={() => setCursorType("")}
                                >
                                    <h2 className='text-xl max-lg:font-semibold mb-2'>
                                        Phone Number
                                    </h2>
                                    <a href="tel:+46767675775">
                                        +46767675775
                                    </a>
                                </div>
                            </div>
                            <div className='mb-6 flex gap-6 items-center'>
                                <MdMail className='text-2xl lg:text-5xl text-red_primary' />
                                <div 
                                    onMouseEnter={() => setCursorType("text")} 
                                    onMouseLeave={() => setCursorType("")}
                                >
                                    <h2 className='text-xl max-lg:font-semibold mb-2'>
                                        Email
                                    </h2>
                                    <a href='mailto:liam.hjalmarssons@gmail.com'>
                                        liam.hjalmarssons@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>

            <footer className='lg:absolute bottom-0 w-full text-center py-24 px-6'>
                © Copyright 2024, All Rights Reserved by <span className='text-red_primary font-semibold'>Liam Hjalmarsson. </span> 
            </footer>
        </section>
    );
}

export default Contact;
