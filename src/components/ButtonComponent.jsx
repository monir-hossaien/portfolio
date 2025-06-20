import React from 'react';
import {FaArrowDown} from "react-icons/fa";

const ButtonComponent = ({text, className}) => {
    return (
        <div className="flex items-center">
            <FaArrowDown className={`${className} border border-black rounded-full p-1 text-3xl`} />
            <button
                className={`${className} font-normal leading-[18px] border rounded-full px-4 py-1.5 flex justify-center items-center`}>
                {text}</button>
        </div>
    );
};

export default ButtonComponent;