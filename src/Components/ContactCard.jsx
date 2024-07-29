import React from "react";
import { Link } from "react-router-dom";
const ContactCard = ({linkicon,link,linktype,linkid}) => {
  return link && linkid && (
    <Link to={link} className= "border border-gray-700/40 flex flex-col rounded-lg px-2 py-4 m-2 text-center justify-between w-auto md:w-[180px] md:max-h-[145px]  ">
      {linkicon ? 
      <span className="block icons text-lg font-bold pt-1 text-black/90">{linkicon}</span> : ""
    }
    {linktype ? 
      <span className="block linktype text-sm pt-1 font-semibold text-slate-800/80">
        {linktype}
      </span>: ""
      }

      <span className="block linkid text-xs pt-1 font-semibold text-slate-800/50">
      {linkid}
      </span>

    </Link>
  );
};

export default ContactCard;
