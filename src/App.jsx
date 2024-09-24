import { useState } from 'react';
import Navbar from './components/utilities/Navbar'
import heroImage from '../src/assets/heroImg.png'
function App() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto flex">
        <div className='flex-1 border' >
          <h1 className='font-abril text-[80px] leading-[100px] ps-3'>
            Learn New Things
            By Traveling
            The World
          </h1>
        </div>
        <div className="flex-[0.6] border w-full ">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </>
  )
}
export default App;
