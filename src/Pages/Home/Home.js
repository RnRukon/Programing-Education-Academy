import React from 'react';
import Blog from '../../Components/Blog/Chart';
import HomeServiceCart from '../../Components/HomeServiceCart/HomeServiceCart';

const Home = () => {
    return (
        <div className="container">
            <Blog></Blog>

            <HomeServiceCart></HomeServiceCart>
        </div>
    );
};

export default Home;