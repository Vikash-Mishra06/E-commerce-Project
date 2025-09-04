import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { asyncremovecart } from '../../store/actions/cartActions'
import { toast } from 'react-toastify'

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productsReducer.products) || []
  const users = useSelector((state) => state.usersReducer.users) || []
 
  const RemoveCartHandler = (id) => {
    dispatch(asyncremovecart(id))
    toast.success("Removed From Cart")
  }

  const cartItems = users?.cart?.map((c) => {
    return c ? (
          <div key={c.product.id} className="w-[23%] border p-3 rounded-lg bg-[#1F1C2C] text-white ">
            <div className="relative w-full h-48 overflow-hidden rounded mb-2">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                src={c.product.image}
                alt={c.product.title}
              />
              {/* Overlay */}
              <Link to={`/product/${c.product.id}`} className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium hover:scale-105 border-1 rounded-xl px-4 py-1">More Info</span>
              </Link>
            </div>
    
            <h1 className="text-xl pb-2 font-thin">
              <span className="text-red-400 font-medium">Title: </span>{c.product.title.slice(0, 20)}...
            </h1>
            <h1 className="text-xl pb-2 font-thin">
              <span className="text-red-400 font-medium">Description: </span>
              {c.product.description.slice(0, 18)}...
            </h1>
            <p className="text-xl pb-2 font-thin">
              <span className="text-red-400 font-medium">Price: </span>${c.product.price}
            </p>
            <div className="flex justify-between gap-5">
              <button  onClick={() => RemoveCartHandler(c.productId || c.product.id)} className="text-[#1F1C2C] bg-[#918DA9] hover:scale-[1.03] text-lg py-2 px-4 text-center rounded-xl mt-2">
                Remove <i className="ri-delete-bin-line"></i>
              </button>
    
            </div>
          </div>
    
        ) : (
          "Loading"
        )
      })
  return (
    <div className="flex flex-wrap gap-5 p-5">
    {users?.cart && users.cart.length > 0 ? (
      cartItems
    ) : (
      <h2 className="text-2xl text-red-400 font-semibold text-center">No Item Found</h2>
    )}
  </div>
  )
}

export default Cart