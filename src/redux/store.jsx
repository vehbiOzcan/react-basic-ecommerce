import { configureStore } from '@reduxjs/toolkit'
import productReducers from './slices/productSlice'
import appReducers from './slices/appSlice'
import basketReducers from './slices/basketSlice'

export const store = configureStore({
  reducer: {
    app:appReducers,
    products:productReducers,
    basket:basketReducers
  },
})