import React, { useState } from "react";
import { ContactCard, BigButton, Input } from "./index";
import envConfig from "../../config/envConfig";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handlesubmit(e) {
    e.preventDefault();
    console.log("run to hua...");
    try {
      setFormData((formData.access_key = envConfig.formAccessKey));
      if (formData.access_key) {
        const json = JSON.stringify(formData);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json());
        if (res.success) {
          console.log("Success", res);
          setSuccessMessage(res.message);
          
          setTimeout(() => {
            setSuccessMessage("");
            setFormData({
              name: "",
              mail: "",
              message: "",
            });
            e.target.reset();
          }, 4000);
        }
      }
    } catch (error) {
      setResponseMessage(" something went wrong! please try again later... ");
      console.log("error in handlesubmit :: Contact.jsx :: Components" + error);
    }
  }
  return (
    <div className="content w-full min-h-screen pt-24 px-10 flex md:flex-row items-center justify-center flex-col gap-4">
      <div className="leftbox w-full h-full md:w-[30%]  md:h-screen flex-col items-end justify-center gap-0">
        <h1 className="text-slate-900/90 text-3xl font-bold text-center py-2 px-4 my-4">
          Talk to me
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
        <form
          onSubmit={handlesubmit}
          className="contenttocontact md:w-[80%] w-full flex-col md:px-8 px-1 py-2 "
        >
          {/* <input
            type="hidden"
            name="access_key"
            value={envConfig.formAccessKey}
          /> */}
          <Input
            label={"name "}
            name="name"
            type="text"
            placeholder="enter your name"
            onChange={formChange}
            parentClassName="my-8 "
          />

          <Input
            label={"mail "}
            type="email"
            name="mail"
            placeholder="enter your mail"
            onChange={formChange}
            parentClassName="my-8 "
          />
          {/* ==================== textarea ============ */}
          <div
            className={`px-4 py-2 mt-2 rounded-xl w-full flex items-center justify-between border border-white/20 relative mb-2`}
          >
            <label
              htmlFor="message"
              className="text-xs text-gray-700/80 font-bold bg-white/40 z-10 py-1 px-2 rounded-md absolute -top-3 left-2 "
            >
              {" "}
              message{" "}
            </label>
            <textarea
              id={"message"}
              name={"message"}
              onChange={formChange}
              className={`px-4 py-2 bg-transparent border-none w-full outline-none text-base text-white/70 font-semibold min-h-[120px] resize-none placeholder:text-white/70`}
              placeholder="message you wanna send 🚀😇"
              spellCheck="false"
            />
          </div>
          {responseMessage && (
            <p className="text-red-600 my-2 font-semibold bg-white/20 rounded-lg px-4 py-2">
              {responseMessage}
            </p>
          )}
          {successMessage && (
            <p className="text-green-500/90 my-2 font-mono text-sm font-bold bg-white/40 rounded-lg px-4 py-2">
              {successMessage}
            </p>
          )}
          <BigButton
            Children={
              <>
                send message <i className="ri-send-plane-fill"></i>
              </>
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
