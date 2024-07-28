import React from "react";

const Education = () => {
  return (
    <div className="education w-full h-screen flex flex-col items-center justify-start">
      <span className="pt-24 w-full">
        <h1 className="name text-center w-full text-3xl font-bold  ">
          Qualification
        </h1>
        <p className="subheading font-semibold text-center text-sm text-gray-700/70 p-4">
          My Educational journey
        </p>
      </span>
      <div className="bottom w-[90vw] h-auto my-6 flex flex-col md:overflow-x-auto md:overflow-y-hidden scroll-smooth px-2 py-12 gap-8 md:flex-row overflow-y-auto overflow-x-hidden items-center flex-nowrap relative">
        <div
          id="graduation"
          className=" left-most w-[90%]  md:min-w-[40%] md:min-h-[228px] h-auto flex-col px-4 py-4  items-center border border-black/30 rounded-lg justify-center"
        >
          <div className="top w-full flex items-center justify-center gap-4 relative border-b-2 border-gray-800/40">
            <img
              src="/mduLogo.png"
              alt="mdu"
              className=" hidden sm:inline-block md:hidden lg:inline-block h-6 absolute top-0 left-0"
            />
            <h2 className="skillheader mb-4 w-full text-center text-lg font-semibold text-slate-900">
              {" "}
              Bachelor of Computer Application{" "}
            </h2>
            <p className="w-[64%] h-[2px] rounded-full bg-black absolute -bottom-[2px] left-0 "></p>
            <span className=" absolute -bottom-3 right-0 text-xs text-slate-700/50 bg-white px-1 py-1 rounded-lg ">
              64%
            </span>
          </div>
          <div className="details my-4 flex gap-2 items-center justify-between flex-wrap">
            <span className="px-4 py-2 text-base font-semibold text-slate-800/70">
              from MDU ROHTAK
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-slate-800/70">
              {" "}
              (2019- 2022){" "}
            </span>
          </div>
          <p className="edudetails w-[90%] text-slate-800/30 font-semibold text-sm text-justify block mx-auto  my-4">
            Completing a BCA from MDU provides a solid foundation in computer
            applications and can lead to various career opportunities in the
            field of information technology.
          </p>
        </div>
        <div
          id="postgraduation"
          className="second-left w-[90%]  md:min-w-[40%] h-auto md:min-h-[228px] flex-col px-4 py-4  items-center border border-black/30 rounded-lg justify-center"
        >
          <div className="top w-full flex items-center justify-center gap-4 relative border-b-2 border-gray-800/40">
            <img
              src="/mduLogo.png"
              alt="mdu"
              className=" hidden sm:inline-block md:hidden lg:inline-block h-6 absolute top-0 left-0"
            />
            <h2 className="eduheader mb-4 inline-block text-center text-lg font-semibold text-slate-900">
              {" "}
              Master of Computer Application{" "}
            </h2>
            <p className="w-[75%] h-[2px] rounded-full bg-black absolute -bottom-[2px] left-0 "></p>
            <span className=" absolute -bottom-3 right-0 text-xs text-slate-700/50 bg-white px-1 py-1 rounded-lg ">
              75%
            </span>
          </div>
          <div className="details my-4 flex gap-2 items-center justify-between flex-wrap">
            <span className="px-4 py-2 text-base font-semibold text-slate-800/70">
              from MDU ROHTAK{" "}
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-slate-800/70">
              {" "}
              (2022- 2024){" "}
            </span>
          </div>
          <p className="edudetails w-[90%] text-slate-800/30 font-semibold text-sm text-justify block mx-auto  my-4">
            Pursuing a Master of Computer Applications (MCA) from MDU that offers an
            advanced education in computing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
