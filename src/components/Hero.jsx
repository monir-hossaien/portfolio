
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import Button from "./Button.jsx";
import {TextEffect} from "./ui/TextEffect.jsx";
import { motion } from "motion/react"

const Hero = () => {

    const word = "Building the world's best marketing websites for over a decade.Your trusted partner for strategy, design, and dev."
    return (
        <div className="py-14 md:py-18 dark:bg-gray-900 dark:text-white transition-colors duration-300">
            {/* Background gradient image */}
            <div className="absolute top-12 md:top-0 -z-10 w-full">
                <img src="/images/bg-gradiant1.svg" alt="gradiant-image" className="w-full" />
            </div>

            {/* Main Content */}
            <div className="container z-10 relative px-4 md:px-0">
                <motion.h1
                    initial={{opacity: 0, x:-100}}
                    animate={{opacity: 1, x:0}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="tracking-wide text-3xl md:text-6xl lg:text-[78px] font-semibold md:font-bold leading-12 md:leading-28">
                    <span
                    >Trusted <span className="bg-black dark:bg-white text-white dark:text-black rounded px-2">Partner</span> for <br className="hidden sm:block" />
                    </span>
                    Your Website <span className="bg-black dark:bg-white text-white dark:text-black rounded px-2">Develop.</span>
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-12 py-10 gap-12">
                    {/* Sidebar */}
                    <div className="md:col-span-3 flex flex-row md:flex-col gap-3 md:items-start items-center justify-center md:justify-start">
                        {/* Rotated text */}
                        <div className="relative hidden md:block">
                            <p className="absolute left-0 top-27 -rotate-90 text-sm text-black dark:text-white font-medium tracking-wide">@monir</p>
                        </div>

                        {/* Icons */}
                        <div className="flex md:flex-col gap-3">
                            <FaTwitter className="text-black dark:text-white hover:text-blue-500 transition-all duration-300" />
                            <FaInstagram className="text-black dark:text-white hover:text-pink-500 transition-all duration-300" />
                            <FaFacebook className="text-black dark:text-white hover:text-blue-700 transition-all duration-300" />

                            {/* Vertical line */}
                            <div className="hidden md:block w-px h-10 bg-black dark:bg-white mt-2" />
                        </div>
                    </div>

                    {/* Main Text */}
                    <div className="md:col-span-9 space-y-6 text-center md:text-left">
                        <div className="max-w-xl">
                            <TextEffect
                                words={word}
                                className="text-sm md:text-lg"
                            />
                        </div>
                        <motion.div
                            initial={{opacity: 0, y:80}}
                            animate={{opacity: 1, y:0}}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex justify-center md:justify-start">
                            <Button
                                className="group py-2 border border-black dark:border-white dark:text-white"
                                icon={<FaPhone className="duration-800 group-hover:translate-x-28 z-10 group-hover:bg-black group-hover:text-white border border-black dark:border-white rounded-full p-1 text-2xl" />}
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
