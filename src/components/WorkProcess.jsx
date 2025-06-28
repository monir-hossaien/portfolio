import React from 'react';
import ButtonComponent from "./ButtonComponent.jsx";
import { workProcess } from "../constants/data.js";
import {useLocation} from "react-router-dom";
import { motion } from "motion/react"

const WorkProcess = () => {
    const {pathname} = useLocation()

    return (
        <div className={`${pathname === "/about" && "my-20"} overflow-hidden bg-[#141414] dark:bg-white rounded-[52px] py-10 text-white dark:text-black`}>
            <div className="container px-4 md:px-0 space-y-4">
                <div>
                    <ButtonComponent text="Work Process" className="border-white dark:border-black text-white dark:text-black" />
                </div>

                <motion.h1
                    initial={{opacity: 0, x:-100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="font-bold text-[40px] md:text-[58px] md:leading-[86px]">
                    My Work Process
                </motion.h1>

                {/* Work process cards */}
                <div className="grid grid-cols-12 gap-6 py-5">
                    {workProcess.map((item, index) => {
                        const { title, description, rotate } = item;
                        const isStrategy = title === "Strategy";

                        return (
                            <motion.div
                                initial={{opacity: 0, y:100}}
                                whileInView={{opacity: 1, y:0}}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                key={index}
                                className={`hover:scale-105 transition-all duration-400 col-span-12 md:col-span-6 rounded-[30px] px-8 py-6 space-y-8 transform rotate-${rotate}
                                    ${isStrategy ? "bg-[#C5FF41] dark:bg-[#C5FF41]" : "bg-black dark:bg-gray-100"}`}
                            >
                                <div className="flex justify-between items-center">
                                    <p className={`px-5 py-1 rounded-full font-normal text-[20px] leading-[34px]
                                        ${isStrategy
                                        ? "bg-[#141414] dark:bg-white text-white dark:text-black"
                                        : "bg-[#C5FFEE] text-black"}`}>
                                        {title}
                                    </p>
                                </div>
                                <p className={`${isStrategy ? "text-black" : "text-white dark:text-black"} font-normal leading-[27px]`}>
                                    {description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
