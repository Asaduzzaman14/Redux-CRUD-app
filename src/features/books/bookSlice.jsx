import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        { id: 1, books: 'bangladesh', author: 'asad' },
        { id: 2, books: 'Hello bangladesh', author: 'md asad' },
        { id: 3, books: 'Hello bangladesh', author: 'md asad' },
    ]
}

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state
    },

})
export const { showBooks } = booksSlice.actions;

export default booksSlice.reducer