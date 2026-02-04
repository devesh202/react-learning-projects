import React, { useState } from 'react'

const Navbar = (props) => {
     const [newTheme,setNewTheme] = useState('')
     
  return (
    <div>
        <h1>Theme is {props.theme}</h1>

        <form onSubmit={(e)=>{
        e.preventDefault()
        props.changeTheme(newTheme)
        setNewTheme('')
        
      }}>
        <input value={newTheme} onChange={(e)=>{

          setNewTheme(e.target.value)
        }} type="text" placeholder='Enter theme' />
        <button>Submit</button>
      </form>
    </div>
    
  )
}

export default Navbar