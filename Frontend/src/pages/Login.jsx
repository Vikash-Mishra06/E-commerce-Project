import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Link, useNavigate } from 'react-router-dom'
import { asyncloginuser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'

const Login = () => {
  const { register, reset, handleSubmit } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginHandler = (user) => {
    dispatch(asyncloginuser(user))
    navigate("/")

    reset()
  }
  return (
    <div className='flex items-center justify-center flex-col p-8 gap-2'>
      <h1 className='text-5xl pb-4'>Login</h1>
      <form onSubmit={handleSubmit(loginHandler)} className='flex flex-col w-1/2 border-1 p-10 rounded-xl bg-transparent'>
        <input {...register("email")} className='outline-0 border-b p-4 text-xl ' type="email" placeholder='Enter Email' />
        <input {...register("password")} className='outline-0 border-b p-4 mb-8 text-xl ' type="password" placeholder='Enter Password' />
        <button className='text-[#1F1C2C] bg-[#918DA9] hover:scale-[1.03] border-1 text-xl py-2 text-center rounded-xl pb-2'>Login</button>
        <Link to="/register" className='pt-4 text-center hover:hover:scale-[1.01]'>Don't have account? Register</Link>
      </form>
    </div>
  )
}

export default Login