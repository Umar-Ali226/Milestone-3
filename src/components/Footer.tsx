import React from 'react'
import { FaCopyright } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <main>
    <div className='bg-blue-600 text-black text-lg flex flex-col items-center'>
           <div className='flex items-center gap-1 mt-2'><p>Thanks For Visiting!</p>
           <div className='text-md'><FaHeart /></div></div> 
        <div className='p-5 text-center mx-5 sm:p-1'><p>Stay curious, explore deeply, 
          and let knowledge inspire you to achieve greater heights. </p> </div>
    <div className='flex justify-center items-center gap-2 mb-2'>
    <FaCopyright />
    <p>2025 Umar`s Blog. All Rights Reserved.</p>
    </div>
    </div>
    </main>
  )
}

export default Footer
