import React from 'react';
import ButtonComponent from "./ButtonComponent.jsx";
import { logos } from "../constants/data.js";

const About = () => {
    return (
        <div className="py-20 relative overflow-hidden">
            {/* Background gradient image */}
            <div className="absolute top-0 -z-10 w-full">
                <img src="/images/bg-gradiant2.svg" alt="gradiant-image" className="w-full" />
            </div>

            <div className="container px-4 md:px-0">
                <div className="flex justify-end md:mr-46">
                    <ButtonComponent text="About" />
                </div>

                <h1 className="text-center font-bold text-[40px] leading-[60px] md:text-[78px] md:leading-[126px] tracking-wide py-5">
                    I’ve been <span className="bg-black dark:bg-white text-white dark:text-black rounded-lg px-2">Developing<br /></span>
                    Websites since <span className="bg-black dark:bg-white text-white dark:text-black rounded-lg px-2">2013</span>
                </h1>

                <p className="text-center font-normal text-base md:text-lg leading-[30px] md:leading-[33px] py-10 dark:text-black">
                    We start every new client interaction with an in-depth discovery call where
                    we get <br className="hidden md:block" /> to know each other and recommend the best course of action.
                </p>

                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <h3 className="font-bold text-[22px] md:text-[26px] leading-[36px] md:leading-[41px]">
                            PREVIOUSLY<br /> WORKED ON
                        </h3>
                    </div>

                    <div className="col-span-12 md:col-span-6">
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
                            {logos.map((logo, index) => (
                                <div
                                    key={index}
                                    className={`col-span-3 md:col-span-4 text-center rounded-full px-4 py-2 font-semibold text-xs md:text-sm border border-black dark:border-black whitespace-nowrap transform ${logo.color} ${logo.rotate}`}
                                >
                                    {logo.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
