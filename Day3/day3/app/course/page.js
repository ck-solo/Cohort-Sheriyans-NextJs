import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {params} = useParams()
  return (
    <div>
        <h3>All Courses</h3>
    </div>
  )
}

export default page