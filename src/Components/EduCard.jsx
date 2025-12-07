import React from 'react'

const EducationCard = ({
  degreename,
  percent = "64",
  uniname,
  session = "year-year",
  desc = "details of your degree to showcase 💜"
}) => {
  const percentNum = `${Number(percent) || percent}%`;
  
  return degreename && uniname ? (
    <div
      id={degreename}
      className="group w-full max-w-md md:min-w-[400px] h-auto flex-col px-6 py-6 items-center border border-white/30 rounded-2xl justify-center bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
    >
      <div className="top w-full flex items-center justify-center gap-4 relative border-b-2 border-white/30 pb-4 mb-4">
        <img
          src="/mduLogo.png"
          alt="MDU Logo"
          className="hidden sm:inline-block md:hidden lg:inline-block h-8 absolute top-0 left-0 opacity-80"
        />
        <h2 className="text-xl font-bold text-center text-slate-900 mb-2">
          {degreename}
        </h2>
        <div className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-white/20 rounded-full overflow-hidden">
          <div 
            style={{ width: percentNum }}
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
          ></div>
        </div>
        <span className="absolute -bottom-3 right-0 text-xs text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full shadow-md">
          {percentNum}
        </span>
      </div>
      
      <div className="details my-4 flex gap-2 items-center justify-between flex-wrap">
        <span className="px-3 py-2 text-sm font-bold text-slate-900 bg-white/30 rounded-lg">
          {uniname}
        </span>
        <span className="px-3 py-2 text-sm font-semibold text-slate-800/80 bg-white/20 rounded-lg">
          {session}
        </span>
      </div>
      
      <p className="edudetails w-full text-slate-800/90 font-medium text-sm text-justify block mx-auto my-4 leading-relaxed">
        {desc}
      </p>
    </div>
  ) : null;
}

export default EducationCard
