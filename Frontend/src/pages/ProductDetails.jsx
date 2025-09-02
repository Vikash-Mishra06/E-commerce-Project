import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncdeleteproduct, asyncupdateproduct } from '../store/actions/productActions'
import { toast } from 'react-toastify'

const ProductDetails = () => {
  const { id } = useParams()
  
  const { productsReducer: { products }, usersReducer: { users } } = useSelector((state) => state)
  const product = products?.find((product) => product.id == id)


  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description
    }
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id, product))
    toast.success("Udated Successfully")
  }

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id))
    navigate("/products")
    toast.success("Product Deleted")
  }

  return product ? (
    <>
      <h1 className="text-center text-5xl mt-5">Product Details</h1>
      <div className='flex items-center justify-between gap-5 -mt-7'>
        <div className="left p-10 flex items-center w-[50%] h-[40vw] ">
          <img
            className="w-[700px] h-[500px] object-contain border-1 rounded-xl "
            src={product.image}
            alt={product.title}
          />

        </div>
        <div className='right w-[50%] p-10 text-white'>
          <h1 className="text-5xl pb-5 font-thin">
            <span className="text-5xl text-red-400 font-medium">Title: </span>{product.title}
          </h1>
          <h1 className="text-4xl pb-5 font-thin">
            <span className="text-4xl text-red-400 font-medium">Description: </span>
            {product.description}
          </h1>
          <p className="text-4xl pb-5 font-thin">
            <span className="text-4xl text-red-400 font-medium">Price: </span>${product.price}
          </p>
          <div className="flex gap-5">
            <button className="text-[#1F1C2C] bg-[#918DA9] hover:scale-[1.03] text-xl py-2 px-4 text-center rounded-xl mt-2">
              Add to Cart <i className="ri-shopping-cart-line"></i>
            </button>
            <button onClick={DeleteHandler} className=" text-[#1F1C2C] bg-[#918DA9] hover:scale-[1.03] text-xl py-2 px-4 text-center rounded-xl mt-2">
              Remove <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        </div>
      </div>
      <br />
      <hr />
      {users && users?.isAdmin && 
      <div className='flex items-center justify-center flex-col p-8 gap-2'>
        <h1 className='text-5xl pb-4'>Update Product</h1>
        <form onSubmit={handleSubmit(UpdateProductHandler)} className='flex flex-col w-1/2 border-1 p-10 rounded-xl bg-transparent'>
          <input {...register("image")} className='outline-0 border-b p-4 text-xl' type="url" placeholder='Enter ImageURL' />
          <input {...register("title")} className='outline-0 border-b p-4 text-xl' type="text" placeholder='Enter Title' />
          <input {...register("price")} className='outline-0 border-b p-4 text-xl' type="number" placeholder='Enter Price' />
          <input {...register("category")} className='outline-0 border-b p-4 text-xl' type="text" placeholder='Enter Category' />
          <textarea {...register("description")} className='outline-0 border-b p-4 text-xl mb-8' type="text" placeholder='Enter Description' />
          <button className='text-[#1F1C2C] bg-[#918DA9] hover:scale-[1.02] border-1 text-xl py-2 text-center rounded-xl pb-2'>Update Product</button>
        </form>
      </div>
      }

      
    </>
  ) : (
    "Loading"
  )
}

export default ProductDetails