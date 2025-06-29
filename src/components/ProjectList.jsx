import {projects} from "../constants/data.js";
import {FaExternalLinkSquareAlt, FaGithub} from "react-icons/fa";
import {useLocation} from "react-router-dom";
import ButtonComponent from "./ButtonComponent.jsx";
import React from "react";
import {motion} from "motion/react";




const ProjectList = () => {

    const {pathname} = useLocation();
    return (
        <div className={`${pathname === "/projects" ? "py-12" : "py-18"} dark:bg-gray-900`}>
            <div className="container">
                <div className="mb-10">
                    <ButtonComponent text="My Projects"
                                     className="border-black dark:border-white text-black dark:text-white"/>
                    <motion.h1
                        initial={{opacity: 0, x: -100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6, ease: "easeInOut"}}
                        className="font-bold text-black dark:text-white text-[40px] md:text-[58px] md:leading-[86px]">
                        My Built Projects
                    </motion.h1>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            initial={{opacity: 0, y:100}}
                            whileInView={{opacity: 1, y:0}}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            key={project.id} className="bg-white dark:bg-black shadow rounded-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="py-5 px-8">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded dark:text-neutral-200">
                                        {tag}
                                    </span>
                                    ))}
                                </div>
                                <div className="mt-8 flex justify-between items-center">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                       className="text-3xl text-black dark:text-white hover:text-pink-500 transition-all duration-300">
                                        <FaGithub />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                                       className="text-3xl text-black dark:text-white hover:text-blue-500 transition-all duration-300">
                                        <FaExternalLinkSquareAlt />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
