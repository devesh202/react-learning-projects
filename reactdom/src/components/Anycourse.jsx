import React from 'react'
import { useParams } from 'react-router-dom'

const Anycourse = () => {
    const params = useParams();
  return (
    <div className='text-5xl underline font-bold fixed left-[50vw] -translate-x-1/2'>{params.courseId} Course page</div>
  )
}

export default Anycourse