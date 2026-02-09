import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import BlogPage from "./pages/blogPage.jsx";
import ProjectPage from "./pages/projectPage.jsx";
import ContactPage from "./pages/contactPage.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import ScrollToTop from "react-scroll-to-top";
import { ScrollToTopNavigation } from "./helpers/helper.js";
import { useEffect, useState } from "react";
import Loader from "./components/Loader.jsx";
import Social from "./components/Social.jsx";

const App = () => {
  // initial loading when open website
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
      return () => clearInterval(interval);
    }, 800);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Social />
      {/* Scroll to top on route change */}
      <ScrollToTopNavigation />
      {/* Floating Scroll-to-Top button */}
      <ScrollToTop
        smooth
        style={{ background: "oklch(84.1% 0.238 128.85)", zIndex: 1000 }}
        className="flex justify-center items-center"
        height="20"
        color={"#164193"}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
