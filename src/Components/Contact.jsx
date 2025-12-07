import React, { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear messages when user starts typing
    if (responseMessage) setResponseMessage("");
    if (successMessage) setSuccessMessage("");
  };

  async function handlesubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");
    setSuccessMessage("");

    try {
      const submitData = {
        ...formData,
        access_key: envConfig.formAccessKey,
      };

      const json = JSON.stringify(submitData);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSuccessMessage(res.message || "Message sent successfully! 🎉");
        setTimeout(() => {
          setSuccessMessage("");
          setFormData({
            name: "",
            mail: "",
            message: "",
          });
          e.target.reset();
        }, 5000);
      } else {
        setResponseMessage(res.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Something went wrong! Please try again later...");
      console.log("error in handlesubmit :: Contact.jsx :: Components", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="content w-full min-h-screen pt-28 sm:pt-32 md:pt-36 px-4 sm:px-8 pb-12">
      {/* Header Section */}
      <div className={`w-full max-w-7xl mx-auto mb-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        <h1 className="text-center w-full text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
          Contact Me
        </h1>
        <p className="text-center text-base text-slate-700/70">
          Let's connect and discuss your next project
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* Left Side - Contact Info */}
        <div className={`leftbox w-full lg:w-2/5 flex flex-col gap-6 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <i className="ri-phone-line"></i>
              Get in Touch
            </h2>
            <p className="text-slate-700/80 text-sm mb-6">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
            </p>
            <div className="talkcards w-full flex flex-col gap-3">
              <ContactCard
                link={"mailto:kkharoliya20@gmail.com"}
                linkicon={<i className="ri-mail-add-fill"></i>}
                linktype={"Email"}
                linkid={"kkharoliya20@gmail.com"}
              />
              <ContactCard
                linkicon={<i className="ri-whatsapp-fill"></i>}
                link={"https://wa.me/919728541543"}
                linktype={"WhatsApp"}
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
        </div>
        
        {/* Right Side - Contact Form */}
        <div className={`rightbox w-full lg:w-3/5 flex flex-col transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <i className="ri-message-3-line"></i>
              Send a Message
            </h2>
            <p className="text-slate-700/80 text-sm mb-6">
              Fill out the form below and I'll get back to you as soon as possible
            </p>
            <form
              onSubmit={handlesubmit}
              className="w-full flex flex-col"
            >
              <Input
                label={"Name"}
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={formChange}
                required
                parentClassName="mb-4"
              />

              <Input
                label={"Email"}
                type="email"
                name="mail"
                placeholder="your.email@example.com"
                value={formData.mail}
                onChange={formChange}
                required
                parentClassName="mb-4"
              />
              
              <div className="px-4 py-2 mt-2 rounded-xl w-full flex items-center justify-between border border-white/30 relative mb-4 bg-white/10 backdrop-blur-sm">
                <label
                  htmlFor="message"
                  className="text-xs text-slate-900/90 font-bold bg-white/40 backdrop-blur-lg z-10 py-1 px-3 rounded-md absolute -top-3 left-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={formChange}
                  required
                  className="px-4 py-3 bg-transparent border-none w-full outline-none text-base text-slate-900/90 font-medium min-h-[140px] resize-none placeholder:text-slate-700/60 focus:ring-2 focus:ring-blue-500/50 rounded-lg transition-all duration-300"
                  placeholder="Your message here... 🚀"
                  spellCheck="false"
                />
              </div>
              
              {responseMessage && (
                <div className="my-3 p-3 bg-red-100/80 border border-red-300 rounded-lg">
                  <p className="text-red-700 font-semibold text-sm flex items-center gap-2">
                    <i className="ri-error-warning-line"></i>
                    {responseMessage}
                  </p>
                </div>
              )}
              
              {successMessage && (
                <div className="my-3 p-3 bg-green-100/80 border border-green-300 rounded-lg">
                  <p className="text-green-700 font-semibold text-sm flex items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i>
                    {successMessage}
                  </p>
                </div>
              )}
              
              <BigButton
                Children={
                  <>
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin inline-block mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <i className="ri-send-plane-fill ml-2"></i>
                      </>
                    )}
                  </>
                }
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                bgColor="bg-gradient-to-r from-blue-600 to-purple-600"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
