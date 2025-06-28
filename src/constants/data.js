import {FaFacebook, FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";


export const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blogs' },
    { label: 'Start Project', path: '/contact'},
];


export const skills = [
    {
        "name": "JavaScript",
        "description": "JavaScript is a high-level, dynamic programming language that enables interactive web pages. It's the core technology of the web alongside HTML and CSS, and it's used for both frontend and backend development.",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        "name": "React",
        "description": "React is a popular JavaScript library developed by Facebook for building fast and interactive user interfaces. It uses a component-based architecture and a virtual DOM for efficient rendering.",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        "name": "Next.js",
        "description": "Next.js is a powerful React framework that enables server-side rendering, static site generation, and API routes. It enhances performance, SEO, and developer experience in modern web apps.",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
        "name": "Node.js",
        "description": "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to build scalable backend services and APIs using JavaScript on the server-side.",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        "name": "Express.js",
        "description": "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building single-page, multi-page, and RESTful APIs.",
        "image": "/images/express.webp"
    },
    {
        "name": "MongoDB",
        "description": "MongoDB is a NoSQL database that stores data in JSON-like documents. It is highly scalable and ideal for handling large amounts of unstructured data.",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
        "name": "Postman",
        "description": "Postman is an API platform used by developers to design, test, and document APIs. It simplifies HTTP request testing and enhances collaboration across teams.",
        "image": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
    },
    {
        "name": "Tailwind CSS",
        "description": "Tailwind CSS is a utility-first CSS framework that allows you to style elements by applying pre-defined classes directly in your markup, speeding up the UI development process.",
        "image": "/images/icon.tailwind.png"
    },
    {
        "name": "Bootstrap",
        "description": "Bootstrap is a responsive CSS framework developed by Twitter. It includes prebuilt components and layout tools for building mobile-first, responsive websites quickly.",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
    },
    {
        "name": "Git",
        "description": "Git is a distributed version control system used to track changes in source code. It allows multiple developers to collaborate on projects efficiently and safely.",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
        "name": "Vercel",
        "description": "Vercel is a cloud platform for static sites and serverless functions. It's the official hosting platform for Next.js and enables fast global deployments with an optimized developer experience.",
        "image": "/images/vercel.jpeg"
    },
    {
        "name": "Cloudinary",
        "description": "Cloudinary is a cloud-based image and video management platform that enables developers to upload, store, manipulate, optimize, and deliver media assets efficiently across web and mobile applications.",
        "image": "/images/cloudinary.svg"
    }
]




export const workProcess = [
    {
        title: "Discovery",
        description: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action."
    },
    {
        title: "Strategy",
        description: "Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success.",
        rotate: "4"
    },
    {
        title: "Design",
        description: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval."
    }
    ,
    {
        title: "Build",
        description: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project."
    }
]

export const socials = [
    {
        id: 1,
        name: "Linkedin",
        image: "/images/linkedin.png",
        onClick: ()=>{
            window.open("https://www.linkedin.com/in/monirhdigital", "_blank", "noopener,noreferrer");
        }
    },
    {
        id: 2,
        name: "Github",
        image: "/images/github.png",
        onClick: ()=>{
            window.open("https://github.com/monir-hossaien", "_blank", "noopener,noreferrer");
        }
    },
    {
        id: 3,
        name: "Facebook",
        image: "/images/facebook.png",
        onClick: ()=>{
            window.open("https://facebook.com/MonirHossain20230", "_blank", "noopener,noreferrer");
        }
    },
    {
        id: 4,
        name: "Whatsapp",
        image: "/images/whatsapp.png",
        onClick: ()=>{
            window.open("https://wa.me/8801787960556", "_blank", "noopener,noreferrer");
        }
    }
];

