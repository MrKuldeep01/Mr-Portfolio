import React from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./";

const Projects = () => {
  return (
    <div className="skills w-full min-h-screen flex flex-col items-center justify-start">
      <span className="pt-24 w-full">
        <h1 className="name text-center w-full text-3xl font-bold  ">
          Projects
        </h1>
        <p className="subheading font-semibold text-center text-sm text-gray-700/70 p-4">
          Logic oriented
        </p>
      </span>
      <div className="bottom  md:px-10 px-4 py-12 w-[90vw] h-auto my-6 flex flex-col md:flex-row overflow-y-auto overflow-x-hidden items-center justify-start flex-nowrap md:overflow-x-auto md:overflow-y-hidden scroll-smooth gap-8 relative">
        {/* =================demo card================= */}
        {/* <div
          className=" left-most w-[90%]  md:min-w-[50%] h-auto md:min-h-[242px] flex-col px-6 py-4  items-center border border-black/30 rounded-lg justify-center relative "
        >
          <h2 className="skillheader mb-4 w-full text-center text-xl font-bold text-slate-900/80">
            Project 01{" "}
          </h2>
          <span className="linkes w-full absolute bottom-2 left-0 flex items-center justify-between px-4 ">
          <Link
            to={"#"}
            className="text-gray-700/40 font-semibold text-sm hover:text-gray-700/70 duration-200 "
          >
            {" "}
            Code{" "}
          </Link>
          <Link
            to={"#"}
            className="text-gray-700/40 font-semibold text-sm hover:text-gray-700/70 duration-200 "
          >
            {" "}
            Demo{" "}
          </Link>
          </span>
        </div> */}

        <ProjectCard
          codelink={"https://github.com/MrKuldeep01/megablog_react"}
          demolink={"https://ourminimedia.vercel.app/"}
          title={"our-mini-media"}
          desc={`🚀☕ Our Mini Media - Mr Kumar is designed to be an intuitive platform for users to create, edit, and manage their posts effortlessly. With features like real-time text editing and user-specific post visibility, it ensures a personalized and efficient content management experience. 👨‍💻
            Tech Stack - Frontend: React.js, Redux Toolkit, React Router DOM, React Hook Form, TailwindCSS, Backend: Appwrite (Backend as a Service), Deployment: Vercel`}
          bgimg="/project_Img/ourminimedia.png"
        />
        <ProjectCard
          codelink={"https://github.com/MrKuldeep01/miniapp"}
          demolink={"https://mini-media-twln.onrender.com/"}
          title={"mini-media"}
          desc={`• Developed a dynamic web application named "Mini Media," designed to allow users to create, edit, and manage
posts in a streamlined manner. The application leverages modern web technologies to provide a seamless user
experience.
• Key Features:
• User Authentication using JWT (JSON Web Tokens), Post Management, Responsive Design, Error Handling,
Cookie Storage
• Technologies Used: Node.js, Express.js, EJS, MongoDB, HTML, CSS, JavaScript, Render web server for
Deployment.`}
          bgimg="/project_Img/minimedia.PNG"
        />

        <ProjectCard
          codelink={"https://github.com/MrKuldeep01/stitching_shop"}
          demolink={"https://stitchingshop.netlify.app/"}
          title={"E-Commerce"}
          desc={`• Developed a website where users can browse various clothing designs, select items, and connect with real tailors
for stitching services, ensuring a smooth and user-friendly experience.
• Technologies Used: HTML, CSS, JavaScript `}
          bgimg="/project_Img/stitching_shop.png"
        />
      </div>
    </div>
  );
};

export default Projects;
