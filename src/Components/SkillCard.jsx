import React from "react";

function SkillCard({ skill = "", level = "", image = "" }) {
  return (
    <div className="skillcard  m-2 px-4 py-2 border-white/10 rounded-lg backdrop-brightness-105 flex flex-col items-center justify-center gap-1">
      <img
        src={
          image ||
          `https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${skill}-colored.svg`
        }
        alt={skill}
        className="size-8 rounded-xl object-contain m-1"
      />
      <h3 className="skillname font-semibold text-center text-sm">{skill}</h3>
      <span className="text-slate-800/80 font-semibold text-xs text-left">
        {level}
      </span>
    </div>
  );
}

export default SkillCard;
