import React from "react";
import {EducationCard} from "./"
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
              
        <EducationCard degreename={"Master of Computer Application"} uniname={"from MDU ROHTAK"} percent="75%" desc="Pursuing a Master of Computer Applications (MCA) from MDU that offers an
            advanced education in computing." session="2022-2024"  />

        <EducationCard degreename={"Bachelor of Computer Application"} uniname={"from MDU ROHTAK"} percent="64%" desc="BCA from MDU provides a solid foundation in computer applications, which opens up various career opportunities in the field of IT." session="2019-2022"  />

       
      </div>
    </div>
  );
};

export default Education;
