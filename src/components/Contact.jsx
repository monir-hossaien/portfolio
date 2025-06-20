import React from 'react';
import ButtonComponent from "./ButtonComponent.jsx";
import Button from "./Button.jsx";
import { FaPhone } from "react-icons/fa";
import ContactForm from "./ContactForm.jsx";

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
                            <h1 className="font-bold text-[48px] md:text-[78px] leading-[64px] md:leading-[113px]">
                                Interested in <br />
                                <span className="bg-black dark:bg-white text-white dark:text-black rounded-lg px-2">work</span> together?
                            </h1>
                            <p className="font-normal text-lg leading-[33px]">
                                We start every new client interaction with an in-depth discovery<br />
                                call where we get to know each other
                            </p>
                            <Button
                                className="py-2 text-lg border border-black dark:border-white dark:text-white"
                                icon={
                                    <FaPhone className="border border-black dark:border-white rounded-full p-1 text-2xl" />
                                }
                                text="Schedule a Call"
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
