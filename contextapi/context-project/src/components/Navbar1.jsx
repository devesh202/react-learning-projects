import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar1 = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div className='w-full flex justify-between   h-10 bg-emerald-600'>

        <h1>Navbar</h1>
        <h2>{theme}</h2>
        <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')} className='p-3 bg-amber-950 active:scale-95'>Change Theme</button>
    </div>
  )
}

export default Navbar1