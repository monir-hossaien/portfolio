import React, { useEffect, useState } from 'react';
import {MdDarkMode, MdLightMode} from "react-icons/md";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            root.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="dark:text-white cursor-pointer"
        >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
    );
};

export default DarkModeToggle;
