"use client" 
import Image from 'next/image'
import img from './download.jpeg'
import React from 'react'

const page = () => { 
  return (
    <div className='mx-10'>
      <Image className='m-10' src={img} />
        <h1>Apna College course</h1>
    </div>
  )
}

export default page