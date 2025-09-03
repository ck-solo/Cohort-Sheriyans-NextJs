import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 bg-blue-700 flex items-center px-4 justify-between'>
        <h1>Lucy</h1>
        <div className=' flex gap-10 px-10'>
            <Link href='/'>Home</Link>
            <Link href='/menu'>Menu</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar