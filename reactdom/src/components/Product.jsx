import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <div  className='text-5xl mb-5 underline font-bold'>Product</div>
    <div className='mt-5 flex gap-5 text-xl font-bold underline'>
        <Link to='/product/men'>Men's Product</Link>
        <Link to='/product/women'>Women's Product</Link>
        <Outlet/>

    </div>
    </>
  )
}

export default Product