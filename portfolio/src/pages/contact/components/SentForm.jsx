import React from 'react';

const SentForm = ({ sent, setSent }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center p-4 transition-all duration-300 ${sent ? 'z-10 opacity-100' : '-z-20 opacity-0'}`}>
            <div
                className={`absolute inset-0 bg-stone-100 dark:bg-stone-900 transition-opacity duration-300 ${sent ? 'opacity-50' : 'opacity-0'}`}
                onClick={() => setSent(false)}
            ></div>

            <div className={`bg-red-primary bg-stone-200 dark:bg-stone-800 w-full max-w-xl py-8 px-4 lg:px-16 rounded-lg shadow-lg transform transition-all duration-300 ${sent ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'}`}>
                <button 
                    className="absolute top-2 right-4 text-3xl font-bold text-red_primary hover:bg-opacity-90 transition-colors duration-200"
                    onClick={() => setSent(false)}
                >
                    &times;
                </button>

                <h3 className='text-center text-lg md:text-xl lg:text-2xl mt-6'>
                    <span className="font-semibold text-2xl md:text-3xl lg:text-4xl pr-1">&lt;</span>
                    Thank you for reaching out!
                    <span className="font-semibold text-2xl md:text-3xl lg:text-4xl pl-2">/&gt;</span>
                </h3>
            </div>
        </div>
    );
}

export default SentForm;
