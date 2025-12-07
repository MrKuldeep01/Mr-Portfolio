import React, { useEffect, useState } from "react";
import { ProjectCard } from "./";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="projects w-full min-h-screen flex flex-col items-center justify-start px-4 sm:px-8">
      <div className={`pt-28 sm:pt-32 md:pt-36 w-full mb-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        <h1 className="name text-center w-full text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
          Projects
        </h1>
        <p className="subheading font-semibold text-center text-base text-slate-700/70">
          Showcasing my work and creativity
        </p>
      </div>
      
      <div className="bottom w-full max-w-7xl h-auto my-6 flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 px-4 py-8">
        <div className={`transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <ProjectCard
            codelink={"https://github.com/MrKuldeep01/megablog_react"}
            demolink={"https://ourminimedia.vercel.app/"}
            title={"Our Mini Media"}
            desc={`🚀 An intuitive platform for users to create, edit, and manage their posts effortlessly. Features real-time text editing and user-specific post visibility for a personalized content management experience.

Tech Stack: React.js, Redux Toolkit, React Router DOM, React Hook Form, TailwindCSS, Appwrite (BaaS), Vercel`}
            bgimg="/project_Img/ourminimedia.png"
          />
        </div>
        
        <div className={`transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <ProjectCard
            codelink={"https://github.com/MrKuldeep01/miniapp"}
            demolink={"https://mini-media-twln.onrender.com/"}
            title={"Mini Media"}
            desc={`A dynamic web application for creating, editing, and managing posts with a seamless user experience.

Key Features:
• JWT Authentication
• Post Management
• Responsive Design
• Error Handling
• Cookie Storage

Tech Stack: Node.js, Express.js, EJS, MongoDB, HTML, CSS, JavaScript, Render`}
            bgimg="/project_Img/minimedia.PNG"
          />
        </div>

        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <ProjectCard
            codelink={"https://github.com/MrKuldeep01/stitching_shop"}
            demolink={"https://stitchingshop.netlify.app/"}
            title={"E-Commerce Stitching Shop"}
            desc={`A modern e-commerce website where users can browse clothing designs, select items, and connect with real tailors for stitching services.

Features:
• Product Browsing
• Tailor Connection
• User-Friendly Interface

Tech Stack: HTML, CSS, JavaScript`}
            bgimg="/project_Img/stitching_shop.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
