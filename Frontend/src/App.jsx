import React, { useEffect } from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'
import { asynccurrentuser } from './store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadproduct } from './store/actions/productActions'

const App = () => {
  const dispatch = useDispatch()
  const {users} = useSelector((state) => state.usersReducer)
  const {products} = useSelector((state) => state.productsReducer)


  useEffect(() => {
    !users && dispatch(asynccurrentuser())
  },[users])

  useEffect(() => {
    products.length == 0 && dispatch(asyncloadproduct())
  },[products])

  return (
    <div className=' bg-[#1F1C2C] w-screen h-screen font-medium text-[#918DA9]'>
  <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App