import React from "react";

const Resume = () => {
    return (
        <section className="px-4 py-10 sm:px-6 lg:px-12 bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-100">
            <div className="max-w-4xl mx-auto space-y-10">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold">Monir Hossain</h1>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">Full Stack Developer</p>
                    <div className="mt-4 text-sm sm:text-base space-y-1">
                        <p>📞 +8801787960556</p>
                        <p>
                            📧 <a href="mailto:monirhdigital@gmail.com" className="text-blue-500">monirhdigital@gmail.com</a>
                        </p>
                        <p>
                            🔗 <a href="https://linkedin.com/in/monirhdigital" className="text-blue-500" target="_blank">LinkedIn</a> |
                            <a href="https://monir-hossain.netlify.app" className="text-blue-500 ml-1" target="_blank">Portfolio</a>
                        </p>
                        <p>📍 Tongi, Gazipur, Bangladesh</p>
                    </div>
                </header>

                {/* Summary */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Professional Summary</h2>
                    <p>
                        Motivated Junior Full Stack Developer experienced in HTML, CSS, JavaScript, React.js, and the MERN stack.
                        Skilled in building responsive, user-friendly apps. Quick learner and passionate about clean code and modern solutions.
                    </p>
                </section>

                {/* Experience */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Experience</h2>
                    <p className="font-medium">Full Stack Developer (MERN) — Self-Learning (Mar 2023 – Present)</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Developed and maintained MERN stack applications</li>
                        <li>Collaborated on UI/UX and features with mock clients</li>
                        <li>Optimized performance, scalability, and responsiveness</li>
                        <li>Built features like auth, APIs, dashboards</li>
                    </ul>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Technical Skills</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
                        <p><strong>Front-end:</strong> HTML, CSS, JavaScript, React, Zustand, Redux, Next.js, Tailwind, Bootstrap</p>
                        <p><strong>Back-end:</strong> Node.js, Express.js, MongoDB, MySQL (basic), JWT</p>
                        <p><strong>Tools:</strong> Git, GitHub, NPM, VS Code, WebStorm</p>
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Projects</h2>

                    <div className="mb-5">
                        <h3 className="font-medium">🛍 E-commerce Website — <a href="https://monir-ecommerce-store.netlify.app" target="_blank" className="text-blue-500">Live</a></h3>
                        <p><strong>Stack:</strong> React, Node.js, Express.js, MongoDB, Zustand, Bootstrap, Cloudinary</p>
                        <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                            <li>JWT auth, cart & checkout, image uploads (Multer + Cloudinary)</li>
                            <li>RESTful API with route protection</li>
                            <li>State management using Zustand</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium">🏥 Doctor Finder (CareHop) — <a href="https://care-hop-service.vercel.app/" target="_blank" className="text-blue-500">Live</a></h3>
                        <p><strong>Stack:</strong> React, Node.js, Express.js, MongoDB, Zustand, Tailwind, Cloudinary</p>
                        <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                            <li>Search/filter doctors, book appointments</li>
                            <li>Admin panel, doctor profiles, JWT auth</li>
                            <li>Image upload, state with Zustand</li>
                        </ul>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Education</h2>
                    <p>BSc in Psychology — National University, Bangladesh (2021)</p>
                </section>

                {/* Certifications */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Certifications</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Full Stack Web Development (MERN) — Ostad, 2024</li>
                        <li>Mastering Next.js & Prisma — Ostad, 2023</li>
                    </ul>
                </section>

                {/* Soft Skills */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Soft Skills</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                        <li>Problem Solving, Critical Thinking, Creative Thinking</li>
                        <li>Communication, Teamwork, Time Management</li>
                        <li>Attention to Detail, Adaptability, Persistence</li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Resume;
