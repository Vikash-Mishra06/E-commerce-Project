import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { asyncdeleteproduct } from '../store/actions/productActions'
import { toast } from 'react-toastify'
import { asyncupdateuser } from '../store/actions/userActions'

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productsReducer.products) || []
  const users = useSelector((state) => state.usersReducer.users) || []

  // const {usersReducer: {users}, productsReducer: {products}} = useSelector((state) => state)
  const { id } = useParams()

const AddtoCartHandler = (product) => {
  const copyuser = { ...users, cart: [...(users?.cart) || [] ] };

  const x = copyuser.cart.findIndex((c) => c?.product?.id === product.id);

  if (x === -1) {
    copyuser.cart.push({ product, quantity: 1 });
  } else {
    copyuser.cart[x] = {
      ...copyuser.cart[x],
      quantity: copyuser.cart[x].quantity + 1,
    };
  }
  dispatch(asyncupdateuser(copyuser.id, copyuser));

  console.log("Updated cart before dispatch:", copyuser.cart);

  toast.success("Added to Cart");
};



  const navigate = useNavigate()

  const DeleteHandler = (id) => {
    dispatch(asyncdeleteproduct(id))
    navigate("/products")
    toast.success("Product Deleted")
  }

  const renderproduct = products.map((product) => {
    return product ? (
      <div key={product.id} className="w-[23%] border p-3 rounded-lg bg-[#1F1C2C] text-white ">
        <div className="relative w-full h-48 overflow-hidden rounded mb-2">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            src={product.image}
            alt={product.title}
          />
          {/* Overlay */}
          <Link to={`/product/${product.id}`} className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-medium hover:scale-105 border-1 rounded-xl px-4 py-1">More Info</span>
          </Link>
        </div>

        <h1 className="text-xl pb-2 font-thin">
          <span className="text-red-400 font-medium">Title: </span>{product.title.slice(0, 20)}...
        </h1>
        <h1 className="text-xl pb-2 font-thin">
          <span className="text-red-400 font-medium">Description: </span>
          {product.description.slice(0, 18)}...
        </h1>
        <p className="text-xl pb-2 font-thin">
          <span className="text-red-400 font-medium">Price: </span>${product.price}
        </p>
        <div className="flex justify-between gap-5">
          <button onClick={() => AddtoCartHandler(product)} className="text-[#1F1C2C] bg-[#918DA9] hover:scale-[1.03] text-lg py-2 px-4 text-center rounded-xl mt-2">
            Add to Cart <i className="ri-shopping-cart-line"></i>
          </button>
          <button onClick={() => DeleteHandler(product.id)} type='button' className=" text-[#1F1C2C] bg-[#918DA9] hover:scale-[1.03] text-lg py-2 px-4 text-center rounded-xl mt-2">Remove <i className="ri-delete-bin-line"></i></button>

        </div>
      </div>

    ) : (
      "Loading"
    )
  })
  return products.length > 0 ?
    <div className='flex flex-wrap gap-5  p-5 '>
      {renderproduct}
    </div>
    : "loading..."
}

export default Products
