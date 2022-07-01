import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addBooks } from '../features/books/bookSlice';
const { v4: uuidv4 } = require('uuid');

const AddBooks = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const totalBooks = useSelector((state) => state.booksReducer.books.length)

    const handelForm = (e) => {
        e.preventDefault()
        const book = { id: uuidv4(), title, author }
        dispatch(addBooks(book))
        e.target.reset()
        navigate("/")

    }

    return (
        <div>
            <h2>Add your book</h2>
            <form onSubmit={handelForm}>

                <div>
                    <label htmlFor="title"> Title</label>
                    <input type="text" id="title" name="title" required onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="author"> author</label>
                    <input type="text" id="author" name="author" required onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <input type="submit" value={"Add book"} />
            </form>
        </div>
    );
};

export default AddBooks;