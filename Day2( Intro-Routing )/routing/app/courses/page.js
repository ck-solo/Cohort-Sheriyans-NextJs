import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h3>All Courses</h3>
        <Link className='px-2 text-3xl ' href='/courses/cohort1/'>Cohort1</Link>
        <Link className='px-2 text-3xl ' href='/courses/cohort2/'>Cohort2</Link>
        <Link className='px-2 text-3xl ' href='/courses/cohort3/'>Cohort3</Link>
    </div>
  )
}

export default page