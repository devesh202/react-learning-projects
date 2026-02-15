import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Mainroutes from './routes/Mainroutes'
const App = () => {
  return (
    <div className='w-screen h-screen bg-gray-800 text-white'>
      <Navbar />
      <Mainroutes/>

      
    </div>
  )
}

export default App