import React from 'react';
import {CardEffect} from "./ui/CardEffect.jsx";
import {blogs} from "../constants/data.js";
import ButtonComponent from "./ButtonComponent.jsx";
import {motion} from "motion/react";

const BlogList = () => {

    // const {pathname} = useLocation();
    return (
        <div className="py-12 bg-white dark:bg-gray-900">
            <div className="container">
                <div className="mb-10">
                    <ButtonComponent text="Recent Blogs"
                                     className="border-black dark:border-white text-black dark:text-white"/>
                    <motion.h1
                        initial={{opacity: 0, x: -100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6, ease: "easeInOut"}}
                        className="font-bold text-black dark:text-white text-[40px] md:text-[58px] md:leading-[86px]">
                        All Recent Blogs
                    </motion.h1>
                </div>
                <CardEffect items={blogs}/>
            </div>
        </div>
    );
};

export default BlogList;