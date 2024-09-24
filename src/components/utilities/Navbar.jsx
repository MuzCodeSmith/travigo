import React from 'react'
import logoBlack from './Logo_black.png'
import Button from './Button';

function Navbar() {
  return (
    <div className='container mx-auto h-32 flex items-center justify-between'>
    <img src={logoBlack} alt="logoBlack" />

    <div className='flex items-center justify-between gap-8' >
      <a href="" className='font-chivo text-lg text-textBlack opacity-80 hover:text-colorPrimary' >Home</a>
      <a href="" className='font-chivo text-lg text-textBlack opacity-80 hover:text-colorPrimary' >Discover</a>
      <a href="" className='font-chivo text-lg text-textBlack opacity-80 hover:text-colorPrimary' >Special Deals</a>
      <a href="" className='font-chivo text-lg text-textBlack opacity-80 hover:text-colorPrimary' >Blogs</a>
      <a href="" className='font-chivo text-lg text-textBlack opacity-80 hover:text-colorPrimary' >About Us</a>
    </div>
    
    <Button title={'Register'} />
  </div>
  )
}

export default Navbar