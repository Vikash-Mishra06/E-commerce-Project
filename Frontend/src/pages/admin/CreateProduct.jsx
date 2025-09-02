import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asynccreateproduct } from '../../store/actions/productActions'
import { toast } from 'react-toastify'

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const CreateProductHandler = (product) => {
    product.id = nanoid()
    console.log(product)
    dispatch(asynccreateproduct(product))
    toast.success("Product Created")
    navigate("/products")
  }
  return (
    <div className='flex items-center justify-center flex-col p-8 gap-2'>
      <h1 className='text-4xl pb-4'>Create Product</h1>
      <form onSubmit={handleSubmit(CreateProductHandler)} className='flex flex-col w-1/2 border-1 p-10 rounded-xl bg-transparent'>
        <input {...register("image")} className='outline-0 border-b p-4 text-xl' type="url" placeholder='Enter ImageURL' />
        <input {...register("title")} className='outline-0 border-b p-4 text-xl' type="text" placeholder='Enter Title' />
        <input {...register("price")} className='outline-0 border-b p-4 text-xl' type="number" placeholder='Enter Price' />
        <input {...register("category")} className='outline-0 border-b p-4 text-xl' type="text" placeholder='Enter Category' />
        <textarea {...register("description")} className='outline-0 border-b p-4 text-xl mb-8' type="text" placeholder='Enter Description' />
        <button className='text-[#1F1C2C] bg-[#918DA9] hover:scale-[1.02] border-1 text-xl py-2 text-center rounded-xl pb-2'>Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct