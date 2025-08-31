import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Link, useNavigate } from 'react-router-dom'
import { asyncregisteruser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'

const Register = () => {
  const { register, reset, handleSubmit } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const registerHandler = (user) => {
    user.id = nanoid()
    user.isAdmin = false
    dispatch(asyncregisteruser(user))
    navigate("/login")
    reset()
  }
  return (
    <div className='flex items-center justify-center flex-col p-8 gap-2'>
      <h1 className='text-4xl pb-4'>Register</h1>
      <form onSubmit={handleSubmit(registerHandler)} className='flex flex-col w-1/3 border-1 p-10 rounded-xl bg-transparent'>
        <input {...register("username")} className='outline-0 border-b p-4 text-xl' type="text" placeholder='Enter Username' />
        <input {...register("email")} className='outline-0 border-b p-4 text-xl' type="email" placeholder='Enter Email' />
        <input {...register("password")} className='outline-0 border-b p-4 mb-8 text-xl' type="password" placeholder='Enter Password' />
        <button className='text-[#1F1C2C] bg-[#918DA9] hover:scale-[1.03] border-1 text-xl py-2 text-center rounded-xl pb-2'>Register</button>
        <Link to="/login" className='pt-4 text-center hover:hover:scale-[1.01]'>Already have account? Login</Link>
      </form>
    </div>
  )
}

export default Register