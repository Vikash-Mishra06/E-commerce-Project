import React, { useEffect } from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'
import { asynccurrentuser } from './store/actions/userActions'
import { useDispatch } from 'react-redux'
import { asyncloadproduct } from './store/actions/productActions'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asynccurrentuser())
    dispatch(asyncloadproduct())
  },[])
  return (
    <div className=' bg-[#1F1C2C] w-screen h-screen font-medium text-[#918DA9]'>
  <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App