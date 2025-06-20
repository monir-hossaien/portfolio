import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button.jsx';
import { FaArrowRightLong } from 'react-icons/fa6';
import { navItems } from '../constants/data.js';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import DarkModeToggle from "./DarkMode.jsx";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="container px-4 md:px-0 py-3 bg-[#00000003] dark:bg-black rounded-br-[30px] rounded-bl-[30px] transition-colors duration-300 relative z-50">
            <div className="grid grid-cols-12 items-center">
                {/* Logo */}
                <div className="col-span-6">
                    <h1 className="uppercase font-extrabold text-[34px] dark:text-white">devlop.me</h1>
                </div>

                {/* Mobile Menu Icon */}
                <div className="block col-span-6 md:hidden text-right space-x-8">
                    <div className="inline col-span-1 md:hidden text-right text-3xl">
                        <DarkModeToggle/>
                    </div>
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-black dark:text-white text-3xl"
                    >
                        <MdMenu/>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:col-span-6 md:block">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        {/* Menu */}
                        <div className="col-span-8">
                            <ul className="flex items-center gap-8 font-normal">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.path}
                                            className="hover:text-primary text-black dark:text-white transition-colors duration-200"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-2xl col-span-1 flex justify-center items-center w-full">
                            <DarkModeToggle/>
                        </div>

                        {/* Button */}
                        <div className="col-span-3 flex justify-end">
                            <Button
                                className="border border-black dark:border-white dark:text-white"
                                icon={
                                    <FaArrowRightLong
                                        className="border border-black dark:border-white rounded-full p-1 text-xl"/>
                                }
                                text="Start Project"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div
                    className="fixed top-0 inset-0 bg-white dark:bg-gray-900 flex flex-col text-xl z-40 transition-all duration-300">
                    <div className="dark:text-white absolute top-0 right-0 p-5 text-3xl">
                        <button onClick={() => setOpen(false)}>
                            <IoMdClose/>
                        </button>
                    </div>
                    <ul className="py-18">
                        {navItems.map((item, index) => (
                            <li key={index} className="my-5 text-center">
                                <Link
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className="hover:text-primary text-black dark:text-white transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
