import React from 'react';
import ButtonComponent from "./ButtonComponent.jsx";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { skills } from "../constants/data.js";

const Skills = () => {
    return (
        <div className="bg-black dark:bg-white rounded-[52px] py-10 text-white dark:text-black">
            <div className="container px-4 md:px-0">
                <ButtonComponent text="Why Choose me" className="border-white dark:border-black text-white dark:text-black" />

                <div className="md:flex justify-between items-center gap-6 py-3">
                    {/* Title */}
                    <div>
                        <h1 className="font-bold text-4xl md:text-[58px] leading-tight md:leading-[86px]">
                            My Extensive <br /> List of Skills
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="mt-4 md:mt-0">
                        <p className="font-normal text-lg text-gray-300 dark:text-gray-700">
                            Building the <strong>world's</strong> best marketing websites for over a decade.
                            <br />
                            Your trusted partner for strategy, design, and dev.
                        </p>
                        <hr className="mt-4 border-gray-500 dark:border-gray-300" />
                    </div>
                </div>

                {/* Arrows */}
                <div className="flex justify-end gap-3 py-4">
                    <button className="border border-white dark:border-black text-white dark:text-black outline-0 p-2 rounded-full">
                        <FaArrowLeftLong />
                    </button>
                    <button className="border border-white dark:border-black text-white dark:text-black outline-0 p-2 rounded-full">
                        <FaArrowRightLong />
                    </button>
                </div>

                {/* Skill cards */}
                <div className="grid grid-cols-12 gap-6 py-5">
                    {skills.map((skill, index) => {
                        const { title, description } = skill;
                        return (
                            <div
                                key={index}
                                className={`col-span-12 sm:col-span-6 md:col-span-4 bg-[#FFFFFF14] dark:bg-[#0000000D] rounded-[30px] px-5 py-6 space-y-4 ${title === "Javascript" ? 'rotate-6' : ''}`}
                            >
                                <div>
                                    <img src="/images/react%20icon.svg" alt="icon-image" />
                                </div>
                                <h2 className="font-bold text-[26px] leading-[34px]">{title}</h2>
                                <p className="font-normal leading-[27px] text-gray-400 dark:text-gray-700">{description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
