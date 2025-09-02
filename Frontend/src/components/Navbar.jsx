import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (user) => {
  return (
    <nav className="flex justify-center items-center gap-x-10 p-5 text-lg ">
      <NavLink className={({ isActive }) =>
        `hover:underline ${isActive ? "text-red-400 underline" : ""}`
      } to={"/"}>Home</NavLink>
      <NavLink className={({ isActive }) =>
        `hover:underline ${isActive ? "text-red-400 underline" : ""}`
      } to={"/products"}>Products</NavLink>
      {user ? (
        <>
          <NavLink className={({ isActive }) =>
            `hover:underline ${isActive ? "text-red-400 underline" : ""}`
          } to={"/admin/create-product"}>Create Product</NavLink>
          <NavLink className={({ isActive }) =>
            `hover:underline ${isActive ? "text-red-400 underline" : ""}`
          } to={"/logout"}>Logout</NavLink>

        </>

      ) : (
        <>
          <NavLink className={({ isActive }) =>
            `hover:underline ${isActive ? "text-red-400" : ""}`
          } to={"/login"}>Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
