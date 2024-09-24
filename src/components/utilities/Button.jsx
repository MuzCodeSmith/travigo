import React from 'react'

function Button({title}) {
  return (
   <>
    <button className='font-chivo bg-colorPrimary text-base rounded-[8px] hover:bg-[#f62e02] text-white h-14 px-8  ' >{title}</button>
   </>
  )
}

export default Button