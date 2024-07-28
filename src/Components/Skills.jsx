
import React from 'react'
import {NavLink} from "react-router-dom"

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
    <div className="bottom w-[90vw] h-auto flex flex-col overflow-x-auto overflow-y-hidden scroll-smooth px-2 py-12 gap-8 md:flex-row items-center flex-nowrap relative">
      <div id='frontend' className=" left-most w-[90%]  md:min-w-[50%] min-h-[242px] flex-col px-6 py-4  items-center border border-black/30 rounded-lg justify-center"> 
        <h2 className="skillheader mb-4 w-full text-center text-lg font-semibold text-slate-900">Frontend Development </h2>
        <div className="skillscards flex gap-2 items-center justify-evenly flex-wrap">
          {/* ======== skill card =========== */}
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">HTML</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Intermediat</span>
          </div>
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">CSS</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Intermediat</span>
          </div>
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">JavaScript</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Advanced</span>
          </div>
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">React Js</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Intermediat</span>
          </div>
          
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">Tailwindd CSS</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Intermediat</span>
          </div>
          
        </div>

      </div>
      <div id='backend' className="second-left w-[90%]  md:min-w-[50%] min-h-[242px] flex-col px-6 py-4  items-center border border-black/30 rounded-lg justify-center">
        <h2 className="skillheader mb-4 w-full text-center text-lg font-semibold text-slate-900">Backend Development </h2>
        <div className="skillscards flex items-center justify-evenly flex-wrap">
          {/* ======== skill card =========== */}
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">Node Js</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Intermediat</span>
          </div>
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">Express Js</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Intermediat</span>
          </div>
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">MongoDB</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Basic</span>
          </div>
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">Python</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Basic</span>
          </div>
        
        </div>

      </div>
      <div id='devtools' className="right-most w-[90%]  md:min-w-[50%] min-h-[242px] flex-col px-6 py-4  items-center border border-black/30 rounded-lg justify-center">
        <h2 className="skillheader mb-4 w-full text-center text-lg font-semibold text-slate-900">Development tools </h2>
        <div className="skillscards flex items-center justify-evenly flex-wrap">
          {/* ======== skill card =========== */}
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">VS Code</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Intermediat</span>
          </div>
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">Netlify</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Intermediat</span>
          </div>
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">Varcel</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Intermediat</span>
          </div>
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">Git & GitHub</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Basic</span>
          </div>
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">Linux</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Basic</span>
          </div>
          <div className="skillcard  m-2 px-4 py-2 border rounded-lg">
            <h3 className="skillname font-semibold text-center">On Render</h3>
            <span className="text-slate-800/80 font-semibold text-xs text-left">Basic</span>
          </div>
        
        </div>

      </div>
      {/* <div className="buttons w-full absolute bottom-0 left-0 flex items-center justify-center gap-1">

      </div> */}
    </div>
  </div>
  )
}

export default Skills
