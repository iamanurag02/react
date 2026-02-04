import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-gray-200 p-4 text-xl font-semibold' >
        <h3>Anuarg Pathak</h3>
      <div className=' flex gap-10  text-lg font-medium '>
             <Link to="/">Home</Link> 
             <Link to="/about">About</Link> 
              <Link to="/contact">Contact</Link>          
      </div>
    </div>
  )
}

export default Navbar
