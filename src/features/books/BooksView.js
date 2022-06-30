import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books)
    console.log(books);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map((book) => {
                        console.log(book);
                        const { id, title, author } = book

                        return <tr>
                            <th>{id}</th>
                            <th>{title}</th>
                            <th>{author}</th>
                            <th></th>
                        </tr>
                    })}

                </tbody>

            </table>
        </div>
    );
};

export default BooksView;