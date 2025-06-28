import React from 'react';
import ButtonComponent from "./ButtonComponent.jsx";
import { motion } from "motion/react"

const About = () => {
    return (
        <div className="py-10 relative overflow-hidden">
            {/* Background gradient image */}
            <div className="absolute top-0 -z-10 w-full">
                <img src="/images/bg-gradiant2.svg" alt="gradiant-image" className="w-full" />
            </div>

            <div className="container px-4 md:px-0">
                <div className="flex justify-end md:mr-46">
                    <ButtonComponent text="About" />
                </div>

                <motion.h1
                    initial={{opacity: 0, x:-100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-center font-bold text-[40px] leading-[60px] md:text-[78px] md:leading-[126px] tracking-wide py-5">
                    I’ve been <span className="bg-black dark:bg-white text-white dark:text-black rounded-lg px-2">Developing<br /></span>
                    Websites since <span className="bg-black dark:bg-white text-white dark:text-black rounded-lg px-2">2023</span>
                </motion.h1>

                <motion.p
                    initial={{opacity: 0, x:100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}

                    className="text-center font-normal text-base md:text-lg leading-[30px] md:leading-[33px] py-10 dark:text-black">
                    I start every new client interaction with an in-depth discovery call where
                    we get <br className="hidden md:block" /> to know each other and recommend the best course of action.
                </motion.p>

            </div>
        </div>
    );
};

export default About;
