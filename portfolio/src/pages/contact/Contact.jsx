import React, { useContext } from 'react';
import Form from './components/Form';
import ContactDetails from './components/ContactDetails';

const Contact = () => {

    return (
        <section className='relative min-h-[100vh] flex flex-col justify-center items-center pt-12 pb-6' id='contact'>
            <div className='flex-grow flex justify-center items-center'>
                <div className='flex flex-col px-4 lg:flex-row flex-grow gap-12 lg:gap-24 max-w-5xl mx-auto relative'>
                    <ContactDetails />
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
