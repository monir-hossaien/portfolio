import MasterLayout from "../layout/masterLayout.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import WorkProcess from "../components/WorkProcess.jsx";

const AboutPage = () => {
    return (
        <MasterLayout>
            <About />
            <Skills />
            <WorkProcess />
        </MasterLayout>
    );
};

export default AboutPage;