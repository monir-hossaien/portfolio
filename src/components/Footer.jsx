import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-black dark:bg-gray-900 rounded-[52px] py-10 text-white dark:text-white">
            <div className="container px-4 md:px-0">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <h1 className="uppercase text-[#C5FF41] font-extrabold text-[34px]">devlop.me</h1>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <h1 className="font-bold text-[64px] leading-[64px]">As You Can</h1>
                        <div className="grid grid-cols-12 gap-6 py-12">
                            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                <h5 className="font-bold leading-[24px] py-4 text-gray-400 dark:text-gray-300">Say hello</h5>
                                <p>HELLO@DEVLOP.ME.COM <br /> MAHBUBUL@ME.COM</p>
                            </div>

                            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                <h5 className="font-bold leading-[24px] py-4 text-gray-400 dark:text-gray-300">Menu</h5>
                                <ul className="flex flex-col">
                                    <Link to="/">HOME</Link>
                                    <Link to="/">ABOUT</Link>
                                    <Link to="/">PORTFOLIO</Link>
                                    <Link to="/">BLOG</Link>
                                </ul>
                            </div>

                            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                <h5 className="font-bold leading-[24px] py-4 text-gray-400 dark:text-gray-300">Social</h5>
                                <ul className="flex flex-col">
                                    <Link to="/">TWITTER</Link>
                                    <Link to="/">INSTAGRAM</Link>
                                    <Link to="/">FACEBOOK</Link>
                                    <Link to="/">BEHANCE</Link>
                                    <Link to="/">DRIBBBLE</Link>
                                </ul>
                            </div>

                            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                <h5 className="font-bold leading-[24px] pb-5 text-gray-400 dark:text-gray-300">Call</h5>
                                <p>+784549 4981 00 <br /> +8845 0100 211</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-6">
                                <h3 className="font-extrabold text-[24px] leading-[34px]">BESNIK</h3>
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <p className="text-gray-400 dark:text-gray-300">© devlop.me 2022</p>
                                    <div className="flex text-gray-400 dark:text-gray-300">
                                        <Link to="/">PRIVACY</Link> <span className="px-2">-</span>
                                        <Link to="/">TERMS</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
