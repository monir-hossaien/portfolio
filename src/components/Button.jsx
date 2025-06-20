import React from 'react';

const Button = ({ icon, text, className }) => {
    return (
        <button
            className={`${className} font-normal leading-[18px] rounded-full border border-black pr-2 py-2 flex justify-center items-center gap-1 text-black`}
        >
            <span>{icon}</span>
            <span>{text}</span>
        </button>
    );
};

export default Button;
