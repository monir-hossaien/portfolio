import React from 'react';
import {Link, NavLink} from "react-router-dom";
import { motion } from "motion/react"
import {navItems, socials} from "../constants/data.js";
import {ToolTip} from "./ui/ToolTip.jsx";


const Footer = () => {

    const date = new Date()
    return (
        <div className="bg-black dark:bg-gray-900 py-10 text-white dark:text-white overflow-hidden">
            <div className="container px-4 md:px-0">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <motion.h1
                            initial={{opacity: 0, y:-50}}
                            whileInView={{opacity: 1, y:0}}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="uppercase text-[#C5FF41] font-extrabold text-[34px]">dev.Monir
                        </motion.h1>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <motion.h1
                            initial={{opacity: 0, x:100}}
                            whileInView={{opacity: 1, x:0}}
                            transition={{ duration: 0.6, ease: "easeInOut" }}

                            className="font-bold text-[64px] leading-[64px]">As You Can
                        </motion.h1>
                        <div className="grid grid-cols-12 gap-6 py-12">
                            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                <h5 className="font-bold leading-[24px] py-4 text-gray-400 dark:text-gray-300">Say
                                    hello</h5>
                                <a
                                    href="mailto:monirhdigital@gmail.com"
                                    target="_blank" rel="noopener noreferrer"
                                    className="hover:underline text-white dark:text-white"
                                >
                                    monirhdigital@gmail.com
                                </a>

                            </div>

                            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                <h5 className="font-bold leading-[24px] py-4 text-gray-400 dark:text-gray-300">Menu</h5>
                                <ul className="flex flex-col gap-2">
                                    {navItems.map((item, index) => (
                                        <li key={index}>
                                            <NavLink
                                                to={item.path}
                                                className={({isActive}) =>
                                                    `
                                                uppercase hover:text-primary dark:text-white transition-colors duration-200 relative group
                                                ${isActive && "font-semibold"}
                                                `
                                                }
                                            >
                                                {item.label}
                                                <span className="absolute left-0 -bottom-1.5 bg-gradient-to-r from-teal-300 to-lime-500 w-0 group-hover:w-[80%] transition-all duration-300 ease-in-out  h-1 rounded-md"></span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                <h5 className="font-bold leading-[24px] py-4 text-gray-400 dark:text-gray-300">Social</h5>
                                <ToolTip items={socials}  />
                            </div>

                            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                <h5 className="font-bold leading-[24px] pb-5 text-gray-400 dark:text-gray-300">Call</h5>
                                <p>
                                    +880 1787 960 556 <br/> +880 1450 102 111
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12">
                        <motion.div
                            initial={{opacity: 0, y:50}}
                            whileInView={{opacity: 1, y:0}}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-6">
                                <h3 className="font-extrabold text-[24px] leading-[34px] uppercase">Monir</h3>
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <p className="text-gray-400 dark:text-gray-300">© dev.monir {date.getFullYear()}</p>
                                    <div className="flex text-gray-400 dark:text-gray-300">
                                        <Link to="/">PRIVACY</Link> <span className="px-2">-</span>
                                        <Link to="/">TERMS</Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
