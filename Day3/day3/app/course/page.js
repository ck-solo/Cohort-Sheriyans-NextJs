"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {params} = useParams()
  return (
    <div>
        <h3 className='text-4xl mx-8'>All Courses</h3>
        <div className='mx-10 my-5 flex gap-10 text-2xl'>
            <Link href='/course/apnacollege'>Apna College</Link>
            <Link href='/course/codeaurchai'>Code aur Chai</Link>
            <Link href='/course/sheryianscodingschool'>Sheryians Coding School</Link>
        </div>
    </div>
  )
}

export default page