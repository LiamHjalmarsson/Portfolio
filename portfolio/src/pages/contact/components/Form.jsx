import React, { useContext, useRef, useState } from 'react';
import InputRow from './InputRow';
import { FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { MouseContext } from '../../../context/mouseContext';

const Form = () => {
    let { cursorChangeHandler } = useContext(MouseContext);

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
            <form ref={formRef} onSubmit={sendEmail} className={`w-full lg:w-1/2 flex flex-col bg-stone-900 bg-opacity-70 p-2 sm:p-4 md:p-6 rounded-md duration-300 transition`}>
                <InputRow
                    input={{
                        id: "name",
                        name: "name",
                        type: "text",
                    }}
                    error={error}
                />
                <InputRow
                    input={{
                        id: "email",
                        name: "email",
                        type: "email",
                    }}
                    error={error}
                />
                <InputRow
                    input={{
                        id: "message",
                        name: "message",
                        type: "text",
                    }}
                    msg={true}
                    error={error}
                />

                <div className='my-2 lg:my-4 w-full flex justify-end'>
                    <button className='relative py-2 px-12 border-2 border-red_primary flex gap-6 items-center font-bold text-lg tracking-wider rounded-b-full rounded-r-full rounded-bl-full group hover:border-opacity-80 transition duration-300' onMouseEnter={() => cursorChangeHandler("button")} onMouseLeave={() => cursorChangeHandler("")}>
                        <p className='flex-grow pr-6 group-hover:text-red_primary transition duration-300'>
                            {loading ? 'Sending...' : 'Send message'}
                        </p>
                        <div className={` absolute right-0 bg-red_primary mr-0.5 p-3 rounded-full group-hover:bg-opacity-80 transition duration-500 `}>
                            <FaPaperPlane className='transform' />
                        </div>
                    </button>
                </div>
            </form >

            <div className={`fixed inset-0 flex items-center justify-center ${sent ? "z-20" : "-z-20"}`}>
                <div className={`bg-stone-900 absolute inset-0 transition duration-300 ${sent ? "opacity-50" : "opacity-0"}`} onClick={() => setSent(false)}></div>
                <div className={`bg-red_primary text-white py-4 px-12 rounded flex items-center justify-center relative duration-300 transition delay-300 ${sent ? "opacity-100" : "opacity-0"}`}>
                    <div className="absolute top-0 right-0 py-2 px-4 text-3xl" onClick={() => setSent(false)}>
                        X
                    </div>
                    <h3 className='text-3xl'>
                        <span className="font-bold text-4xl pr-1">&lt;</span>
                        Thank you for reaching out!
                        <span className="font-bold text-4xl pl-2">/&gt;</span>
                    </h3>
                </div>
            </div>
        </>
    );
}

export default Form;