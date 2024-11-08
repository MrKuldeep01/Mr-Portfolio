
import React from 'react'
import {NavLink} from "react-router-dom"
import SkillCard from './SkillCard.jsx'
const Skills = () => {
  return (
    <div className="skills w-full h-screen flex flex-col items-center justify-start">
    <span className="pt-24 w-full">
      <h1 className="name text-center w-full text-3xl font-bold  ">
        Skills
      </h1>
      <p className="subheading font-semibold text-center text-sm text-gray-700/70 p-4">
        My technical level
      </p>
    </span>
    {/* <div className="bottom w-full min-h-[100vh] my-6 flex flex-col px-2 py-12 gap-8 items-center  "> */}
    <div className="bottom w-[90vw] h-auto my-6 flex flex-col md:overflow-x-auto md:overflow-y-hidden scroll-smooth px-2 py-12 gap-8 md:flex-row overflow-y-auto overflow-x-hidden items-center flex-nowrap relative">
      <div id='frontend' className=" left-most w-[90%]  md:min-w-[50%] h-auto md:min-h-[242px] flex-col px-6 py-4  items-center rounded-lg justify-center"> 
        <h2 className="skillheader mb-4 w-full text-center text-lg font-semibold text-slate-900">Frontend Development </h2>
        <div className="skillscards flex gap-2 items-center justify-evenly flex-wrap">
          {/* ======== skill card =========== */}
          {/* <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">HTML</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Intermediat</span>
          </div> */}
          <SkillCard skill="HTML" level="Intermediat" image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" />
          <SkillCard skill="CSS" level="Intermediat" image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" />
          <SkillCard skill="JavaScript" level="Advanced" image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" />
          <SkillCard skill="React.Js" level="Intermediat" image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" />
          <SkillCard skill="Tailwindd CSS" level="Intermediat" image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" />         
        </div>

      </div>
      <div id='backend' className="second-left w-[90%]  md:min-w-[50%] h-auto md:min-h-[242px] flex-col px-6 py-4  items-center rounded-lg justify-center">
        <h2 className="skillheader mb-4 w-full text-center text-lg font-semibold text-slate-900">Backend Development </h2>
        <div className="skillscards flex items-center justify-evenly flex-wrap">
          {/* ======== skill card =========== */}
         
          <SkillCard skill="Node.Js" level="Intermediat" image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" />                  
          <SkillCard skill="Express.Js" level="Intermediat" image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" />         
          <SkillCard skill="MongoDB" level="Intermediat" image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" />         
          <SkillCard skill="Python" level="Intermediat" image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" />         
          <SkillCard skill="SQL Server" level="Basic" image="https://www.svgrepo.com/show/331760/sql-database-generic.svg" />         
        </div>

      </div>
      <div id='devtools' className="right-most w-[90%]  md:min-w-[50%] h-auto md:min-h-[242px] flex-col px-6 py-4  items-center rounded-lg justify-center">
        <h2 className="skillheader mb-4 w-full text-center text-lg font-semibold text-slate-900">Development tools </h2>
        <div className="skillscards flex items-center justify-evenly flex-wrap">
          {/* ======== skill card =========== */}
          <SkillCard skill="VS Code" level="Intermediat" image="https://cdn4.iconfinder.com/data/icons/logos-brands-8/32/vs_code-visual_studio_code-logo-microsoft-code-512.png" />         
          <SkillCard skill="Netlify" level="Intermediat" image="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/netlify-512.png" />         
          <SkillCard skill="Varcel" level="basic" image="https://cdn1.iconfinder.com/data/icons/akar-vol-2/24/vercel-fill-64.png" />                         
          <SkillCard skill="Git" level="basic" image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" />         
          <SkillCard skill="GitHub" level="intermediat" image="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/github-square-256.png" />         
          <SkillCard skill="Linux" level="basic" image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg" />         
               
        </div>

      </div>
      {/* <div className="buttons w-full absolute bottom-0 left-0 flex items-center justify-center gap-1">

      </div> */}
    </div>
  </div>
  )
}

export default Skills
