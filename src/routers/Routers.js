import React from 'react'
import Home from '../pages/home'
import Shop from '../pages/Shop'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { Routes, Route, Navigate } from 'react-router-dom'
import Categories from '../pages/Categories'
import AboutUs from '../pages/AboutUs'
import Favorites from '../pages/Favorites'

const Routers = () => {
  return (
    <Routes>
      <Route path ="/" element={<Navigate to ='/home'/>} />
      <Route path='home' element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='categories' element={<Categories/>}/>
      <Route path='aboutus' element={<AboutUs/>}/>
      <Route path='/:id' element={<ProductDetails/>}/>
      <Route path='favorites' element={<Favorites/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
  </Routes>
  )
}

export default Routers