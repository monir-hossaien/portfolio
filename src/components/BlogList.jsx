import React from "react";
import { CardEffect } from "./ui/CardEffect.jsx";
import { blogs } from "../constants/data.js";
import ButtonComponent from "./ButtonComponent.jsx";
import { motion } from "motion/react";

const BlogList = () => {
    return (
        <section className="py-12 bg-white dark:bg-gray-900">
            <div className="container px-4 md:px-0">
                {/* Header */}
                <div className="mb-10">
                    <ButtonComponent
                        text="Recent Blogs"
                        className="border-black dark:border-white text-black dark:text-white"
                    />
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="font-bold text-black dark:text-white text-[40px] md:text-[58px] md:leading-[86px]"
                    >
                        All Recent Blogs
                    </motion.h1>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {blogs.map(({ id, title, shortDes, image, category, date }) => (
                        <CardEffect
                            key={id}
                            className="rounded-[22px] w-full sm:max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900"
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-[200px] object-cover rounded-xl"
                            />

                            {/* Category + Date */}
                            <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
                                <span className="uppercase font-medium tracking-wide">{category}</span>
                                <span>{date}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold mt-2 text-black dark:text-white">
                                {title}
                            </h3>

                            {/* Short Description */}
                            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 line-clamp-3">
                                {shortDes}
                            </p>

                            {/* Read More Button (optional) */}
                            <button className="mt-4 px-4 py-1 rounded-full text-sm font-medium bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80">
                                Read More
                            </button>
                        </CardEffect>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogList;
