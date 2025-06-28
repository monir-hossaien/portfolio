import React from 'react';
import ButtonComponent from "./ButtonComponent.jsx";
import ContactForm from "./ContactForm.jsx";
import { motion } from "motion/react"


const Contact = () => {
    return (
        <div className="py-20 relative overflow-hidden dark:bg-gray-900 text-black dark:text-white">
            <div className="absolute bottom-0 -z-10 w-full">
                <img src="/images/bg-gradiant3.svg" alt="gradiant-image" className="w-full" />
            </div>

            <div className="container px-4 md:px-0">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-7">
                        <div className="space-y-5">
                            <ButtonComponent text="Contact" className="dark:border-white" />
                            <motion.div
                                initial={{opacity: 0, x:-100}}
                                whileInView={{opacity: 1, x:0}}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <h1 className="font-bold text-[48px] md:text-[78px] leading-[64px] md:leading-[113px]">
                                    Interested in <br/>
                                    <span
                                        className="bg-black dark:bg-white text-white dark:text-black rounded-lg px-2">work</span> together?
                                </h1>
                                <p className="font-normal text-lg leading-[33px] mt-5">
                                    I start every new client interaction with an in-depth discovery<br/>
                                    call where we get to know each other
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
