import React from "react";
import { ContactCard, BigButton, Input } from "./index";
const Contact = () => {
  return (
    <div className="content w-full min-h-screen pt-24 px-10 flex md:flex-row items-center justify-center flex-col gap-4">
      <div className="leftbox w-full h-full md:w-[30%]  md:h-screen flex-col items-end justify-center gap-0">
        <h1 className="text-slate-900/90 text-3xl font-bold text-center py-2 px-4 my-4">
          {" "}
          Talk to me{" "}
        </h1>
        <div className="talkcards w-full h-auto flex-wrap flex justify-center px-4 py-2 ">
          <ContactCard
            link={"mailto:kkharoliya20@gmail.com"}
            linkicon={<i className="ri-mail-add-fill"></i>}
            linktype={"Email"}
            linkid={"kkharoliya20@gmail.com"}
          />
          <ContactCard
            linkicon={<i className="ri-whatsapp-fill"></i>}
            link={"https://wa.me/919728541543"}
            linktype={"Whatsapp"}
            linkid={"+ 91-9728541543"}
          />
          <ContactCard
            link={"https://linkedin.com/in/kuldeep-kumar-a4b71a258"}
            linkicon={<i className="ri-linkedin-fill"></i>}
            linktype={"LinkedIn"}
            linkid={"kuldeep-kumar-a4b71a258"}
          />
        </div>
      </div>
      <div className="rightbox md:w-[65%] w-full md:h-auto min-h-screen flex flex-col items-center justify-start">
        <h1 className="text-slate-900/90 text-3xl font-bold text-center py-2 px-4 my-4">
          {" "}
          Contact me{" "}
        </h1>
        <div className="contenttocontact md:w-[60%] w-full flex-col md:px-6 px-1 py-2 ">
          <Input
            label={"name "}
            name="name"
            placeholder="enter your name"
            className=""
            parentClassName="my-8 "
          />
          <Input
            label={"mail "}
            name="mail"
            placeholder="enter your mail"
            className=""
            parentClassName="my-8 "
          />
          {/* ==================== textarea ============ */}
          <div
            className={`px-4 py-2 mt-2 rounded-xl w-full flex items-center justify-between border border-gray-700/20 relative my-8`}
          >
            <label
              htmlFor="message"
              className="text-xs text-gray-700/60 font-bold  bg-white z-10 py-1 px-2 rounded-md absolute -top-3 left-2 "
            >
              {" "}
              message{" "}
            </label>
            <textarea
              id={"message"}
              name={"message"}
              className={`px-4 py-2 bg-transparent border-none w-full outline-none text-base font-semibold min-h-[120px] resize-none`}
              placeholder="message you wanna send 🚀😇"
              spellCheck="false"
            />
          </div>
          <BigButton
         Children={<>send message  <i class="ri-send-plane-fill"></i></>}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
