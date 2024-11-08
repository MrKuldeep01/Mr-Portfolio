import React, { useState } from "react";
import { Logo, BigButton } from "../";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const navItems = [
    {
      url: "/",
      name: (
        <>
          <p className=" md:inline-block hidden "> Home </p>{" "}
          <i className="ri-home-heart-line md:hidden inline-block"></i>
        </>
      ),
      title: "Home",
    },
    {
      url: "/about",
      name: (
        <>
          {" "}
          <p className=" md:inline-block hidden "> About </p>{" "}
          <i className="ri-user-6-fill md:hidden inline-block"></i>
        </>
      ),
      title: "About",
    },
    {
      url: "/skills",
      name: (
        <>
          {" "}
          <p className=" md:inline-block hidden "> Skills </p>{" "}
          <i className="ri-palette-line md:hidden inline-block"></i>{" "}
        </>
      ),
      title: "Skills",
    },
    {
      url: "/education",
      name: (
        <>
          {" "}
          <p className=" md:inline-block hidden "> Education </p>{" "}
          <i className="ri-stairs-fill md:hidden inline-block"></i>{" "}
        </>
      ),
      title: "Education",
    },
    {
      url: "/projects",
      name: (
        <>
          {" "}
          <p className=" md:inline-block hidden "> Projects </p>{" "}
          <i className="ri-gallery-fill md:hidden inline-block"></i>{" "}
        </>
      ),
      title: "Projects",
    },
    {
      url: "/contact",
      name: (
        <>
          {" "}
          <p className=" md:inline-block hidden "> Contact </p>{" "}
          <i className="ri-contacts-fill md:hidden inline-block"></i>{" "}
        </>
      ),
      title: "Contact",
    },
  ];

  const [onHam, setOnHam] = useState(false);
  const toggleHamDisplay = () => {
    setOnHam((pre) => !pre);
  };
  return (
    <header className="w-full backdrop-blur-lg px-4 py-2 mt-0 mb-2 shadow-lg shadow-black-100/40 fixed top-0 left-0 z-40">
      <nav className="w-full flex items-center justify-between px-8 py-0">
        <Link to={"/"} className="logo outline-none p-1 ml-2 rounded-full bg-white/20 ">
          <Logo />
        </Link>

        {/* =============== ham button ================ */}
        <button
          className={`md:hidden inline-block text-base rounded-lg bg-black text-white py-2 px-4 ${
            onHam ? "hidden" : "inline-block"
          }`}
          onClick={toggleHamDisplay}
        >
          <i className="ri-menu-3-fill"></i>
        </button>
        {/* ================== ham content ===================== */}
        <ul
          className={`flex-col Ham z-10 px-2 py-2  bg-black/30 rounded-l-lg absolute top-2 right-2 inline-block md:hidden ${
            onHam ? "inline-block" : "hidden"
          } `}
          onClick={toggleHamDisplay}
        >
          {/* ============= close ham btn ============ */}
          <button
            className="px-2 py-1 my-1 w-full bg-black/80 text-white duration-200 hover:bg-black rounded-md"
            onClick={(e) => {
              e.stopPropagation();
              toggleHamDisplay();
            }}
          >
            <i className="ri-close-fill"></i>
          </button>
          {/* ========== ham list items========== */}
          {navItems.map((item, i) => (
            // ${i === 0 ? "mt-7" : "my-1" }
            <Link key={item.url} to={item.url} title={item.title}>
              <li
                className={` px-2 py-1 my-1 bg-black/80 text-white duration-200 hover:bg-black rounded-md`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        {/* ================ ham content finished================== */}

        {/* -------------- nav items --------------- */}
        <ul className="gap-1 w-auto hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              title={item.title}
              className="outline-slate-800/10 rounded-[5px]"
            >
              <li className="px-2 py-2 font-semibold text-slate-900/80 hover:text-slate-950 duration-200 ">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        {/* ---------------- nav done ----------------- */}
      </nav>
    </header>
  );
};

export default Header;
