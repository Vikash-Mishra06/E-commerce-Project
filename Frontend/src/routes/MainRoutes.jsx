import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../pages/Home'
import Products from './../pages/Products'
import Login from './../pages/Login'
import Register from './../pages/Register'
import CreateProduct from './../pages/admin/CreateProduct'
import ProductDetails from '../pages/productDetails'
import UserProfile from '../pages/user/UserProfile'



const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/admin/create-product' element={<CreateProduct />} />
        <Route path='/admin/user-profile' element={<UserProfile />} />
        <Route path='/product/:id' element={<ProductDetails />} />

    </Routes>
  )
}

export default MainRoutes