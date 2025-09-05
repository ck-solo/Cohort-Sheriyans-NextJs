import Image from 'next/image'
import React from 'react'
import img from './download.jpeg'

const page = () => {
  return (
    <div className='m-10'>
      <Image src={img}/>
        <h1>Sheryians Coding School</h1>
    </div>
  )
}

export default page