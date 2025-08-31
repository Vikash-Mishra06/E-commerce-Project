import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center gap-x-10 p-5 text-lg '>
        <NavLink className="hover:underline" to={"/"}>Home</NavLink>
        <NavLink className="hover:underline" to={"/products"}>Products</NavLink>
        <NavLink className="hover:underline" to={"/login"}>Login</NavLink>
    </nav>
  )
}

export default Navbar