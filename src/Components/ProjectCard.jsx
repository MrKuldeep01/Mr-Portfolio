import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({
  codelink = "#",
  demolink = "#",
  desc = "",
  title = "Project title",
  bgimg = "/webicon.svg",
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(codelink);
      }}
      title={desc}
      className={`left-most px-6 py-4 w-[95%] md:w-[50%] md:min-w-[50%] h-[320px] flex-col items-center border border-black/30 rounded-lg justify-center overflow-hidden relative cursor-pointer ${className}`}
    >
      <img
        src={bgimg}
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover rounded-lg opacity-70"
      />
      <h2 className="skillheader capitalize mb-4 w-full text-center text-xl font-bold mix-blend-difference px-4 py-1 rounded-t-lg bg-black/30">
        {title}
      </h2>
      <span className="linkes w-full absolute bottom-0 left-0 flex items-center justify-between px-4 py-2 bg-black/30">
        <Link
          to={codelink}
          className="text-gray-200 font-semibold text-sm hover:text-gray-100 duration-200 outline-none "
        >
          Code
        </Link>
        <Link
          to={demolink}
          className="text-gray-200 font-semibold text-sm hover:text-gray-100 duration-200 outline-none"
        >
          Demo
        </Link>
      </span>
    </div>
  );
};

export default ProjectCard;
