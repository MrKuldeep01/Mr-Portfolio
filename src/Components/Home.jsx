import React from "react";
import BigButton from "./BigButton";

const Home = () => {
  return (
    <div className="w-full min-h-screen pt-20  px-2 sm:px-8 flex flex-col-reverse sm:flex-row items-center justify-center">
      
      <div className="leftside w-full my-6 sm:my-4 sm:w-1/2 flex-col justify-center items-center gap-2 px-2 sm:px-8 relative">
      <h2 className="name text-4xl font-extrabold capitalize py-4 ">Kuldeep kumar 👋</h2>
      <span className="role flex items-center justify-start gap-2">
      <p className="w-1/5 border"></p>
      <p className="rolename text-lg w-auto text-gray-700/70 font-semibold">web dev.</p>
      </span>
      <p className="overview py-2 my-4 sm:w-[90%] w-full text-gray-700/70 font-semibold ">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam perspiciatis corporis ea, aspernatur asperiores.</p>
      <BigButton  Childrens={"Say hello! ☕"} className=" rounded-xl" />  
      {/* <button className="scroll text-sm font-semibold text-gray-700/70 px-4 py-2 rounded-lg bg-gray-400/10 mt-20 hidden sm:block"> scroll down 👇</button> */}
      </div>



      <div className="rightside w-full my-8  sm:w-1/2 sm:my-4 h-full flex items-center justify-center">
        <div className="image w-[250px] h-[250px] bg-black/20 rounded-[40%] rotate-[35deg] p-4 border-8 border-black shadow-2xl shadow-slate-950 ">
          <img
            src="/vite.svg"
            alt="kuldeep image"
            className="w-full h-full object-cover -rotate-[35deg] p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
