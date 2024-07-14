import React from 'react';

const SentForm = ({ sent, setSent }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center ${sent ? 'z-10' : '-z-20'}`}>
            <div
                className={`absolute inset-0 bg-stone-900 opacity-0 transition-opacity duration-300 ${sent ? 'opacity-50' : ''}`}
                onClick={() => setSent(false)}
            ></div>

            <div className={`bg-red-primary text-white py-4 px-6 lg:px-12 rounded-lg shadow-lg relative duration-300 transition-opacity bg-red_primary ${sent ? 'opacity-100 delay-300' : 'opacity-0'}`}>
                <div className="absolute top-0 right-0 py-2 px-4 text-3xl cursor-pointer text-gray-200" onClick={() => setSent(false)}>
                    X
                </div>

                <h3 className='text-xl md:text-2xl lg:text-3xl text-center mt-4'>
                    <span className="font-bold text-xl md:text-3xl lg:text-4xl pr-1">&lt;</span>
                    Thank you for reaching out!
                    <span className="font-bold text-xl md:text-3xl lg:text-4xl pl-2">/&gt;</span>
                </h3>
            </div>
        </div>
    );
}

export default SentForm;
