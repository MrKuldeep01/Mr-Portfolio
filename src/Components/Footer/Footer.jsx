import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full min-h-[50vh] flex-col items-center justify-evenly bg-gray-100 border-t'>
      {/* <div className="footerbar"></div> */}
      <span className="myname text-4xl font-mono font-semibold text-slate-800 w-full flex items-center justify-center gap-2 pt-8 pb-4 ">Kuldeep kumar  <img src="/webicon.svg" alt="Mr kumar" className='w-20' /> </span>
      <span className="linkes w-full flex items-center justify-center gap-2 border-b ">
        <Link to={'/about'} className=' text-sm text-slate-700/70 duration-200 hover:text-slate-700 px-2 py-2 font-semibold'>
        About
        </Link>
        <Link to={'/skills'} className=' text-sm text-slate-700/70 duration-200 hover:text-slate-700 px-2 py-2 font-semibold'>
        Skills
        </Link>
        <Link to={'/projects'} className=' text-sm text-slate-700/70 duration-200 hover:text-slate-700 px-2 py-2 font-semibold'>
        Projects
        </Link>
      </span>
      <span className="medialinks w-full flex items-center justify-center gap-2 my-4 py-4 ">
        <Link to={"https://github.com/mrkuldeep01/"} className='bg-black/80 hover:bg-black duration-200 text-white px-2 py-1 font-medium rounded-md'>
        Git
        </Link>
        <Link to={"https://linkedin.com/in/kuldeep-kumar-a4b71a258"} className='bg-black/80 hover:bg-black duration-200 text-white px-2 py-1 font-medium rounded-md'>
        Lin
        </Link>
        <Link to={"mailto:kkharoliya20@gmail.com"} className='bg-black/80 hover:bg-black duration-200 text-white px-2 py-1 font-medium rounded-md'>
        Mail
        </Link>
        </span>
        <p className="copyright  text-sm text-slate-700/70 px-2 py-2 font-semibold text-center">@ mr-kumar . All rights reserved</p>
    </footer>
  )
}

export default Footer
