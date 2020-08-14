import React from 'react';
import './FoodNav.css';

const FoodNav = () => {
    return (
        <div className="fnav-wrapper">
            <a href="/breakfast">Breakfast</a>
            <a href="/lunch">Lunch</a>
            <a href="/dinner">Dinner</a>
        </div>
    );
};

export default FoodNav;