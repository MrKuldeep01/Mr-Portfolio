import React from 'react'

const BigButton = ({Childrens,bgColor="bg-black/90",textColor="text-white",className="",...props}) => {
  return (
    <button className={` text-xl px-6 py-4 font-semibold ${bgColor} ${textColor} ${className} `} {...props}>
      {Childrens}
    </button>
  )
}

export default BigButton
