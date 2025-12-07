import React from "react";

function SkillCard({ skill = "", level = "", image = "" }) {
  const getLevelColor = (level) => {
    const levelLower = level.toLowerCase();
    if (levelLower.includes('advanced')) return 'from-green-500 to-emerald-600';
    if (levelLower.includes('intermediate')) return 'from-blue-500 to-cyan-600';
    return 'from-gray-400 to-gray-600';
  };

  return (
    <div className="skillcard group relative m-2 px-5 py-4 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl flex flex-col items-center justify-center gap-2 min-w-[100px] hover:bg-white/40 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg">
      <div className="relative">
        <img
          src={
            image ||
            `https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${skill}-colored.svg`
          }
          alt={skill}
          className="size-12 rounded-lg object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="skillname font-bold text-center text-sm text-slate-900">{skill}</h3>
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getLevelColor(level)} text-white`}>
        {level}
      </span>
    </div>
  );
}

export default SkillCard;
