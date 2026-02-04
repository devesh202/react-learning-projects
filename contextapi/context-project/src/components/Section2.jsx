import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Section2 = () => {
    const data = useContext(ThemeDataContext)
    console.log(data)
  return (
    <div className='flex text-white'>
        <h1>section2</h1>
        <h2>{data}</h2>
    </div>
  )
}

export default Section2