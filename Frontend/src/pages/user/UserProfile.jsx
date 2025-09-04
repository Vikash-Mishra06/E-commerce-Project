import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncdeleteuser, asyncupdateuser } from '../../store/actions/userActions'
import { toast } from 'react-toastify'

const UserProfile = () => {
// const { usersReducer: { users } } = useSelector((state) => state)
  const users = useSelector((state) => state.usersReducer.users) || []
  const { register, reset, handleSubmit } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (users) {
      reset({
        username: users.username,
        email: users.email,
        password: users.password,
      })
    }
  }, [users, reset])

  const UpdateUserHandler = (user) => {
    dispatch(asyncupdateuser(users.id, user))
    toast.success("User Updated")
  }

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(users.id))
    navigate("/register")
    toast.success("User Deleted")
  }

  if (!users) {
    return <p className='text-center text-4xl mt-10'>Loading Please Refresh the page...</p>
  }

  return (
    <div>
      <div className='flex items-center justify-center flex-col p-8 gap-2'>
        <h1 className='text-5xl pb-4'>Update User</h1>
        <form onSubmit={handleSubmit(UpdateUserHandler)} className='flex flex-col w-1/2 border-1 p-10 rounded-xl bg-transparent '>
          <input {...register("username")} className='outline-0 border-b p-4 text-xl ' type="text" placeholder='Enter Username' />
          <input {...register("email")} className='outline-0 border-b p-4 text-xl ' type="email" placeholder='Enter Email' />
          <input {...register("password")} className='outline-0 border-b p-4 text-xl mb-4' type="number" placeholder='Enter Password' />
          <div className='flex justify-center gap-10'>
            <button className='text-white bg-green-500 hover:scale-[1.02] border-0 text-xl py-2 px-4 text-center rounded-xl'>
              Update User <i className="ri-refresh-line"></i>
            </button>
            <button onClick={DeleteHandler} type='button' className='text-white bg-red-500 hover:scale-[1.02] border-0 text-xl py-2 px-4 text-center rounded-xl'>
              Delete User <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserProfile
