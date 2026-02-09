import { FaLinkedinIn, FaGithub, FaMediumM} from "react-icons/fa";

const Social = () => {
    return (
        <div className="fixed right-4 bottom-24 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex flex-col gap-8 items-center z-50">

                {/* Icons Container with Gradient Border/Glow */}
                <div className="relative group p-[1px] rounded-full bg-gradient-to-b from-teal-400 to-lime-500 shadow-lg shadow-teal-500/20">
                    <div className="flex flex-col gap-4 p-2 rounded-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl">
                        <a href="https://www.linkedin.com/in/md-mhossain" target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300">
                            <FaLinkedinIn className="text-xl" />
                        </a>
                        <a href="https://github.com/md-mhossain" target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-300">
                            <FaGithub className="text-xl" />
                        </a>
                        <a href="https://medium.com/@monirhdigital" target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-green-500 hover:text-white transition-all duration-300">
                            <FaMediumM className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
    );
};

export default Social;