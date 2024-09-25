import React from 'react'
import images from '../../assets/images';
import icons from '../../assets/icons';
const {exploreImg,glassesPattern,cameraPattern} = images;
const {playIcon} = icons;

function Explore() {
  return (
    <div className='bg-[#DBE6DC] relative h-[650px] mt-[160px] flex items-center '>
        {/* main content */}
        <div className="container mx-auto my-auto  ">
            <div className="flex flex-row items-center justify-center">
                {/* explore img */}
                <div className="flex-1">
                    <div className="w-[610px] h-[488px] flex items-center justify-center ">
                        <img src={exploreImg} className='h-full w-full object-contain' ></img>
                    </div>
                </div>
                {/* explore info */}
                <div className="flex-[.8] flex flex-col items-start gap-11">
                    {/* title and subtitle */}
                    <div className="flex flex-col gap-7">
                        <h1 className='font-abril text-[60px] leading-[80px] '>
                            Life is short
                            <br />
                            and the world
                            <br />
                            is wide.
                        </h1>
                        <p className='font-chivo text-[20px] leading-10 opacity-90 w-10/12 ' >To get the best of your adventure you just need to leave and go where you like. we are waiting for you.</p>
                    </div>

                    {/* buttons */}
                    <div className="flex flex-row items-center gap-[30px] cursor-pointer">
                        <button className='font-chivo bg-colorPrimary text-base rounded-full hover:bg-[#f62e02] text-white h-14 px-8  ' >Explore More</button>
                        <div className='flex items-center bg-white  hover:bg-gray-100 rounded-full justify-center h-14 w-14'>
                            <img src={playIcon} alt="playIcon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* overlays 1 */}
        <div className="h-[135px] w-[135px] absolute left-[-40px] top-16">
            <img className='object-contain' src={glassesPattern} alt="" />
        </div>
        {/* overlays 2 */}
        <div className="h-[125px] absolute  right-7 bottom-[-60px] w-[125px]">
            <img className='object-contain' src={cameraPattern} alt="" />
        </div>
    </div>
  )
}

export default Explore