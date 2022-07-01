import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { updateBooks } from '../features/books/bookSlice';

const UpdateBook = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(location);
    // const [id] = useState(location.state.id);

    // const [title, setTitle] = useState(location.state.title);
    // const [author, setAuthor] = useState(location.state.author);

    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);


    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(updateBooks({ id, title, author }))
        navigate("/")

    }

    return (
        <div>
            <h1>Update your book</h1>
            <form onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="title"> Title</label>
                    <input type="text" id="title" name="title" value={title} required onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="author"> author</label>
                    <input type="text" id="author" name="author" value={author} required onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <input type="submit" value={"EDIT BOOK"} />

            </form>
        </div>
    );
};

export default UpdateBook;