import React from 'react'

// const Logo = ({classes="", imagePath="/mine.svg" }) => {
const Logo = ({classes="", imagePath="/mine.svg" }) => {
  return <img src={imagePath} alt="Mr kumar" className={`size-20 ${classes} `} />
}

export default Logo
