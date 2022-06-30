import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../features/books/bookSlice'
// import counterReducer from '../features/counter/counterSlice'

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
    },
})
export default store