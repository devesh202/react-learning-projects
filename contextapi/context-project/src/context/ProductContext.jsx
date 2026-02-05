import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { getData } from '../api/productAPi'

export const ProductDataContext = createContext()

const ProductContext = ({ children }) => {
  const [productData, setProductData] = useState([])
  const setData =async()=>{
    const data = await getData()
    console.log(data)
    setProductData(data)
  }

  

  useEffect(() => {
    setData()
  }, [])
 

  return (
    <ProductDataContext.Provider value={productData}>
      {children}
    </ProductDataContext.Provider>
  )
}

export default ProductContext
