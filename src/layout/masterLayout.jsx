import React from 'react';

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const MasterLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default MasterLayout;