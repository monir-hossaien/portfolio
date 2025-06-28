
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import BlogPage from "./pages/blogPage.jsx";
import ProjectPage from "./pages/projectPage.jsx";
import ContactPage from "./pages/contactPage.jsx";
import ErrorPage from "./pages/errorPage.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={ErrorPage} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;