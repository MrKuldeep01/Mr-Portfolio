import React from 'react'
import {ContactCard} from "./index"
const Contact = () => {
  return (
    <div className="content w-full min-h-screen pt-24 px-10 flex md:flex-row items-center justify-center flex-col gap-4">
      <div className="leftbox w-full h-full md:w-[30%]  md:h-screen flex-col items-center justify-center gap-0">
        <h1 className='text-slate-900/90 text-3xl font-bold text-center py-2 px-4 my-4'> Talk to me </h1>
        <div className="talkcards w-full h-auto flex-wrap flex justify-center px-4 py-2 ">

        <ContactCard link={"mailto:kkharoliya20@gmail.com"} linkicon={"i"} linktype={"Email"} linkid={"kkharoliya20@gmail.com"} />
        <ContactCard link={"https://wa.me/919728541543"} linktype={"Whatsapp"} linkid={"+ 91-9728541543"} />
        <ContactCard link={"https://linkedin.com/in/kuldeep-kumar-a4b71a258"} linktype={"LinkedIn"} linkid={"kuldeep-kumar-a4b71a258"} />
      </div>
        </div>
      <div className="rightbox bg-blue-300 md:w-[70%] w-full md:h-auto h-screen">
      <h1 className='text-slate-900/90 text-3xl font-bold text-center py-2 px-4 my-4'> Contact me </h1>        
      <div className="contenttocontact w-full flex-col "></div>
      </div>
    </div>
  )
}

export default Contact
