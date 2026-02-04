import React from 'react'
import { Outlet } from 'react-router-dom'

const Course = () => {
  return (
   <>
    <div className='bg-red-500 flex flex-nowrap gap-5 text-nowrap text-white animate'><p>Sale is Live</p>
    <p>Sale is Live</p>
    <p>Sale is Live</p>
    <p>Sale is Live</p>
    <p>Sale is Live</p>
    <p>Sale is Live</p>
    <p>Sale is Live</p>
    <p>Sale is Live</p>
    <p>Sale is Live</p>
    <p>Sale is Live</p>
    </div>
    <div className='text-5xl underline font-bold fixed left-[50vw] -translate-x-1/2'>Course</div>
   <Outlet></Outlet>
    </>
  )
}

export default Course