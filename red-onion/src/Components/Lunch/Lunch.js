import React from 'react';
import './Lunch.css'

const Lunch = () => {
    return (
        <div className="lunch-wrapper">
            <div className="lunch-box">
                <img src="/img/lunch/lunch1.png" alt=""/>
                <h2>Healthy Meal Plan</h2>
                <p>How we dream about our future</p>
                <h3>$23.99</h3>
            </div>
            <div className="lunch-box">
                <img src="/img/lunch/lunch2.png" alt=""/>
                <h2>Fried Chicken Bento</h2>
                <p>How we dream about our future</p>
                <h3>$9.99</h3>
            </div>
            <div className="lunch-box">
                <img src="/img/lunch/lunch3.png" alt=""/>
                <h2>Tarragoan-Rubed-Salmon</h2>
                <p>How we dream about our future</p>
                <h3>$6.99</h3>
            </div>
            <div className="lunch-box">
                <img src="/img/lunch/lunch4.png" alt=""/>
                <h2>Indian Lunch</h2>
                <p>How we dream about our future</p>
                <h3>$8.99</h3>
            </div>
            <div className="lunch-box">
                <img src="/img/lunch/lunch5.png" alt=""/>
                <h2>Beef Steck</h2>
                <p>How we dream about our future</p>
                <h3>$15.99</h3>
            </div>
            <div className="lunch-box">
                <img src="/img/lunch/lunch6.png" alt=""/>
                <h2>Honey-Soy-Glazed</h2>
                <p>How we dream about our future</p>
                <h3>$7.99</h3>
            </div>
        </div>
    );
};

export default Lunch;