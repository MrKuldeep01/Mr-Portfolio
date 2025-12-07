import React, { useEffect, useState } from "react";
import { EducationCard } from "./";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="education w-full min-h-screen flex flex-col items-center justify-start px-4 sm:px-8">
      <div className={`pt-28 sm:pt-32 md:pt-36 w-full mb-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        <h1 className="name text-center w-full text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
          Education
        </h1>
        <p className="subheading font-semibold text-center text-base text-slate-700/70">
          My educational journey
        </p>
      </div>
      
      <div className="bottom w-full max-w-6xl h-auto my-6 flex flex-col lg:flex-row gap-6 lg:gap-8 px-2 py-12 items-center justify-center">
        <div className={`transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <EducationCard 
            degreename={"Master of Computer Application"} 
            uniname={"MDU Rohtak"} 
            percent="71" 
            desc="Completed Master of Computer Applications (MCA) from MDU, gaining advanced knowledge in computing, software development, and modern technologies." 
            session="2022-2024"
          />
        </div>
        
        <div className={`transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <EducationCard 
            degreename={"Bachelor of Computer Application"} 
            uniname={"MDU Rohtak"} 
            percent="64" 
            desc="Completed Bachelor of Computer Applications (BCA) from MDU, establishing a solid foundation in computer applications and IT fundamentals." 
            session="2019-2022"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
