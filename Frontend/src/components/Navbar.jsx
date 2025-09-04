import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asynclogoutuser } from "../store/actions/userActions";

const Navbar = (user) => {
  const users = useSelector((state) => state.userReducer?.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(asynclogoutuser());
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="flex justify-center items-center gap-x-10 p-5 text-lg ">
      <NavLink className={({ isActive }) => `hover:underline ${isActive ? "text-red-400 underline" : ""}`} to={"/"}>Home</NavLink>
      <NavLink className={({ isActive }) => `hover:underline ${isActive ? "text-red-400 underline" : ""}`} to={"/products"}>Products</NavLink>
      <NavLink className={({ isActive }) => `hover:underline ${isActive ? "text-red-400 underline" : ""}`} to={"/admin/create-product"}>Create Product</NavLink>
      <NavLink className={({ isActive }) => `hover:underline ${isActive ? "text-red-400 underline" : ""}`} to={"/user/cart"}>Cart </NavLink>
      <NavLink className={({ isActive }) => `hover:underline ${isActive ? "text-red-400 underline" : ""}`} to={"/admin/user-profile"}>Profile</NavLink>
      {users ? (

        <NavLink
          className={({ isActive }) =>
            `hover:underline ${isActive ? "text-red-400" : ""}`
          }
          to={"/login"}
        >
          Login
        </NavLink>

      ) : (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded hover:scale-105"
        >
          Logout
        </button>
      )}
    </nav>

  );
};

export default Navbar;
