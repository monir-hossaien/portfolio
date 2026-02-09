import Button from "./Button.jsx";
import { IoIosSend, IoMdMail } from "react-icons/io";
import { FaLinkedinIn, FaGithub, FaMediumM } from "react-icons/fa";

import { motion } from "motion/react";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-black dark:bg-white rounded-[30px]"
    >
      <form className="px-6 py-8 w-full flex flex-col gap-5">
        <div>
          <input
            className="border-b border-b-gray-500 dark:border-b-gray-300 text-white dark:text-black bg-transparent px-1 py-2 w-full focus:outline-0"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <input
            className="border-b border-b-gray-500 dark:border-b-gray-300 text-white dark:text-black bg-transparent px-1 py-2 w-full focus:outline-0"
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            required
          />
        </div>

        <div>
          <textarea
            className="border-b border-b-gray-500 dark:border-b-gray-300 text-white dark:text-black bg-transparent px-1 py-2 w-full focus:outline-0"
            name="message"
            id="message"
            placeholder="Describe your project"
            required
          />
        </div>

        <div className="flex flex-wrap items-center text-white dark:text-black py-4 gap-2">
          <Button
            className="group border border-white dark:border-black outline-0 pr-5 gap-2 text-lg leading-[18px]"
            icon={
              <IoIosSend className="duration-800 group-hover:translate-x-16 z-10 group-hover:bg-black group-hover:text-white p-1 border border-white dark:border-black rounded-full text-2xl" />
            }
            text="Send"
          />
          <span className="px-2 font-normal text-lg text-gray-400 dark:text-gray-600">
            or
          </span>
          <Button
            className="group border border-white dark:border-black outline-0 pr-5 gap-2 text-lg leading-[18px]"
            icon={
              <IoMdMail className="duration-800 group-hover:translate-x-28 z-10 group-hover:bg-black group-hover:text-white p-1 border border-white dark:border-black rounded-full text-2xl" />
            }
            text="Contact me"
          />
        </div>

        <div className="flex flex-wrap items-center gap-5 text-lg">
          <p className="text-gray-400 dark:text-gray-600 font-normal">@monir</p>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-px bg-gray-400 dark:bg-gray-600" />
            <a
              href="https://www.linkedin.com/in/md-mhossain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-900 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://github.com/md-mhossain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-900 dark:text-gray-300 hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://medium.com/@monirhdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-900 dark:text-gray-300 hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <FaMediumM className="text-xl" />
            </a>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
