import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [profile, setProfile] = useState({
    name:'',
    image:'',
    role:'',
    description:''
  })

  const localData = JSON.parse(localStorage.getItem("all-users")) || []
  console.log(localData)
  const [users, setUsers] = useState(localData)

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(profile)
    
    setUsers(prevUsers =>[...prevUsers,profile])
  
    setProfile({
      name:'',
      image:'',
      role:'',
      description:''
    })

    
  }
  useEffect(() => {
  // this runs AFTER users is updated
  localStorage.setItem("all-users",JSON.stringify(users))
}, [users])
  
  const handleChange=(e)=>{
    setProfile({...profile,[e.target.name]:e.target.value})
  

  }
  const deleteHandler=(index)=>{
    const arr = [...users]
    arr.splice(index,1)
    setUsers(arr)
  }
  return (
    <>
      <div className='bg-black text-white'>
        <form onSubmit={(e)=>submitHandler(e)} className='flex flex-wrap justify-center p-2'>
          <input name="name" value={profile.name} onChange={handleChange} className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='Enter your name'/>
          <input name="image"  value={profile.image} onChange={handleChange} className='border-2  text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='image Url'/>
          <input name="role" value={profile.role} onChange={handleChange} className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='Enter Role'/>
          <input name="description" value={profile.description} onChange={handleChange} className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='Enter Description'/>
          <button className='border-2 text-xl active:scale-95 cursor-pointer bg-emerald-700 text-white font-semibold px-5 py-2 rounded m-2 w-[45%]'>Create User</button>

        </form>

        <div className='px-4 py-10 flex flex-wrap gap-4 text-white'>
        {users.map((user,idx)=>{
          return <Card allUsers={users} deleteHandler={deleteHandler} index={idx}  key={idx} name={user.name} image={user.image} role={user.role} description={user.description} />
        })}

        </div>
      </div>
    </>
  )
}

export default App
