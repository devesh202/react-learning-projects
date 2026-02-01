import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Men from '../page/Men'
import Women from '../page/Women'
import Product from './components/Product'
import Randomabout from './components/Randomabout'
import Course from './components/Course'
import Anycourse from './components/Anycourse'
import NotFound from './components/NotFound'

const App = () => {
  return (

    <>
      <Navbar/>
  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
         <Route path="/product/men" element={<Men />} />
  <Route path="/product/women" element={<Women />} />
  {/* Dynamic Routes  */}
  {/* if we give about/anything it will go to aboutrandom page   */}
  <Route path='/about/:id' element={<Randomabout/>}/> 
  <Route path='/course' element={<Course/>}/>
  <Route path='/course/:courseId' element={<Anycourse/>}/>

  {/* Notfound page  */}
  <Route path='/*' element={<NotFound/>}></Route>


        




      </Routes>
    </>
  )
}

export default App