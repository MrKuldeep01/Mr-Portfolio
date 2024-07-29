import React from "react";
import { Link } from "react-router-dom";
const ContactCard = ({linkicon,link,linktype,linkid}) => {
  return link && linkid && (
    <Link to={link} className= "border border-gray-900 flex flex-col rounded-lg px-2 py-4 m-2 text-center justify-between w-auto md:w-[180px] md:max-h-[145px]  ">
      {linkicon ? 
      <span className="block icons text-lg font-bold p-2 text-black/90">{linkicon}</span> : ""
    }
    {linktype ? 
      <span className="block linktype text-base font-semibold text-slate-800/80">
        {linktype}
      </span>: ""
      }

      <span className="block linkid text-sm font-semibold text-slate-800/50">
      {linkid}
      </span>
      <p className="pointer  text-xs font-semibold text-slate-800/50">write me 👉</p>
    </Link>
  );
};

export default ContactCard;
