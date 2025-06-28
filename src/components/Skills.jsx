import React from 'react';
import ButtonComponent from "./ButtonComponent.jsx";
import { skills } from "../constants/data.js";
import {MovingCard} from "./ui/MovingCard.jsx";
import { motion } from "motion/react"
import {useLocation} from "react-router-dom";

const Skills = () => {
    const {pathname} = useLocation()


    return (
        <div className={`${pathname === "/about" ? "mb-20" : ""} overflow-hidden bg-black dark:bg-white rounded-[52px] py-20 text-white dark:text-black`}>
            <div className="container px-4 md:px-0">
                <ButtonComponent text="Why Choose me" className="border-white dark:border-black text-white dark:text-black" />

                <div className="md:flex justify-between items-center gap-6 py-3">
                    {/* Title */}
                    <div>
                        <motion.h1
                            initial={{opacity: 0, x:-100}}
                            whileInView={{opacity: 1, x:0}}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="font-bold text-4xl md:text-[58px] leading-tight md:leading-[86px]">
                            My Extensive <br /> List of Skills
                        </motion.h1>
                    </div>

                    {/* Description */}
                    <div className="mt-4 md:mt-0">
                        <motion.p
                            initial={{opacity: 0, x:100}}
                            whileInView={{opacity: 1, x:0}}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="font-normal text-lg text-gray-300 dark:text-gray-700">
                            Building the <strong>world's</strong> best marketing websites for over a decade.
                            <br />
                            Your trusted partner for strategy, design, and dev.
                        </motion.p>
                        <hr className="mt-4 border-gray-500 dark:border-gray-300" />
                    </div>
                </div>

                <MovingCard
                    items={skills}
                    direction={"right"}
                    speed={"normal"}
                />
            </div>
        </div>
    );
};

export default Skills;
