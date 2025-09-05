"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {id} = useParams()
  return (
    <div>
        <h3 className='capitalize'> {id}'s collection</h3>
    </div>
  )
}

export default page