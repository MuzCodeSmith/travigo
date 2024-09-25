import React from 'react'
import icons from '../../assets/icons'

const {arrowRight,arrowLeft} = icons;

function Trending() {
  return (
    <div className='container mx-auto' >
     <div className='flex flex-row items-end justify-between'>
            {/* title and subtitle */}
            <div className="flex flex-col gap-2">
              <h1 className='font-abril text-[48px] leading-[55px] '>
              Trending this Month
              </h1>       
              <p className='font-chivo text-[20px] leading-10 opacity-90  ' >From Historical cities to natural splendours, come see the best of world!</p>
          </div>

          {/* slider buttons */}
            <div className="flex flex-row items-center gap-[30px] cursor-pointer">
                  {/* arrow left */}
                  <div className='flex items-center bg-white  hover:bg-gray-100 rounded-full justify-center h-14 w-14'>
                    <img src={arrowLeft} alt="playIcon"/> 
                  </div>
                            {/* arrow right */}
                  <div className='flex items-center bg-white  hover:bg-gray-100 rounded-full justify-center h-14 w-14'>
                    <img src={arrowRight} alt="playIcon"/>
                  </div>        
            </div>
     </div>
    </div>
  )
}

export default Trending