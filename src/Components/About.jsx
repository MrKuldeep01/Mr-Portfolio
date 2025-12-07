import React, { useEffect, useState } from "react";
import { BigButton } from "./index";
import { Link } from "react-router-dom";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStack = [
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "JavaScript", icon: "📜" },
    { name: "Express.js", icon: "🚂" },
    { name: "Tailwind CSS", icon: "🎨" },
  ];

  return (
    <div className="about pt-28 sm:pt-32 md:pt-36 w-full min-h-screen flex flex-col items-center justify-start px-4 sm:px-8 pb-12">
      <div className={`heading w-full mb-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        <h1 className="name text-center w-full text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
          About Me
        </h1>
        <p className="subheading font-semibold text-center text-sm text-slate-700/70">
          Get to know me better
        </p>
      </div>
      
      <div className="bottom w-full max-w-6xl h-auto flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
        {/* Image Section */}
        <div className={`left w-full lg:w-2/5 h-full flex items-center justify-center transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="img relative size-[240px] sm:size-[280px] lg:size-[300px] rounded-2xl shadow-2xl overflow-hidden bg-transparent transform group-hover:scale-105 transition-transform duration-300">
              <img
                src="/imgMe.PNG"
                alt="Kuldeep Kumar"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className={`right w-full lg:w-3/5 h-full flex-col gap-4 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          {/* Compact Stats Cards */}
          <div className="cards w-full flex flex-wrap items-center justify-center gap-3 mb-4">
            <Link 
              to={"/education"} 
              className="group bg-white/20 backdrop-blur-md card px-4 py-3 flex items-center gap-2 border border-white/30 rounded-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="text-xl">🎓</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">Post Graduated</span>
                <p className="text-xs font-medium text-slate-700/80">
                  MDU 2022-2024
                </p>
              </div>
            </Link>
            <Link 
              to={"/projects"}  
              className="group bg-white/20 backdrop-blur-md card px-4 py-3 flex items-center gap-2 border border-white/30 rounded-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="text-xl">💼</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">Projects</span>
                <p className="text-xs font-medium text-slate-700/80">
                  4+ Completed
                </p>
              </div>
            </Link>
            <div className="group bg-white/20 backdrop-blur-md card px-4 py-3 flex items-center gap-2 border border-white/30 rounded-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
              <span className="text-xl">⚡</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">Experience</span>
                <p className="text-xs font-medium text-slate-700/80">
                  5+ Months
                </p>
              </div>
            </div>
          </div>
          
          {/* Compact Intro Text */}
          <div className="details w-full text-slate-800/90 font-medium text-sm sm:text-base leading-relaxed bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 mb-4">
            <p className="mb-3">
              I'm a passionate <strong>Software Developer</strong> with <strong>5+ months of professional experience</strong> building 
              modern web applications. I specialize in creating responsive, user-friendly solutions using 
              <strong> React.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
            </p>
            <p>
              Always eager to learn and tackle new challenges, I enjoy contributing to open-source projects 
              and staying updated with the latest industry trends. I believe in writing clean, maintainable code.
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="tech-stack bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 mb-4">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span>🛠️</span> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-xs font-semibold text-slate-900 hover:bg-white/30 transition-all duration-200"
                >
                  <span className="mr-1.5">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
          
          {/* CV Button */}
          <div className="button-container">
            <a 
              href="https://drive.google.com/file/d/1zo4-RaUfa69hrKM-qMgA4Ovm0B5VexKr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BigButton
                Children={<>Download CV 📌</>}
                className="rounded-xl duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-base px-5 py-2.5"
                bgColor="bg-gradient-to-r from-blue-600 to-purple-600"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
