import React from 'react';
import ButtonComponent from "./ButtonComponent.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import { workProcess } from "../constants/data.js";

const WorkProcess = () => {
    return (
        <div className="bg-[#141414] dark:bg-white rounded-[52px] py-10 text-white dark:text-black">
            <div className="container px-4 md:px-0 space-y-4">
                <div>
                    <ButtonComponent text="Work Process" className="border-white dark:border-black text-white dark:text-black" />
                </div>

                <h1 className="text-center font-bold text-[40px] md:text-[58px] md:leading-[86px]">
                    My Work Process
                </h1>

                {/* Work process cards */}
                <div className="grid grid-cols-12 gap-6 py-5">
                    {workProcess.map((item, index) => {
                        const { title, description, rotate } = item;
                        const isStrategy = title === "Strategy";

                        return (
                            <div
                                key={index}
                                className={`col-span-12 md:col-span-6 rounded-[30px] px-8 py-6 space-y-8 transform rotate-${rotate}
                                    ${isStrategy ? "bg-[#C5FF41] dark:bg-[#C5FF41]" : "bg-black dark:bg-gray-100"}`}
                            >
                                <div className="flex justify-between items-center">
                                    <p className={`px-5 py-1 rounded-full font-normal text-[20px] leading-[34px]
                                        ${isStrategy
                                        ? "bg-[#141414] dark:bg-white text-white dark:text-black"
                                        : "bg-[#C5FFEE] text-black"}`}>
                                        {title}
                                    </p>
                                    <p className={`underline flex justify-center items-center gap-1
                                        ${isStrategy ? "text-black" : "text-white dark:text-black"}`}>
                                        <FaArrowRightLong /> Read More
                                    </p>
                                </div>
                                <p className={`${isStrategy ? "text-black" : "text-white dark:text-black"} font-normal leading-[27px]`}>
                                    {description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
