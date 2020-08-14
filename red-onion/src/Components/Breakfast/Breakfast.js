import React from 'react';
import './Breakfast.css';

const Breakfast = () => {
    return (
        <div className="breakfast-wrapper">
            <div className="breakfast-box">
                <img src="/img/Breakfast/breakfast1.png" alt=""/>
                <h2>Bagel and cream cheese</h2>
                <p>How we dream about our future</p>
                <h3>$6.99</h3>
            </div>
            <div className="breakfast-box">
                <img src="/img/Breakfast/breakfast2.png" alt=""/>
                <h2>Breakfast sandwitch</h2>
                <p>How we dream about our future</p>
                <h3>$9.99</h3>
            </div>
            <div className="breakfast-box">
                <img src="/img/Breakfast/breakfast3.png" alt=""/>
                <h2>Baked chiken</h2>
                <p>How we dream about our future</p>
                <h3>$10.99</h3>
            </div>
            <div className="breakfast-box">
                <img src="/img/Breakfast/breakfast4.png" alt=""/>
                <h2>Eggs Benedict</h2>
                <p>How we dream about our future</p>
                <h3>$8.99</h3>
            </div>
            <div className="breakfast-box">
                <img src="/img/Breakfast/breakfast5.png" alt=""/>
                <h2>Toast Croissant Fried egg</h2>
                <p>How we dream about our future</p>
                <h3>$19.99</h3>
            </div>
            <div className="breakfast-box">
                <img src="/img/Breakfast/breakfast6.png" alt=""/>
                <h2>Full Breakfast Fried Egg</h2>
                <p>How we dream about our future</p>
                <h3>$3.99</h3>
            </div>

        </div>
    );
};

export default Breakfast;