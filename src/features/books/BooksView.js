import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooks } from './bookSlice';
import { Link } from "react-router-dom"


const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books)
    const dispatch = useDispatch()

    const handelRemove = (id) => {
        dispatch(deleteBooks(id))

    }

    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map((book, index) => {
                        const { id, title, author } = book

                        return <tr key={index}>
                            <th>{index + 1}</th>
                            <th>{title}</th>
                            <th>{author}</th>
                            <th>
                                <Link to="/updateBook" state={{ id, title, author }}>
                                    <button>
                                        EDIT
                                    </button>
                                </Link>
                                <button onClick={() => handelRemove(id)}>Remove</button> </th>
                        </tr>
                    })}

                </tbody>

            </table>
        </>
    );
};

export default BooksView;