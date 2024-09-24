import { useState } from 'react';
import Navbar from './components/utilities/Navbar'
import heroImage from '../src/assets/heroImg.png'
import heroTicks from '../src/assets/logo_and_Icons/Heroticks.png'
import locationIcon from '../src/assets/logo_and_Icons/locationIcon.svg'
import searchIcon from '../src/assets/logo_and_Icons/searchIcon.svg'
import calenderIcon from '../src/assets/logo_and_Icons/calenderIcon.svg'
function App() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto flex mt-[60px]">
        {/* heroInfo */}
        <div className='flex-1 flex flex-col gap-[60px] items-start' >
          {/* title and ticks */}
          <div className="flex flex-col gap-7">
                  {/* hero title and subtitle */}
                <div className="flex flex-col gap-4 w-5/6 ">
                  <h1 className='font-abril text-[80px] leading-[100px] '>
                    Learn New Things
                    <br />
                    By Traveling
                    <br />
                    The World
                  </h1>
                  <p className='font-chivo text-[20px] leading-10 opacity-90 w-10/12 ' >Embark on a Journey of Exploration and Enlightenment to Expand Your Knowledge and Enrich Your Perspectives</p>
                </div>

                {/* ticks */}
                <div className="flex flex-row gap-12">
                    {/* Personalized  Journey */}
                  <div className="flex flex-row gap-2 items-center">
                    <div className="h-4 w-7">
                      <img className='w-full h-full object-contain' src={heroTicks} alt="" />
                    </div>
                    <span className='font-chivo font-bold text-textBlack text-lg' >Personalized  Journey</span>
                  </div>
                  {/*  Seamless  Scheduling */}
                  <div className="flex flex-row gap-2 items-center">
                    <div className="h-4 w-7">
                      <img className='w-full h-full object-contain' src={heroTicks} alt="" />
                    </div>
                    <span className='font-chivo font-bold text-textBlack text-lg' > Seamless  Scheduling</span>
                  </div>
                </div>
          </div>

          {/* search bar */}
         <div className="flex flex-row gap-[25px] w-fit bg-white items-center px-3 py-3 rounded-[60px]" >

            {/* inputs */}
            <div className="flex flex-row items-center gap-[20px]">
              {/* location icon */}
            <div className="flex flex-row gap-5 items-center h-9 px-4">
              <img src={locationIcon} alt="locationIcon" />
              <input type="text" placeholder='Location' className='font-chivo w-[120px] text-lg text-textBlack bg-transparent outline-none font-normal' name="" id="" />
              {/* <span className='font-chivo text-lg text-textBlack opacity-70 font-normal'>Location</span> */}
            </div>

            {/* divider */}
            <div className='border-r border-textBlack h-6 w-0 bg-transparent border-opacity-30'  />

              {/* calender icon */}
            <div className="flex flex-row gap-5 items-center h-9 px-4">
              <img src={calenderIcon} alt="" />
              {/* <input type="date" name="" id="" /> */}
              <span className='font-chivo text-lg text-textBlack opacity-70 font-normal'>Arrival date</span>
            </div>
            </div>

            {/* button */}
            <div className="h-12 w-12 flex items-center justify-center bg-colorPrimary rounded-[48px] hover:bg-colorPrimaryDark cursor-pointer ">
            <img src={searchIcon} />
            </div>

         </div>
        </div>
        {/* heroImg */}
        <div className="flex-[0.6] w-full ">
          <div className='h-full w-full'>
            <img src={heroImage} className='w-full h-full object-cover' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
