import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
    const data = useContext(ThemeDataContext)
  return (
    <div className='flex  w-screen h-10 bg-blue-700'>
        <h1>This is a footer</h1>
        <h2>{data}</h2>
    </div>
  )
}

export default Footer