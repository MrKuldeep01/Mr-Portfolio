import React from "react";
import {BigButton} from "./index"
const About = () => {
  return (
    <div className="about pt-24 w-full min-h-screen flex flex-col items-center justify-start">
      <span className="heading w-full">
        <h1 className="name text-center w-full text-3xl font-bold  ">
          About me
        </h1>
        <p className="subheading font-semibold text-center text-sm text-gray-700/70 p-4">
          My Introduction
        </p>
      </span>
      <div className="bottom w-full h-auto flex flex-col sm:flex-row ">
        <div className=" left w-full  sm:w-1/2 h-full flex px-6 py-4  items-center justify-center">
          <div className="img overflow-hidden w-[400px] h-[300px] min-h-[150px] rounded-[8%]">
            <img
              src="/imgMe.PNG"
              alt="myimage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" right w-full  sm:w-1/2 h-full flex-col sm:px-10 py-4 gap-4">
          <div className="cards w-full flex items-center justify-evenly my-4">
            <div className="m-1 card p-4 md:flex flex-col gap-1 items-center justify-center border rounded-lg max-w-[150px]">
              <span className="text-sm font-semibold "> Post graduated </span>
              <p className="text-xs font-medium text-slate-800/80">
              (MDU) 2022 - 2024
              </p>
            </div>
            <div className="m-1 card p-4 flex flex-col gap-1 items-center justify-center border rounded-lg max-w-[150px]">
              <span className="text-sm font-semibold"> Projects soled </span>
              <p className="text-xs font-medium text-slate-800/80">
                4+ mini projects
              </p>
            </div>
          </div>
          <div className="details py-4 px-2 w-[90%] text-slate-800/80 font-semibold text-justify">
          A dedicated and enthusiastic fresher web developer, always eager to learn and adapt to new technologies and methodologies. Passionate about creating innovative web solutions and continuously enhancing skills through hands-on experience and continuous learning.
          </div>
          <BigButton Childrens={"Download CV "} className="rounded-lg duration-200 hover:bg-black" bgColor="bg-black/90" />
        </div>
      </div>
    </div>
  );
};

export default About;
