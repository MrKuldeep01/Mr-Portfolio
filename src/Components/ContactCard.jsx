import React from "react";

const ContactCard = ({linkicon, link, linktype, linkid}) => {
  return link && linkid ? (
    <a 
      href={link} 
      target={link.startsWith('mailto:') || link.startsWith('tel:') ? '_self' : '_blank'}
      rel={link.startsWith('mailto:') || link.startsWith('tel:') ? '' : 'noopener noreferrer'}
      className="group border border-white/40 bg-white/20 backdrop-blur-md flex flex-col rounded-xl px-4 py-5 text-center justify-between w-full hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      {linkicon && (
        <span className="block icons text-3xl font-bold pt-1 text-slate-900 mb-2 group-hover:scale-110 transition-transform duration-300">
          {linkicon}
        </span>
      )}
      {linktype && (
        <span className="block linktype text-base pt-1 font-bold text-slate-900 mb-1">
          {linktype}
        </span>
      )}
      <span className="block linkid text-sm pt-1 font-medium text-slate-700/80 break-all">
        {linkid}
      </span>
    </a>
  ) : null;
};

export default ContactCard;
