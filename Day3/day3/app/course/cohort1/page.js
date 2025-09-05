import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {id} = useParams()
  return (
    <div>
        <h1>Cohort1 is best course</h1>
    </div>
  )
}

export default page