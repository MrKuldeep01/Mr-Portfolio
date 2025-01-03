import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.jsx'
const Footer = () => {
  return (
    <footer className='w-full min-h-[50vh] flex-col items-center justify-evenly bg-transparent border-t'>
      {/* <div className="footerbar"></div> */}
      <span className="myname text-2xl font-mono font-bold text-slate-900/90 w-full flex items-center justify-center gap-1 pt-8 pb-4 ">Mr kumar <Logo classes='size-24'/></span>
      <span className="linkes w-full flex items-center justify-center gap-2 border-b border-gray-400/20 ">
      
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
        <i className="ri-github-fill"></i>
        </Link>
        <Link to={"https://x.com/weAreDev01"} className='bg-black/80 hover:bg-black duration-200 text-white px-2 py-1 font-medium rounded-md'>
        <i className="ri-twitter-fill"></i>
        </Link>
        <Link to={"https://t.me/weAreDev01"} className='bg-black/80 hover:bg-black duration-200 text-white px-2 py-1 font-medium rounded-md'>
        <i className="ri-telegram-fill"></i>
        </Link>
        <Link to={"https://linkedin.com/in/kuldeep-kumar-a4b71a258"} className='bg-black/80 hover:bg-black duration-200 text-white px-2 py-1 font-medium rounded-md'>
        <i className="ri-linkedin-box-fill"></i>
        </Link>
        <Link to={"mailto:kkharoliya20@gmail.com"} className='bg-black/80 hover:bg-black duration-200 text-white px-2 py-1 font-medium rounded-md'>
        <i className="ri-mail-add-fill"></i>
        </Link>
        </span>
        <p className="copyright  text-sm text-slate-700/70 px-2 py-2 font-semibold text-center"><i className="ri-copyright-line"></i> mr-kumar - All rights reserved <br /> ( july 2024 )</p>
    </footer>
  )
}

export default Footer
