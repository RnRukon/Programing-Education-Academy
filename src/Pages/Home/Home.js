import React from 'react';
import Blog from '../../Components/Blog/Blog';
import HomeServiceCart from '../../Components/HomeServiceCart/HomeServiceCart';

const Home = () => {
    return (
        <div className="container">
            {/* blog page */}
            <Blog></Blog>
            {/* service card in home page*/}
            <HomeServiceCart></HomeServiceCart>
        </div>
    );
};

export default Home;