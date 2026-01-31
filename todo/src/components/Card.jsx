import React from 'react'

const Card = (props) => {
    console.log(props)
    const {name,image,role,description} = props
    const index = props.index
    const deleteHandler = props.deleteHandler
    
    
    
  return (
    <div className='w-[23vw] rounded-xl text-center p-8 flex flex-col items-center justify-center  bg-white text-black'>
        <img className='h-24 w-24 rounded-full object-cover object-center' src={image}alt="" />
        <h1 className='text-2xl mt-2 font-semibold'>{name}</h1>
        <h5 className='text-lg text-blue-500 font-semibold my-2'>{role}</h5>
        <p className='text-sm font-medium leading-tight'>{description}</p>
        <button onClick={()=>deleteHandler(index)} className='bg-red-600 text-white mt-2 font-semibold px-4 rounded py-2 text-xs cursor-pointer active:scale-95 '>Remove</button>
    </div>
  )
}

export default Card