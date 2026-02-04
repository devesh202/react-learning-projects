import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar1 = () => {
    const data = useContext(UserDataContext)
    console.log(data)
  return (
    <div className='w-full h-10 bg-emerald-600'>
        <h1>This is a navbar</h1>
    </div>
  )
}

export default Navbar1