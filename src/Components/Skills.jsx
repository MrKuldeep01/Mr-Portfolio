import React, { useEffect, useState } from 'react'
import SkillCard from './SkillCard.jsx'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { skill: "HTML", level: "Intermediate", image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" },
        { skill: "CSS", level: "Intermediate", image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" },
        { skill: "JavaScript", level: "Advanced", image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" },
        { skill: "React.Js", level: "Intermediate", image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" },
        { skill: "Tailwind CSS", level: "Intermediate", image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { skill: "Node.Js", level: "Intermediate", image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" },
        { skill: "Express.Js", level: "Intermediate", image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" },
        { skill: "MongoDB", level: "Intermediate", image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" },
        { skill: "Python", level: "Intermediate", image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" },
        { skill: "SQL Server", level: "Basic", image: "https://www.svgrepo.com/show/331760/sql-database-generic.svg" }
      ]
    },
    {
      id: 'devtools',
      title: 'Development Tools',
      icon: '🛠️',
      skills: [
        { skill: "VS Code", level: "Intermediate", image: "https://cdn4.iconfinder.com/data/icons/logos-brands-8/32/vs_code-visual_studio_code-logo-microsoft-code-512.png" },
        { skill: "Netlify", level: "Intermediate", image: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/netlify-512.png" },
        { skill: "Vercel", level: "Basic", image: "https://cdn1.iconfinder.com/data/icons/akar-vol-2/24/vercel-fill-64.png" },
        { skill: "Git", level: "Basic", image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" },
        { skill: "GitHub", level: "Intermediate", image: "https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/github-square-256.png" },
        { skill: "Linux", level: "Basic", image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg" }
      ]
    }
  ];

  return (
    <div className="skills w-full min-h-screen flex flex-col items-center justify-start px-4 sm:px-8">
      <div className={`pt-28 sm:pt-32 md:pt-36 w-full mb-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        <h1 className="name text-center w-full text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
          Skills
        </h1>
        <p className="subheading font-semibold text-center text-base text-slate-700/70">
          My technical expertise
        </p>
      </div>
      
      <div className="bottom w-full max-w-7xl h-auto my-6 flex flex-col lg:flex-row gap-6 lg:gap-8 px-2 py-8">
        {skillCategories.map((category, index) => (
          <div
            key={category.id}
            className={`${category.id} w-full lg:w-1/3 h-auto flex-col px-6 py-6 items-center rounded-2xl justify-center bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h2 className="skillheader text-xl font-bold text-slate-900">
                {category.title}
              </h2>
            </div>
            <div className="skillscards flex gap-3 items-center justify-center flex-wrap">
              {category.skills.map((skillData, idx) => (
                <SkillCard
                  key={idx}
                  skill={skillData.skill}
                  level={skillData.level}
                  image={skillData.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
