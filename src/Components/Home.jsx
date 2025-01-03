import React from "react";
import { BigButton } from "./index";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen pt-20  px-2 sm:px-8 flex flex-col-reverse sm:flex-row items-center justify-center">
      <div className="leftside w-full my-6 sm:my-4 sm:w-1/2 flex-col justify-center items-center gap-2 px-2 sm:px-8 relative">
        <h2 className="name text-4xl font-extrabold capitalize py-4 ">
          Kuldeep kumar 👋
        </h2>
        <span className="role flex items-center justify-start gap-2">
          <p className="w-1/5 border border-white/40"></p>
          <p className="rolename text-lg w-auto text-gray-700/70 font-semibold">
            web dev.
          </p>
        </span>
        <p className="overview py-2 my-4  sm:w-[90%] w-full text-gray-700/70 font-semibold ">
          A keen and enthusiastic fresher web developer, always ready to learn
          new things. Passionate about building web solutions and improving
          skills every day.
        </p>
        <BigButton
          Children={"Say hello! ☕"}
          onClick={() => {
            navigate("/contact");
          }}
          className=" rounded-xl"
        />
      </div>

      <div className="rightside w-full my-8  sm:w-1/2 sm:my-4 h-full flex items-center justify-center">
        <div className="image w-[250px] h-[250px] rounded-[40%] rotate-[40deg] border-4 border-[#9E9E9E] shadow-lg shadow-slate-950 overflow-hidden bg-[#9E9E9E]">
          <img
            src="/me.png"
            alt="kuldeep image" 
            className="w-full h-full object-fill -rotate-[35deg] rounded-[45%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
