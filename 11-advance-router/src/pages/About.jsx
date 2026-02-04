import React from 'react'
import { Link , Outlet } from 'react-router-dom'
const About = () => {
  return (
    <div>
     <div className='flex justify-center gap-10 py-4'>
      <Link className='text-lg font-bold' to="men">Men</Link>
      <Link className='text-lg font-bold' to="women">Women</Link>
     </div>
     <Outlet/>
    </div>
  )
}

export default About
