import React, { useEffect } from 'react'
import axios from 'axios'
import instance from '../utils/axios'
const Home = () => {
  const getproduct = async () => {
    
    try{
      const {data} = await instance.get("/products")
      console.log(data)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    console.log("Home.jsx mounted");
    getproduct();
    return ()=>console.log("Home.jsx unmounted");
  })
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct}>Get Product</button>

    </div>
  )
}

export default Home