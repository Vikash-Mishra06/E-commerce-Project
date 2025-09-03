import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {

  const { usersReducer: { users } } = useSelector((state) => state)


  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password
    }
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const UpdateUserHandler = (user) => {
    dispatch(asyncupdateuser(users.id, user))
    toast.success("Udated Successfully")
  }

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id))
    navigate("/register")
    toast.success("User Deleted")
  }

  return users ?(
    <div>
      <div className='flex items-center justify-center flex-col p-8 gap-2'>
        <h1 className='text-5xl pb-4'>Update User</h1>
        <form  className='flex flex-col w-1/2 border-1 p-10 rounded-xl bg-transparent '>
          <input {...register("username")} className='outline-0 border-b p-4 text-xl ' type="text" placeholder='Enter Username' />
          <input {...register("email")} className='outline-0 border-b p-4 text-xl ' type="email" placeholder='Enter Email' />
          <input {...register("password")} className='outline-0 border-b p-4 text-xl  mb-4' type="number" placeholder='Enter Password' />
          <div className='flex justify-center gap-10'>
          <button className='text-white bg-green-500 hover:scale-[1.02] border-0 text-xl py-2 px-4 text-center rounded-xl'>Update User <i class="ri-refresh-line"></i></button>
          <button className='text-white bg-red-500 hover:scale-[1.02] border-0 text-xl py-2 px-4 text-center rounded-xl'>Delete User <i class="ri-delete-bin-line"></i></button>
          </div>
        </form>
      </div>
    </div>
  ):(
    "Loading User Details"
  )
}

export default UserProfile