import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="div-container">
            <nav className="">
            <input className="search-box" type="text" name="" id="" />
            <button className="btn">Search</button>
                <a href="/super-sale">Super Sale</a>
                <a href="/top-tending-product"> Top 10 Best Selling </a>
                <a href="/all-product"> All Product </a>
                <a href="/trending-product"> Trending Products</a>
                

                </nav>
               
        </div>
    );
};

export default Header;