import React from 'react'

const EducationCard = ({degreename,percent="64",uniname,session="year-year",desc="details of your degree to showcase 💜"}) => {
  const percentNum = Number(percent) + "%" || percent + "%" ;
  return degreename && uniname && (
    <div
    id={degreename}
    className=" left-most w-[90%]  md:min-w-[40%] md:min-h-[228px] h-auto flex-col px-4 py-4  items-center border border-black/30 rounded-lg justify-center"
  >
    <div className="top w-full flex items-center justify-center gap-4 relative border-b-2 border-gray-800/40">
      <img
        src="/mduLogo.png"
        alt="mdu"
        className=" hidden sm:inline-block md:hidden lg:inline-block h-6 absolute top-0 left-0"
      />
      <h2 className="skillheader mb-4 w-full text-center text-lg font-semibold text-slate-900">
        {degreename}
      </h2>
      <p style={{width:`${percentNum}`}} className={`h-[2px] rounded-full bg-black absolute -bottom-[2px] left-0`}></p>
      <span className=" absolute -bottom-3 right-0 text-xs text-slate-700/50 bg-white px-1 py-1 rounded-lg ">
        {percentNum}
      </span>
    </div>
    <div className="details my-4 flex gap-1 sm:gap-2 items-center justify-between flex-wrap">
      <span className="sm:px-4 px-1 py-2 sm:text-base text-xs font-semibold text-slate-800/70">
        {uniname}
      </span>
      <span className="sm:px-4 px-1 py-2 text-xs sm:text-sm font-semibold text-slate-800/70">
        
        ({session})
      </span>
    </div>
    <p className="edudetails w-[90%] text-slate-800/30 font-semibold text-sm text-justify block mx-auto  my-4">
    {desc}
    </p>
  </div>
  )
}

export default EducationCard
