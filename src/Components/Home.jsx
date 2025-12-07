import React, { useEffect, useState } from "react";
import { BigButton } from "./index";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ["Software Developer", "Web Developer", "Full Stack Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="w-full min-h-screen pt-28 sm:pt-32 md:pt-36 px-2 sm:px-8 flex flex-col-reverse sm:flex-row items-center justify-center gap-8">
      <div 
        className={`leftside w-full sm:w-1/2 flex-col justify-center items-start gap-4 px-2 sm:px-8 relative transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        <div className="greeting mb-2">
          <span className="text-lg sm:text-xl text-slate-700/80 font-medium">
            Hi, I'm
          </span>
        </div>
        <h1 className="name text-5xl sm:text-6xl md:text-7xl font-extrabold capitalize bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent animate-gradient">
          Kuldeep Kumar
        </h1>
        <div className="role-container flex items-center gap-3 my-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <div className="role-text min-h-[28px]">
            <span className="rolename text-xl sm:text-2xl text-slate-800/90 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {roles[currentRole]}
            </span>
          </div>
        </div>
        <p className="overview py-2 my-4 sm:w-[90%] w-full text-slate-700/80 font-medium text-base sm:text-lg leading-relaxed">
          A passionate software developer with 5+ months of experience, dedicated to crafting 
          innovative web solutions. Always eager to learn, grow, and build amazing digital experiences.
        </p>
        <div className="button-group flex flex-wrap gap-4 mt-6">
          <BigButton
            Children={"Get in Touch ☕"}
            onClick={() => {
              navigate("/contact");
            }}
            className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          />
          <BigButton
            Children={"View Projects 🚀"}
            onClick={() => {
              navigate("/projects");
            }}
            bgColor="bg-gradient-to-r from-blue-600 to-purple-600"
            className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          />
        </div>
        <div className="social-links flex gap-4 mt-8">
          <a 
            href="https://github.com/mrkuldeep01/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800/20 backdrop-blur-sm flex items-center justify-center hover:bg-slate-800/40 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <i className="ri-github-fill text-xl text-slate-800"></i>
          </a>
          <a 
            href="https://linkedin.com/in/kuldeep-kumar-a4b71a258" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800/20 backdrop-blur-sm flex items-center justify-center hover:bg-slate-800/40 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <i className="ri-linkedin-fill text-xl text-slate-800"></i>
          </a>
          <a 
            href="mailto:kkharoliya20@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800/20 backdrop-blur-sm flex items-center justify-center hover:bg-slate-800/40 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <i className="ri-mail-fill text-xl text-slate-800"></i>
          </a>
        </div>
      </div>

      <div 
        className={`rightside w-full sm:w-1/2 h-full flex items-center justify-center transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[40%] blur-2xl opacity-30 animate-pulse"></div>
          <div className="image relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-[40%] border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 transform hover:scale-105 transition-transform duration-500">
            <img
              src="/me.png"
              alt="Kuldeep Kumar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-50 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
