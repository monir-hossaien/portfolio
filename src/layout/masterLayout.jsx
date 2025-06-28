import React from 'react';

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const MasterLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MasterLayout;