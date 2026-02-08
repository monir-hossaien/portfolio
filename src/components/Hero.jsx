import { FaLinkedinIn, FaGithub, FaMediumM, FaPhone } from "react-icons/fa";
import Button from "./Button.jsx";
import {TextEffect} from "./ui/TextEffect.jsx";
import { motion } from "motion/react"

const Hero = () => {

    const word = "Building the world's best marketing websites for over a decade. Your trusted partner for strategy, design, and dev."

    return (
        <div className="py-14 md:py-18 dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen relative overflow-hidden">
            {/* Background gradient image */}
            <div className="absolute top-12 md:top-0 -z-10 w-full">
                <img src="/images/bg-gradiant1.svg" alt="gradiant-image" className="w-full opacity-50 dark:opacity-30" />
            </div>

            {/* Sidebar - FIXED with Gradient Background Highlights */}
            <div className="fixed right-4 bottom-24 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex flex-col gap-8 items-center z-50">

                {/* Icons Container with Gradient Border/Glow */}
                <div className="relative group p-[1px] rounded-full bg-gradient-to-b from-teal-400 to-lime-500 shadow-lg shadow-teal-500/20">
                    <div className="flex flex-col gap-4 p-2 rounded-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl">
                        <a href="https://www.linkedin.com/in/md-mhossain" target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300">
                            <FaLinkedinIn className="text-xl" />
                        </a>
                        <a href="https://github.com/md-mhossain" target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-300">
                            <FaGithub className="text-xl" />
                        </a>
                        <a href="https://medium.com/@monirhdigital" target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-green-500 hover:text-white transition-all duration-300">
                            <FaMediumM className="text-xl" />
                        </a>
                    </div>
                </div>

                {/* Vertical Line & Gradient @monir text */}
                <div className="flex flex-col items-center gap-16">
                    {/* The Line - Gradient from theme colors to transparent */}
                    <div className="w-[2px] h-20 bg-gradient-to-b from-teal-400 via-lime-500 to-transparent" />

                    {/* @monir with Gradient Text Effect */}
                    <p className="rotate-90 text-[11px] uppercase tracking-[0.4em] font-extrabold
                                  bg-gradient-to-r from-teal-400 to-lime-600 bg-clip-text text-transparent
                                  drop-shadow-sm">
                        @monir
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container z-10 relative px-6 md:px-0 md:pl-28">
                <motion.h1
                    initial={{opacity: 0, x:-50}}
                    animate={{opacity: 1, x:0}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="tracking-wide text-4xl md:text-6xl lg:text-[78px] font-semibold md:font-bold leading-tight md:leading-[1.1]">
                    <span>Trusted <span className="bg-black dark:bg-white text-white dark:text-black rounded px-2">Partner</span> for <br className="hidden sm:block" />
                    </span>
                    Your Website <span className="bg-gradient-to-r from-teal-400 to-lime-500 text-white dark:text-black rounded px-3">Develop.</span>
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-12 py-10">
                    <div className="md:col-span-9 space-y-6 text-left">
                        <div className="max-w-xl">
                            <TextEffect
                                words={word}
                                className="text-base md:text-lg opacity-80"
                            />
                        </div>
                        <motion.div
                            initial={{opacity: 0, y:30}}
                            animate={{opacity: 1, y:0}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex justify-start">
                            <Button
                                className="group py-3 px-8 border-2 border-teal-500/50 dark:border-white/20 rounded-full transition-all hover:bg-gradient-to-r hover:from-teal-400 hover:to-lime-500 hover:border-transparent hover:text-black font-bold"
                                icon={<FaPhone className="group-hover:rotate-[360deg] duration-500" />}
                                text="Show my work"
                                path={"/projects"}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;