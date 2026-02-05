import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Navbar1 from './components/Navbar1'
// import Sections from './components/Sections'
// import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'

const App = () => {
  // const [theme,setTheme] = useState('light')
    return (
    <div>
      
        
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path="/products/:id" element={<ProductDetails/>} />

        </Routes>
    

    
    </div>

    
  )
}

export default App