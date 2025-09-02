"use client"
import React, { useState } from 'react'


const page = () => {

  const [num, setnum] = useState(0)
  return (
    <>
    <div>
      <h1>The value of num is {num}</h1>
      <button onClick={()=>{setnum(10)}}>Increament </button>
    </div>
    </>
  )
}

export default page