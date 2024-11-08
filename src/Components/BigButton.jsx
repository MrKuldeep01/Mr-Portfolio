import React from 'react'

const BigButton = ({Children,bgColor="bg-black/80",textColor="text-white",className="",...props}) => {
  return Children && (
    <button className={`border border-dashed capitalize text-xl px-4 py-3 rounded-xl font-semibold hover:bg-black ${bgColor} ${textColor} ${className} `} {...props}>
      {Children}
    </button>
  )
}

export default BigButton
