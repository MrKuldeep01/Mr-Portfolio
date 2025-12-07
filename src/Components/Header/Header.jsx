import React, { useState, useEffect } from "react";
import { Logo } from "../";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [onHam, setOnHam] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleHamDisplay = () => {
    setOnHam((pre) => !pre);
  };

  const navItems = [
    { url: "/", name: "Home", icon: "ri-home-heart-line", title: "Home" },
    { url: "/about", name: "About", icon: "ri-user-6-fill", title: "About" },
    { url: "/skills", name: "Skills", icon: "ri-palette-line", title: "Skills" },
    { url: "/education", name: "Education", icon: "ri-stairs-fill", title: "Education" },
    { url: "/projects", name: "Projects", icon: "ri-gallery-fill", title: "Projects" },
    { url: "/contact", name: "Contact", icon: "ri-contacts-fill", title: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`w-full backdrop-blur-md px-4 py-3 fixed top-0 left-0 z-50 transition-all duration-300 h-[70px] sm:h-[80px] flex items-center ${
      scrolled ? 'bg-white/30 shadow-lg' : 'bg-white/20'
    }`}>
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 h-full">
        <Link 
          to={"/"} 
          className="logo outline-none rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          aria-label="Home"
        >
          <Logo />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden inline-block text-xl rounded-lg bg-slate-900 text-white py-2 px-3 hover:bg-slate-800 transition-all duration-200 ${
            onHam ? "hidden" : "inline-block"
          }`}
          onClick={toggleHamDisplay}
          aria-label="Toggle menu"
        >
          <i className="ri-menu-3-fill"></i>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
            onHam ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleHamDisplay}
        >
          <ul
            className={`flex-col bg-white/95 backdrop-blur-md rounded-l-2xl absolute top-0 right-0 h-full w-64 p-4 shadow-2xl transform transition-transform duration-300 ${
              onHam ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="px-3 py-2 mb-4 w-full bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-200 flex items-center justify-between"
              onClick={toggleHamDisplay}
              aria-label="Close menu"
            >
              <span className="font-semibold">Menu</span>
              <i className="ri-close-fill text-xl"></i>
            </button>
            {navItems.map((item) => (
              <Link 
                key={item.url} 
                to={item.url} 
                title={item.title}
                onClick={toggleHamDisplay}
              >
                <li
                  className={`px-4 py-3 my-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-3 ${
                    isActive(item.url)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  <i className={item.icon}></i>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <ul className="gap-2 w-auto hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              title={item.title}
              className="relative"
            >
              <li
                className={`px-4 py-2 font-semibold rounded-lg transition-all duration-200 ${
                  isActive(item.url)
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-slate-900/80 hover:text-slate-900 hover:bg-white/30"
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
