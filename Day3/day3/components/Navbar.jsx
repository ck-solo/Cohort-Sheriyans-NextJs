import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-cyan-600 flex items-center justify-between h-20'>  
    <h3 className='m-20'>Brand</h3>  
    <div className='flex items-center '>
    <Link className='flex m-20 justify-between' href='/'>Home</Link>
    <Link className='flex m-20 justify-between' href='/course'>Course</Link>
    <Link className='flex m-20 justify-between' href='/product'>Product</Link>
    <Link className='flex m-20 justify-between' href='/service'>Service</Link> 
    </div>
    </div>
  )
}

export default Navbar