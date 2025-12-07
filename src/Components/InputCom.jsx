import React, { useId } from "react";

const Input = ({
  label,
  type = "text",
  name = "textfield",
  placeholder = "",
  className = "",
  parentClassName = "",
  value,
  ...props
}) => {
  const id = useId();
  const inputId = `${id}-${name}`;

  return (
    <div className={`px-4 py-2 mt-2 rounded-xl w-full flex items-center justify-between border border-white/30 relative bg-white/10 backdrop-blur-sm ${parentClassName}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className="text-xs text-slate-900/90 font-bold backdrop-blur-lg bg-white/40 z-10 py-1 px-3 rounded-md absolute -top-3 left-2 shadow-sm"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        className={`px-4 py-3 bg-transparent border-none w-full outline-none text-slate-900/90 text-base font-medium placeholder:text-slate-700/60 focus:ring-2 focus:ring-blue-500/50 rounded-lg transition-all duration-300 ${className}`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
