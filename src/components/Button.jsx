import React from 'react';
import {Link} from "react-router-dom";

const Button = ({ icon, text, className, path}) => {
    return (
        <Link to={path}
            className={`${className} font-semibold leading-[18px] rounded-full pr-2 py-2 flex justify-center items-center gap-1`}
        >
            <span>{icon}</span>
            <span>{text}</span>
        </Link>
    );
};

export default Button;
