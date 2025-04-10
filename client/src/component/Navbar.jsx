import React from 'react'
import logo from '../../public/osumare-logo.png'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-4 py-1 w-full border-b border-slate-200 fixed bg-white' >
        <div className="logo">
            <img src={logo} alt="logo.png" loading='lazy' className='w-18 md:w-28'  />
        </div>
        <button className='border border-slate-200 px-3  text-slate-600 pmd:x-4 md:py-1 rounded-2xl text-nowrap' >Contact us</button>
    </nav>
  )
}

export default Navbar