import React from 'react'

const Container = ({Childrens}) => {
  return (
    <div className='w-full h-screen overflow-x-hidden overflow-y-scroll scroll-smooth' >
      {Childrens}
    </div>
  )
}

export default Container
