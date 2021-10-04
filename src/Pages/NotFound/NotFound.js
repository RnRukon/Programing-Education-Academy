
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mb-5">
            <div className="text-center pt-5">
                <img style={{ width: '500px' }} src='https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png' alt="" />
            </div>
            <div className="text-center text-danger">
                <h1 >PAGE NOT FOUND</h1>
                <NavLink style={{ textDecoration: 'none', padding: "5px 10px", backgroundColor: 'red', color: 'white', borderRadius: '10px' }} to="/home">Go to Home</NavLink>
            </div>
        </div>
    );
};

export default NotFound;