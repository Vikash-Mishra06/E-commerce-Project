import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/reducers/userSlice";

const Navbar = (user) => {
  const users = useSelector((state) => state.userReducer?.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="flex justify-center items-center gap-x-10 p-5 text-lg ">
      <NavLink className={({ isActive }) => `hover:underline ${isActive ? "text-red-400 underline" : ""}`} to={"/"}>Home</NavLink>
      <NavLink className={({ isActive }) => `hover:underline ${isActive ? "text-red-400 underline" : ""}`} to={"/products"}>Products</NavLink>
        <NavLink className={({ isActive }) => `hover:underline ${isActive ? "text-red-400 underline" : ""}`} to={"/admin/create-product"}>Create Product</NavLink>

      {user ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      ) : (
        <NavLink
          className={({ isActive }) =>
            `hover:underline ${isActive ? "text-red-400" : ""}`
          }
          to={"/login"}
        >
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
