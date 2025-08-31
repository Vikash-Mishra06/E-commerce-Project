import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from './reducers/CartSlice'
import productsSlice from './reducers/ProductSlice'
import usersSlice from './reducers/userSlice'


export const store = configureStore({
  reducer: {
    usersReducer: usersSlice,
    productsReducer: productsSlice,
    cartsReducer: cartsSlice,
  },
});
