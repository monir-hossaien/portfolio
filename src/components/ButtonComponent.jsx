import React from 'react';
import {FaArrowDown} from "react-icons/fa";
import { motion } from "motion/react"

const ButtonComponent = ({text, className}) => {
    return (
        <motion.div
            initial={{opacity: 0, y:-50}}
            whileInView={{opacity: 1, y:0}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex items-center">
            <FaArrowDown className={`${className} border border-black dark:border-white rounded-full p-1 text-3xl`} />
            <button
                className={`${className} font-normal leading-[18px] border rounded-full px-4 py-1.5 flex justify-center items-center`}>
                {text}</button>
        </motion.div>
    );
};

export default ButtonComponent;