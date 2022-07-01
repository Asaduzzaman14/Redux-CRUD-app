import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <div className=''>
                <Link to="/"> Home </Link>
                <Link to="/">All Book</Link>
                <Link to="/addBook"> Add Books </Link>
                <Link to="/about"> About </Link>
                <Link to="/myBooks"> My Books </Link>

            </div>
        </div>
    );
};

export default Navber;