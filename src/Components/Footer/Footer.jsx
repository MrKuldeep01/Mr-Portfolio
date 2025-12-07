import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.jsx'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full min-h-[40vh] flex-col items-center justify-center bg-white/10 backdrop-blur-md border-t border-white/20 mt-16'>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="myname text-3xl font-bold text-slate-900/90 w-full flex items-center justify-center gap-2 pt-4 pb-6">
          <span>Mr. Kumar</span>
          <Logo />
        </div>
        
        <div className="linkes w-full flex items-center justify-center gap-4 sm:gap-6 border-b border-white/20 pb-6 mb-6 flex-wrap">
          <Link 
            to={'/about'} 
            className='text-sm text-slate-800/80 duration-200 hover:text-slate-900 hover:scale-110 px-3 py-2 font-semibold transition-all'
          >
            About
          </Link>
          <Link 
            to={'/skills'} 
            className='text-sm text-slate-800/80 duration-200 hover:text-slate-900 hover:scale-110 px-3 py-2 font-semibold transition-all'
          >
            Skills
          </Link>    
          <Link 
            to={'/projects'} 
            className='text-sm text-slate-800/80 duration-200 hover:text-slate-900 hover:scale-110 px-3 py-2 font-semibold transition-all'
          >
            Projects
          </Link>
          <Link 
            to={'/contact'} 
            className='text-sm text-slate-800/80 duration-200 hover:text-slate-900 hover:scale-110 px-3 py-2 font-semibold transition-all'
          >
            Contact
          </Link>
        </div>
        
        <div className="medialinks w-full flex items-center justify-center gap-3 sm:gap-4 my-6 py-4">
          <a 
            href="https://github.com/mrkuldeep01/" 
            target="_blank"
            rel="noopener noreferrer"
            className='bg-slate-900/80 hover:bg-slate-900 hover:scale-110 duration-300 text-white w-12 h-12 flex items-center justify-center font-medium rounded-full shadow-lg hover:shadow-xl transition-all'
            aria-label="GitHub"
          >
            <i className="ri-github-fill text-xl"></i>
          </a>
          <a 
            href="https://x.com/weAreDev01" 
            target="_blank"
            rel="noopener noreferrer"
            className='bg-slate-900/80 hover:bg-slate-900 hover:scale-110 duration-300 text-white w-12 h-12 flex items-center justify-center font-medium rounded-full shadow-lg hover:shadow-xl transition-all'
            aria-label="Twitter"
          >
            <i className="ri-twitter-fill text-xl"></i>
          </a>
          <a 
            href="https://t.me/weAreDev01" 
            target="_blank"
            rel="noopener noreferrer"
            className='bg-slate-900/80 hover:bg-slate-900 hover:scale-110 duration-300 text-white w-12 h-12 flex items-center justify-center font-medium rounded-full shadow-lg hover:shadow-xl transition-all'
            aria-label="Telegram"
          >
            <i className="ri-telegram-fill text-xl"></i>
          </a>
          <a 
            href="https://linkedin.com/in/kuldeep-kumar-a4b71a258" 
            target="_blank"
            rel="noopener noreferrer"
            className='bg-slate-900/80 hover:bg-slate-900 hover:scale-110 duration-300 text-white w-12 h-12 flex items-center justify-center font-medium rounded-full shadow-lg hover:shadow-xl transition-all'
            aria-label="LinkedIn"
          >
            <i className="ri-linkedin-box-fill text-xl"></i>
          </a>
          <a 
            href="mailto:kkharoliya20@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className='bg-slate-900/80 hover:bg-slate-900 hover:scale-110 duration-300 text-white w-12 h-12 flex items-center justify-center font-medium rounded-full shadow-lg hover:shadow-xl transition-all'
            aria-label="Email"
          >
            <i className="ri-mail-add-fill text-xl"></i>
          </a>
        </div>
        
        <p className="copyright text-sm text-slate-700/70 px-2 py-4 font-medium text-center">
          <i className="ri-copyright-line"></i> {currentYear} Mr. Kumar - All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
