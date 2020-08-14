import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <div className="slider">
            <div className="slide-child">
                <h1>Best food waiting for your belly</h1>
                <input type="text" placeholder="Search food items"/>
                <button className="search-btn">Search</button>
            </div>
        </div>
    );
};

export default Slider;