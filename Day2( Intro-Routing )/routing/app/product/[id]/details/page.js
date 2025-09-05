"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div>
        <h3> {id} am detail page</h3>
    </div>
  )
}

export default page