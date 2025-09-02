import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../pages/Home'
import Products from './../pages/Products'
import Login from './../pages/Login'
import Register from './../pages/Register'
import CreateProduct from './../pages/admin/CreateProduct'
import Logout from '../pages/user/Logout'
import ProductDetails from '../pages/productDetails'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<Register />} />

        <Route path='/admin/create-product' element={<CreateProduct />} />
        <Route path='/product/:id' element={<ProductDetails />} />

    </Routes>
  )
}

export default MainRoutes