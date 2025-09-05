import Image from 'next/image'
import React from 'react'
import img from './images.jpeg'

const page = () => {
  return (
    <div className='m-10'>
      <Image className='mx-10 h-50 w-100'  src={img} />
        <h1 className='mx-40'>Code aur Chai</h1>
    </div>
  )
}

export default page