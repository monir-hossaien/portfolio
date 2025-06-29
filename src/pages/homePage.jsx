import React from 'react';

import MasterLayout from "../layout/masterLayout.jsx";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import About from "../components/About.jsx";
import WorkProcess from "../components/WorkProcess.jsx";
import Contact from "../components/Contact.jsx";
import ProjectList from "../components/ProjectList.jsx";
import BlogList from "../components/BlogList.jsx";
import {Helmet} from "react-helmet";

const HomePage = () => {
    return (
        <MasterLayout>
            <Helmet>
                <title>Home | Monir Hossain</title>
                <meta
                    name="description"
                    content="This is the home page of Monir Hossain's portfolio, where you can explore MERN stack projects and development skills."
                />
                <meta
                    name="keywords"
                    content="Monir Hossain, portfolio, full stack developer, MERN, React, Node.js"
                />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <Hero />
            <Skills />
            <ProjectList />
            <WorkProcess />
            <About />
            <BlogList />
            <Contact />
        </MasterLayout>
    );
};

export default HomePage;