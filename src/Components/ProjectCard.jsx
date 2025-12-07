import React, { useState } from "react";

const ProjectCard = ({
  codelink = "#",
  demolink = "#",
  desc = "",
  title = "Project title",
  bgimg = "/webicon.svg",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative w-full h-[400px] flex-col items-center border border-white/30 rounded-2xl justify-between overflow-hidden cursor-pointer bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full w-full">
        <img
          src={bgimg}
          alt={title}
          className={`absolute top-0 left-0 h-full w-full object-cover rounded-2xl transition-all duration-500 ${
            isHovered ? 'opacity-40 scale-110' : 'opacity-60'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-2xl"></div>
        
        <div className="relative h-full flex flex-col justify-between p-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3 capitalize">
              {title}
            </h2>
            <p className={`text-sm text-white/80 leading-relaxed transition-all duration-500 ${
              isHovered ? 'opacity-100 max-h-48 overflow-y-auto' : 'opacity-70 max-h-24 overflow-hidden'
            }`}>
              {desc}
            </p>
          </div>
          
          <div className="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-white/20">
            <a
              href={codelink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold text-sm px-4 py-2 rounded-lg text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <i className="ri-code-s-slash-line"></i>
              Code
            </a>
            <a
              href={demolink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm px-4 py-2 rounded-lg text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <i className="ri-external-link-line"></i>
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
