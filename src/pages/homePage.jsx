import React from 'react';

import MasterLayout from "../layout/masterLayout.jsx";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import About from "../components/About.jsx";
import WorkProcess from "../components/WorkProcess.jsx";
import Contact from "../components/Contact.jsx";
import ProjectList from "../components/ProjectList.jsx";
import BlogList from "../components/BlogList.jsx";

const HomePage = () => {
    return (
        <MasterLayout>
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