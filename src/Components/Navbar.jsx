import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-900 text-white py-4' >
      <div className='logo'>
        <span className='font-bold text-xl mx-6'>iTask</span>
      </div>
      <ul className='flex gap-10 mx-5'>
        <li className='cursor-pointer hover:font-bold translate-all duration-200'>Home</li>
        <li className='cursor-pointer hover:font-bold translate-all duration-200'>Your Tasks</li>
      </ul>

    </nav>
  )
}

export default Navbar
