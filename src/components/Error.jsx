import React from 'react';
import {Link} from "react-router-dom";
import {IoIosArrowRoundBack} from "react-icons/io";

const Error = () => {
    return (
        <>
            <section className="bg-white min-h-screen flex items-center">
                <div className="container mx-auto flex justify-center">
                    <div className="text-center">
                        <img width={300} src="/images/error.jpg" alt="error image"/>
                        <h1 className="mt-3 text-2xl text-gray-800">
                            This page doesn’t exist
                        </h1>
                        <p className="mt-2 text-gray-500">
                            Please check your URL or return to home.
                        </p>
                        <div className="flex justify-center mt-4 gap-2">
                            <button className="cursor-pointer border border-gray-400 flex items-center gap-2 px-4 py-2"
                                    onClick={()=>window.history.back()}>
                                <IoIosArrowRoundBack className="text-2xl" />
                                <span>Go back</span>
                            </button>
                            <Link to="/" class="bg-gray-800 text-white px-4 py-2">
                                Take me home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Error;