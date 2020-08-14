import React from 'react';
import './Dinner.css';

const Dinner = () => {
    return (
        <div className="dinner-wrapper">
             <div className="dinner-box">
                <img src="/img/Dinner/dinner1.png" alt=""/>
                <h2>Salmon with Grapefruit</h2>
                <p>How we dream about our future</p>
                <h3>$9.99</h3>
            </div>
            <div className="dinner-box">
                <img src="/img/Dinner/dinner2.png" alt=""/>
                <h2>Lemony Salmon Piccata</h2>
                <p>How we dream about our future</p>
                <h3>$10.99</h3>
            </div>
            <div className="dinner-box">
                <img src="/img/Dinner/dinner3.png" alt=""/>
                <h2>Pork Tendorloin</h2>
                <p>How we dream about our future</p>
                <h3>$12.99</h3>
            </div>
            <div className="dinner-box">
                <img src="/img/Dinner/dinner4.png" alt=""/>
                <h2>French Fries with cheese</h2>
                <p>How we dream about our future</p>
                <h3>$8.99</h3>
            </div>
            <div className="dinner-box">
                <img src="/img/Dinner/dinner5.png" alt=""/>
                <h2>Garlic Butter Baked</h2>
                <p>How we dream about our future</p>
                <h3>$15.99</h3>
            </div>
            <div className="dinner-box">
                <img src="/img/Dinner/dinner6.png" alt=""/>
                <h2>Baked chicken</h2>
                <p>How we dream about our future</p>
                <h3>$9.99</h3>
            </div>
        </div>
    );
};

export default Dinner;