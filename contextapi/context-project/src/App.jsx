import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import Sections from './components/Sections'
import Footer from './components/Footer'

const App = () => {
  const [theme,setTheme] = useState('light')
 
  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  }
    return (
    <div className='text-white'>
      {/* <h1>Theme is {theme}</h1>
      <Navbar theme={theme} changeTheme={changeTheme}/>
      <button/> */}
      <Navbar1/>
      <Sections/>
      <Footer/>

      
    </div>

    
  )
}

export default App