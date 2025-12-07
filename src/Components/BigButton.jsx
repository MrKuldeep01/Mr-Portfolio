import React from 'react'

const BigButton = ({
  Children,
  bgColor = "bg-gradient-to-r from-blue-600 to-purple-600",
  textColor = "text-white",
  className = "",
  disabled = false,
  ...props
}) => {
  return Children ? (
    <button 
      className={`
        capitalize text-lg sm:text-xl px-6 py-3 rounded-xl font-semibold 
        transition-all duration-300 transform hover:scale-105 active:scale-95
        shadow-lg hover:shadow-xl
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${bgColor} ${textColor} ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {Children}
    </button>
  ) : null;
}

export default BigButton
