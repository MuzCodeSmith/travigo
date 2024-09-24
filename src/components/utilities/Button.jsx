import React from 'react'

function Button({title}) {
  return (
   <>
    <button className='font-chivo bg-colorPrimary text-sm rounded-[8px] hover:bg-[#f62e02] text-white h-12 px-7 py-3 ' >{title}</button>
   </>
  )
}

export default Button