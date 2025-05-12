import { configureStore } from '@reduxjs/toolkit'
import myReducer from '../reducers/mySlice'
import anotherReducer from '../reducers/anotherSlice'

export const store = configureStore({
  reducer: {
    my: myReducer,
    another: anotherReducer
  },
})