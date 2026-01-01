import React from "react";

const Resume = () => {
    return (
        <section className="px-4 py-10 sm:px-6 lg:px-12 bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-100">
            <div className="max-w-4xl mx-auto space-y-10">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold">MD Monir Hossain</h1>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">Web Developer</p>
                    <div className="mt-4 text-sm sm:text-base space-y-1">
                        <p>📞 +880 1787960556</p>
                        <p>
                            📧 <a href="mailto:monirhdigital@gmail.com" className="text-blue-500">monirhdigital@gmail.com</a>
                        </p>
                        <p>
                            🔗 <a href="https://linkedin.com/in/monirhdigital" className="text-blue-500" target="_blank">LinkedIn</a> |
                            <a href="https://github.com/monir-hossaien" className="text-blue-500 ml-1" target="_blank">GitHub</a> |
                            <a href="https://raangalay.com" className="text-blue-500 ml-1" target="_blank">Website</a>
                        </p>
                        <p>📍 Dhaka, Bangladesh</p>
                    </div>
                </header>

                {/* Technical Skills */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Technical Skills</h2>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
                        <p><strong>Languages:</strong> JavaScript, TypeScript</p>
                        <p><strong>Frontend:</strong> React, Next.js, Zustand, Redux, RTK Query, Tailwind CSS, Shadcn UI, Bootstrap</p>
                        <p><strong>Backend:</strong> Node.js, Express.js, MongoDB, MySQL, Prisma, Mongoose</p>
                        <p><strong>Tools:</strong> Git, Postman, WebStorm, Cloudinary</p>
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Projects</h2>

                    {/* Raangalay */}
                    <div className="mb-8">
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-lg">Raangalay - Frontend Development (Next.js)</h3>
                            <a href="https://raangalay.com" target="_blank" className="text-blue-500 text-sm font-medium">Live Site</a>
                        </div>
                        <p className="text-sm italic text-gray-600 dark:text-gray-400">Next.js, TypeScript, Tailwind CSS, Shadcn UI, Zustand, Framer Motion</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                            <li>Built a high-performance frontend using Next.js, optimizing SEO and page load speeds[cite: 17].</li>
                            <li>Developed reusable UI components with Shadcn UI and Tailwind CSS for design consistency[cite: 18].</li>
                            <li>Managed complex app state using Zustand for efficient cart and user data handling[cite: 19].</li>
                            <li>Ensured mobile-first responsiveness and web accessibility (a11y) across all devices[cite: 20].</li>
                        </ul>
                    </div>

                    {/* Doctor Finder */}
                    <div>
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-lg">Doctor Finder Website (Care Hop)</h3>
                            <div className="space-x-2 text-sm">
                                <a href="https://care-hop-service.vercel.app/" target="_blank" className="text-blue-500 font-medium">Live</a>
                                <span>|</span>
                                <a href="#" target="_blank" className="text-blue-500 font-medium">Repo</a>
                            </div>
                        </div>
                        <p className="text-sm italic text-gray-600 dark:text-gray-400">React, Node.js, Express.js, MongoDB, Zustand, Tailwind CSS, Cloudinary</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                            <li>Built a doctor finder platform with search, filtering, and appointment booking functionality[cite: 23].</li>
                            <li>Implemented secure user authentication and role-based access control[cite: 23].</li>
                            <li>Developed doctor profiles and an admin panel for managing users and appointments[cite: 24].</li>
                            <li>Integrated image uploads via Cloudinary and designed a responsive interface[cite: 24].</li>
                        </ul>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Education</h2>
                    <div className="flex justify-between">
                        <p className="font-medium">National University</p>
                        <p className="text-sm">2017 - 2022</p>
                    </div>
                    <p className="text-sm">B.Sc. in Psychology; CGPA: 3.01/4.00 [cite: 5]</p>
                </section>

                {/* Achievements / Certifications */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Achievements</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Completed Mastering Next.js & Prisma Course from Ostad [cite: 26]</li>
                        <li>Completed Full Stack Web Development with JavaScript (MERN) Course from Ostad [cite: 27]</li>
                    </ul>
                </section>

                {/* Soft Skills */}
                <section>
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600">Soft Skills</h2>
                    <div className="grid sm:grid-cols-3 gap-2 text-sm">
                        <p>• Problem-Solving</p>
                        <p>• Critical Thinking</p>
                        <p>• Communication</p>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Resume;