import { configureStore } from '@reduxjs/toolkit'
import coinlistReducer from "./coinlistSlice";

export const store = configureStore({
  reducer: {
    coinlist: coinlistReducer
  }
})