import React, { useContext } from 'react';
import SectionHeading from '../../../components/heading/Heading';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import ContactDetail from './ContactDetail';

const DETAILS = [
    {
        icon: <FaPhoneAlt className='text-2xl lg:text-5xl text-red_primary' />,
        title: 'Phone Number',
        info: '+46767675775',
        href: 'tel:+46767675775'
    },
    {
        icon: <MdMail className='text-2xl lg:text-5xl text-red_primary' />,
        title: 'Email',
        info: 'liam.hjalmarssons@gmail.com',
        href: 'mailto:liam.hjalmarssons@gmail.com'
    }
]

const ContactDetails = () => {
    return (
        <div className='flex flex-col justify-between lg:h-96'>
            <SectionHeading
                title="Let's Get in Touch"
                subtitle="Contact Me"
                backgroundTitle="Contact"
            />
            <div className='max-lg:mt-12 px-6'>
                {
                    DETAILS.map((detail, index) => (
                        <ContactDetail
                            detail={detail}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default ContactDetails;
