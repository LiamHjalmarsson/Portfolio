import React, { useContext, useRef, useState } from 'react';
import InputRow from './InputRow';
import { FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { MouseContext } from '../../../context/mouseContext';

const Form = () => {
    let { setCursorType } = useContext(MouseContext);

    let formRef = useRef();
    let [loading, setLoading] = useState();
    let [error, setError] = useState({});
    let [sent, setSent] = useState(false);

    let validateForm = (email, message) => {
        let errors = {};

        if (!email) errors.email = 'If you want to get i contact please enter a your Email :)';
        if (!message) errors.message = 'Enter a message you would like to send to me';

        return errors;
    };

    let sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError({});

        let form = formRef.current;
        let email = form.email.value.trim();
        let message = form.message.value.trim();

        let errors = validateForm(email, message);

        if (Object.keys(errors).length > 0) {
            setError(errors);
            setLoading(false);

            return;
        }

        await emailjs.sendForm('service_bx2imh9', 'template_qtj543b', formRef.current, 'mcrKYJtLl9odWjGFq');

        setSent(true);
        setLoading(false);
        formRef.current.reset();
    };

    return (
        <>
            <form
                ref={formRef}
                onSubmit={sendEmail}
                className={`w-full lg:w-1/2 flex flex-col bg-stone-200 dark:bg-stone-900 dark:bg-opacity-30 shadow-md bg-opacity-30 p-4 md:p-6 rounded-md duration-300 transition`}
            >

                <InputRow
                    id="name"
                    type="text"
                    name="name"
                    label="Name"
                    error={error}
                />
                <InputRow
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    error={error}
                />
                <InputRow
                    id="message"
                    type="text"
                    name="message"
                    msg={true}
                    label="Message"
                    error={error}
                />

                <div className='my-2 lg:my-4 w-full flex justify-end pr-2'>
                    <button
                        className={`relative py-2 px-12 border-2 flex gap-6 items-center font-bold text-lg tracking-wider rounded-b-full rounded-r-full rounded-bl-full group hover:border-opacity-80 transition duration-300 ${sent ? "border-green-400 bg-green-400" : "border-red_primary"}`}
                        onMouseEnter={() => setCursorType("button")}
                        onMouseLeave={() => setCursorType("")}
                    >
                        <span className={`flex-grow pr-6 ${sent ? "" : "group-hover:text-red_primary"} lg:transition duration-300 relative z-10`}>
                            {loading && 'Sending...'}
                            {sent && 'Sent message'}
                            {!loading && !sent && 'Send message'}
                        </span>
                        <span className={`absolute right-0 mr-0.5 ml-0.5 p-3 rounded-full group-hover:bg-opacity-80 transition duration-500 ${sent ? "border-green-600 bg-green-600" : "bg-red_primary"}`}>
                            <FaPaperPlane />
                        </span>
                    </button>
                </div>
            </form >
        </>
    );
}

export default Form;
