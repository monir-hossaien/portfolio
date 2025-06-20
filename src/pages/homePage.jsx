import React from 'react';

import MasterLayout from "../layout/masterLayout.jsx";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import About from "../components/About.jsx";
import WorkProcess from "../components/WorkProcess.jsx";
import Contact from "../components/Contact.jsx";

const HomePage = () => {
    return (
        <MasterLayout>
            <Hero />
            <Skills />
            <About />
            <WorkProcess />
            <Contact />
        </MasterLayout>
    );
};

export default HomePage;