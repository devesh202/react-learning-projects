import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
const navigate = useNavigate() 
  return (

    <div className="absolute bottom-0 w-screen flex items-center justify-between p-5 bg-gray-400 ">
    <h2>Footer</h2>
    <button onClick={()=>{
        navigate('/course')
    }} className='bg-green-400 h-fit text-white font-bold border-amber-100 cursor-pointer active:scale-95 border-2 px-4 py-2'> Explore courses</button>
    </div>
  )
}

export default Footer