import { configureStore } from '@reduxjs/toolkit'
import NotePadReducer from './Redux/NotePadSclice'
export const store = configureStore({
  reducer: {
    NotePad: NotePadReducer,
  },
})