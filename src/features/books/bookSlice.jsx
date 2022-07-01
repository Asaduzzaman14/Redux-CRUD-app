import { createSlice } from "@reduxjs/toolkit"
const { v4: uuidv4 } = require('uuid');

const initialBooks = {
    books: [
        { id: uuidv4(), title: 'bangladesh', author: 'asad' },
        { id: uuidv4(), title: 'Hello bangladesh', author: 'md asad' },
        { id: uuidv4(), title: 'Hello bangladesh', author: 'md asad' },
    ]
}

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,

        addBooks: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBooks: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
        },
        updateBooks: (state, action) => {
            const { id, title, author } = action.payload;
            const isExist = state.books.filter(book => book.id === id);
            console.log(isExist);
            if (isExist) {
                isExist[0].title = title
                isExist[0].author = author
            }
        }

    },

})
export const { showBooks, addBooks, deleteBooks, updateBooks } = booksSlice.actions;

export default booksSlice.reducer