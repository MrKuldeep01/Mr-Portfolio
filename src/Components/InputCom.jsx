import React from "react";

const Input = ({
  label,
  type = "text",
  name = "textfield",
  placeholder = "",
  className = "",
  parentClassName = "",
  ...props
}) => {
  const id = String(Date.now());
  return (
    <div className={`px-4 py-2 mt-2 rounded-xl w-full flex items-center justify-between border border-gray-700/20 relative ${parentClassName}`}>
      {label && <label htmlFor={id+name}  className="text-xs text-gray-700/60 font-bold  bg-white z-10 py-1 px-2 rounded-md absolute -top-3 left-2 " >  {label} </label>}
      <input
      id={id+name}
        name={name}
        type={type}
        className={`px-4 py-2 bg-transparent border-none w-full outline-none text-base font-semibold ${className} `}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
